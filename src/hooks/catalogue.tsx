import { fetchAllPokemons, fetchPokemonTypes } from "@/services/pokeapi"
import { Pokemon } from "@/types/pokemon";
import { useEffect, useState } from "react";

/**
 * Fetches and displays a limited number of pokemons based on the search parameter.
 *
 * @param {number} limit - The maximum number of pokemons to display.
 * @param {string} searchParam - The search parameter to filter the pokemons.
 * @param {string} sortMethod - The method to sort the pokemons.
 * @return {Pokemon[]} An array of pokemons or an empty array if an error occurred.
 */
export const useDisplayPokemons = (limit: number, searchParam: string, sortMethod: string): Pokemon[] => {
    const [pokemons, setPokemons] = useState<Pokemon[] | null>(null);

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                const pokemonList = await getPokemonsFromLocalStorage();

                if (!pokemonList) {
                    throw new Error("Failed to fetch pokemons");
                }

                const filteredPokemons = searchParam
                    ? fetchSearchedPokemons(searchParam, pokemonList).slice(0, limit)
                    : pokemonList.slice(0, limit);

                const pokemonWithTypes = await Promise.all(
                    filteredPokemons.map(async (pokemon) => ({
                        ...pokemon,
                        types: await fetchPokemonTypesById(pokemon.id),
                    }))
                );

                if (sortMethod && sortMethod !== 'AZ') {
                    sortFetchedPokemons(pokemonWithTypes, sortMethod);
                }

                setPokemons(pokemonWithTypes);
            } catch (error) {
                throw new Error("An error occurred while fetching pokemons");
            }
        };

        fetchPokemons();
    }, [limit, searchParam, sortMethod]);

    return pokemons || [];
};

/**
 * Sorts an array of Pokemon objects based on the provided sort method.
 *
 * @param {Pokemon[]} pokemons - The array of Pokemon objects to be sorted.
 * @param {string} sortMethod - The method by which the Pokemon objects should be sorted.
 * @return {void} This function does not return a value.
 */
function sortFetchedPokemons(pokemons: Pokemon[], sortMethod: string): void {
    switch (sortMethod) {
        case 'AZ':
            break;
        case 'ZA':
            pokemons.sort((a, b) => b.name.localeCompare(a.name));
            break;
        case '01':
            pokemons.sort((a, b) => a.id - b.id);
            break;
        case '10':
            pokemons.sort((a, b) => b.id - a.id);
            break;
        default:
            pokemons.sort((a, b) => a.name.localeCompare(b.name));
            break;
    }
}

/**
 * Fetches the types of a specific Pokemon by its ID.
 *
 * @param {string} pokemonId - The ID of the Pokemon to fetch types for (Ex. '1' not '001').
 * @return {Promise<string[]>} An array of strings representing the types of the Pokemon.
 */
const fetchPokemonTypesById = async (pokemonId: number): Promise<string[]> => {
    try {
        // Check if local storage contains the pokemon types

        const pokemonTypes = await fetchPokemonTypes(pokemonId);
        return pokemonTypes;
    } catch {
        throw new Error('Failed to fetch pokemon types');
    }
};

/**
 * Filters the given array of Pokemon based on the search parameters.
 *
 * @param {string} searchParams - The search parameters to filter the Pokemon by.
 * @param {Pokemon[]} pokemons - The array of Pokemon to filter.
 * @return {Pokemon[]} The filtered array of Pokemon.
 */
const fetchSearchedPokemons = (searchParams: string, pokemons: Pokemon[]) => {
    const searchedPokemons = pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchParams.toLowerCase()) ||
        pokemon.id.toString().includes(searchParams)
    );

    return searchedPokemons as Pokemon[];
}

/**
 * Retrieves an array of Pokemon from local storage, or fetches them from the PokeAPI if not found.
 *
 * @return {Promise<Pokemon[] | null>} A promise that resolves to an array of Pokemon objects, or null if an error occurred.
 */
const getPokemonsFromLocalStorage = (): Promise<Pokemon[] | null> => {
    return new Promise((resolve, reject) => {
        try {
            const storedPokemons = localStorage.getItem('pokemons');

            if (storedPokemons) {
                resolve(JSON.parse(storedPokemons) as Pokemon[]);
            } else {
                const pokemons = fetchAllPokemons();

                resolve(pokemons);
            }
        } catch (error) {
            reject(new Error('Failed to get pokemons from local storage'));
        }
    });
}