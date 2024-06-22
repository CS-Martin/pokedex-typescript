import { fetchAllPokemons } from "@/services/pokeapi"
import { Pokemon } from "@/types/pokemon";
import { useEffect, useState } from "react";

export const useDisplayPokemons = (limit: number, searchParams: string) => {
    const [pokemons, setPokemons] = useState<Pokemon[] | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const storedPokemons = await getPokemonsFromLocalStorage();
                
                if (!storedPokemons) {
                    throw new Error("Failed to fetch pokemons");
                }

                if (searchParams) {
                    const searchedPokemons = useFetchSearchedPokemons(searchParams, storedPokemons); 
                    setPokemons(searchedPokemons.slice(0, limit));
                } else {
                    setPokemons(storedPokemons.slice(0, limit));
                }

            } catch (error) {
                throw new Error('An error occurred while fetching pokemons');
            }
        }

        fetchData();
    }, [limit, searchParams])

    return pokemons || [];
}

const useFetchSearchedPokemons = (searchParams: string, pokemons: Pokemon[]) => {
    const searchedPokemons = pokemons.filter((pokemon) => 
        pokemon.name.toLowerCase().includes(searchParams.toLowerCase()) ||
        pokemon.id.toString().includes(searchParams)
    );

    return searchedPokemons as Pokemon[];
}

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