import { fetchAllPokemons, fetchPokemonTypes } from "@/services/pokeapi"
import { Pokemon } from "@/types/pokemon";
import { useEffect, useState } from "react";

/**
 * Fetches and displays a limited number of pokemons based on the search parameter.
 *
 * @param {number} limit - The maximum number of pokemons to display.
 * @param {string} searchParam - The search parameter to filter the pokemons.
 * @return {Pokemon[] | null} An array of pokemons or null if an error occurred.
 */
export const useDisplayPokemons = (limit: number, searchParam: string) => {
    const [pokemons, setPokemons] = useState<Pokemon[] | null>(null);

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                const pokemonList = await getPokemonsFromLocalStorage();

                if (!pokemonList) {
                    throw new Error("Failed to fetch pokemons");
                }

                const filteredPokemons = searchParam
                    ? useFetchSearchedPokemons(searchParam, pokemonList)
                    : pokemonList.slice(0, limit);

                const pokemonWithTypes = await Promise.all(
                    filteredPokemons.map(async (pokemon) => ({
                        ...pokemon,
                        types: await useFetchPokemonTypesById(String(parseInt(pokemon.id, 10))),
                    }))
                );

                console.log(pokemonWithTypes);
                setPokemons(pokemonWithTypes);
            } catch (error) {
                throw new Error("An error occurred while fetching pokemons");
            }
        };

        fetchPokemons();
    }, [limit, searchParam]);

    return pokemons || [];
};

/**
 * Fetches the types of a specific Pokemon by its ID.
 *
 * @param {string} pokemonId - The ID of the Pokemon to fetch types for (Ex. '1' not '001').
 * @return {Promise<string[]>} An array of strings representing the types of the Pokemon.
 */
const useFetchPokemonTypesById = async (pokemonId: string): Promise<string[]> => {
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
const useFetchSearchedPokemons = (searchParams: string, pokemons: Pokemon[]) => {
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