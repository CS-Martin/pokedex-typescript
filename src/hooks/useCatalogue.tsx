import { fetchAllPokemons, fetchPokemonTypes } from '@/services/pokeapi';
import { Pokemon, PokemonType } from '@/types/pokemon';
import { useEffect, useState } from 'react';

interface useDisplayPokemonsProps {
    pokemons: Pokemon[] | null;
    isLoading: boolean;
}

/**
 * Fetches and displays a limited number of pokemons based on the search parameter.
 *
 * @param {number} limit - The maximum number of pokemons to display.
 * @param {string} searchParam - The search parameter to filter the pokemons.
 * @param {string} sortMethod - The method to sort the pokemons.
 * @return {useDisplayPokemonsProps} An object containing an array of pokemons or null if an error occurred and a loading state.
 */
export const useDisplayPokemons = (limit: number, searchParam: string, sortMethod: string): useDisplayPokemonsProps => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [pokemons, setPokemons] = useState<Pokemon[] | null>(null);

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                setIsLoading(true);
                const pokemonList: Pokemon[] | null = await fetchAllPokemons();

                if (!pokemonList) {
                    throw new Error('Failed to fetch pokemons');
                }

                const filteredPokemons: Pokemon[] = searchParam
                    ? fetchSearchedPokemons(searchParam, pokemonList).slice(0, limit)
                    : pokemonList.slice(0, limit);

                const pokemonWithTypes: Pokemon[] = await Promise.all(
                    filteredPokemons.map(async (pokemon: Pokemon) => ({
                        ...pokemon,
                        types: await fetchPokemonTypesById(pokemon.id) as PokemonType[]
                    }))
                );

                if (sortMethod && sortMethod !== 'AZ') {
                    sortFetchedPokemons(pokemonWithTypes, sortMethod);
                }

                setPokemons(pokemonWithTypes);

                // Let's delay the loading state to prevent multiple clicks
                setTimeout(() => {
                    setIsLoading(false);
                }, 1500);
            } catch (error) {
                throw new Error('An error occurred while fetching pokemons');
            }
        };

        fetchPokemons();
    }, [limit, searchParam, sortMethod]);

    return {
        pokemons,
        isLoading
    };
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
    const searchedPokemons = pokemons.filter(
        (pokemon) =>
            pokemon.name.toLowerCase().includes(searchParams.toLowerCase()) ||
            pokemon.id.toString().includes(searchParams)
    );

    return searchedPokemons as Pokemon[];
};
