import { fetchPokemonDetails } from '@/services/pokeapi';
import { Pokemon, PokemonPageProps } from '@/types/pokemon';
import { useEffect, useState } from 'react';

export const useDisplayPokemonDetails = (pokemonName: string): PokemonPageProps | null => {
    const [pokemon, setPokemon] = useState<PokemonPageProps | null>(null);

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const fetch = await fetchPokemonDetails(pokemonName);

                if (!fetch) {
                    throw new Error('test');
                }

                setPokemon(fetch);
            } catch (error) {
                throw new Error('May mali');
            }
        };

        fetchPokemon();
    }, [pokemonName]);

    return pokemon;
};
