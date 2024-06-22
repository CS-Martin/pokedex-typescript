import { fetchAllPokemons } from "@/services/pokeapi"
import { Pokemon } from "@/types/pokemon";
import { useCallback, useEffect, useMemo, useState } from "react";

export const useDisplayPokemons = (limit: number, searchParams: string): Pokemon[] => {
    const [pokemons, setPokemons] = useState<Pokemon[] | null>(null);

    const fetchPokemons = useCallback(async () => {
        try {
            const storedPokemons = await getPokemonsFromLocalStorage();
            if (!storedPokemons) {
                throw new Error("Failed to fetch pokemons");
            }
            setPokemons(storedPokemons);
        } catch (error) {
            console.error('An error occurred while fetching pokemons', error);
        }
    }, []);

    useEffect(() => {
        fetchPokemons();
    }, [fetchPokemons]);

    const filteredPokemons = useMemo(() => {
        if (!pokemons) return [];
        if (!searchParams) return pokemons.slice(0, limit);

        const lowerCaseSearch = searchParams.toLowerCase();
        return pokemons.filter(pokemon =>
            pokemon.name.toLowerCase().includes(lowerCaseSearch) ||
            pokemon.id.toString().includes(searchParams)
        ).slice(0, limit);
    }, [pokemons, limit, searchParams]);

    return filteredPokemons;
}


// const useFetchSearchedPokemons = (searchParams: string, pokemons: Pokemon[]) => {
//     const searchedPokemons = pokemons.filter((pokemon) =>
//         pokemon.name.toLowerCase().includes(searchParams.toLowerCase()) ||
//         pokemon.id.toString().includes(searchParams)
//     );

//     return searchedPokemons as Pokemon[];
// }

const getPokemonsFromLocalStorage = async (): Promise<Pokemon[]> => {
    const storedPokemons = localStorage.getItem('pokemons');
    if (storedPokemons) {
        try {
            return JSON.parse(storedPokemons) as Pokemon[];
        } catch (error) {
            console.error('Failed to parse stored pokemons', error);
        }
    }
    return fetchAllPokemons();
}
