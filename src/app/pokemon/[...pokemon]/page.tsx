'use client';

import { PokemonPageProps } from '@/types/pokemon';
import React from 'react';
import { useParams } from 'next/navigation';
import { useDisplayPokemonDetails } from '@/hooks/useDetailPage';
import { getPokemonColor } from '@/utils/constants';
import PokemonImage from './_components/image';
import PokemonDetails from './_components/details';
import { Separator } from '@/components/ui/separator';
import PokemonStats from './_components/stats';

const PokemonDetailsPage = (): JSX.Element => {
    const params = useParams();
    const pokemonName = params.pokemon[1];

    const pokemon: PokemonPageProps | null = useDisplayPokemonDetails(pokemonName);
    const cardBackground = pokemon?.types
        ? getPokemonColor(pokemon.types[0].replace(/\s+/g, '').toLowerCase())
        : '#000000';

    return (
        <main className="container px-28">
            <div className="mt-[100px] grid grid-cols-[0.4fr_1fr] gap-5">
                <section className="pokemon-image">
                    <PokemonImage
                        cardBackground={cardBackground}
                        name={pokemon?.name || ''}
                        image={pokemon?.image || ''}
                    />
                    <Separator className="my-4" />
                    <PokemonStats stats={pokemon?.stats} />
                </section>

                <section className="pokemon-details">
                    <PokemonDetails {...pokemon} />
                </section>
            </div>
        </main>
    );
};

export default PokemonDetailsPage;
