import { Pokemon } from '@/types/pokemon';
import {
    POKEAPI_POKEMONS_IMAGE_URL,
    POKEAPI_POKEMONS_URL
} from '@/utils/constants';

export const fetchAllPokemons = async (): Promise<Pokemon[]> => {
    try {
        const response: Response = await fetch(
            `${POKEAPI_POKEMONS_URL}?limit=1010&offset=0`
        );
        const data: { results: Pokemon[] } = await response.json();

        if (!response.ok) {
            throw new Error('Failed to fetch pokemons');
        }

        const pokemonsPromises: Promise<Pokemon>[] = data.results.map(
            async (pokemon) => {
                const id: number = parseInt(
                    pokemon.url.split('/').filter(Boolean).pop() || '0',
                    10
                );
                const image: string = `${POKEAPI_POKEMONS_IMAGE_URL}${String(id).padStart(3, '0')}.png`;
                return { ...pokemon, id, image };
            }
        );

        const pokemons: Pokemon[] = await Promise.all(pokemonsPromises);

        return pokemons;
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
        throw new Error('An error occurred while fetching pokemons');
    }
};

/**
 * Fetches types of a pokemon based on its ID.
 *
 * @param {string} id - The ID of the Pokemon to fetch types for.
 * @return {Promise<string[]>} An array of strings representing the types of the Pokemon.
 */
export const fetchPokemonTypes = async (id: number): Promise<string[]> => {
    try {
        const response: Response = await fetch(`${POKEAPI_POKEMONS_URL}${id}`);

        if (!response.ok) {
            throw new Error('Failed to fetch pokemon details');
        }

        const data: any = await response.json();

        const pokemonTypes: string[] = data.types.map((typeInfo: any) => {
            return typeInfo.type.name;
        });

        return pokemonTypes;
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }

        throw new Error('An error occured while fetching pokemon details');
    }
};
