import { Pokemon } from "@/types/pokemon";
import { POKEAPI_POKEMONS_IMAGE_URL, POKEAPI_POKEMONS_URL } from "@/utils/constants";

/**
 * Fetches all Pokemon from the PokeAPI and stores them in local storage.
 * If the Pokemon are already stored in local storage, it returns the stored Pokemon.
 * @returns A Promise that resolves to an array of Pokemon objects.
 * @throws {Error} If fetching the Pokemon or parsing the JSON fails.
 */
export const fetchAllPokemons = async (): Promise<Pokemon[]> => {
    try {
        const storedPokemons: string | null = localStorage.getItem('pokemons');

        if (storedPokemons) {
            return JSON.parse(storedPokemons) as Pokemon[];
        } else {
            const response: Response = await fetch(`${POKEAPI_POKEMONS_URL}?limit=1000&offset=0`);

            if (!response.ok) {
                throw new Error("Failed to fetch pokemons");
            }

            const data: { results: Pokemon[] } = await response.json();

            // Basic details of the pokemons (id, name, url, image)
            const pokemonsPromises: Promise<Pokemon>[] = data.results.map(async (pokemon) => {
                const id: number = parseInt(pokemon.url.split('/').filter(Boolean).pop() || "0", 10);
                const image: string = `${POKEAPI_POKEMONS_IMAGE_URL}${String(id).padStart(3, '0')}.png`;
                return { ...pokemon, id, image };
            });

            const pokemons: Pokemon[] = await Promise.all(pokemonsPromises);

            localStorage.setItem('pokemons', JSON.stringify(pokemons));
            return pokemons;
        }
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }

        throw new Error('An error occurred while fetching pokemons');
    }
}

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
            throw new Error("Failed to fetch pokemon details");
        }

        const data: any = await response.json();

        const pokemonTypes: string[] = data.types.map((typeInfo: any) => {
            return typeInfo.type.name;
        })

        return pokemonTypes;
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }

        throw new Error("An error occured while fetching pokemon details")
    }
};