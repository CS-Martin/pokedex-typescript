import { Pokemon } from "@/types/pokemon";

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
            return JSON.parse(storedPokemons);
        } else {
            const response: Response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');

            if (!response.ok) {
                throw new Error("Failed to fetch pokemons");
            }

            const data: { results: Pokemon[] } = await response.json();
            const pokemons: Pokemon[] = data.results;

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
