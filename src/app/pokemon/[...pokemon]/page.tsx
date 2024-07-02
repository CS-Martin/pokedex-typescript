'use client';

import { PokemonPageProps } from '@/types/pokemon';
import React from 'react';
import { useParams } from 'next/navigation';
import { useDisplayPokemonDetails } from '@/hooks/useDetailPage';
import { getPokemonColor } from '@/lib/constants';
import PokemonImage from './_components/image';
import PokemonDetails from './_components/details';
import { Separator } from '@/components/ui/separator';
import PokemonStats from './_components/stats';

const PokemonDetailsPage = (): JSX.Element => {
    const params = useParams();
    const pokemonName = params.pokemon[1];

    const pokemon: PokemonPageProps | null = useDisplayPokemonDetails(pokemonName);
    const pokemonColor = pokemon?.types
        ? getPokemonColor(pokemon.types[0].replace(/\s+/g, '').toLowerCase())
        : '#000000';

    return (
        <main className="container relative h-[100%] md:px-52 py-[90px]">
            <div className="grid gap-5 lg:grid-cols-[1fr_0.4fr]">
                {/* < 768px */}
                <section data-aos="fade-left" className="pokemon-image md:hidden">
                    <PokemonImage
                        cardBackground={pokemonColor}
                        name={pokemon?.name || ''}
                        image={pokemon?.image || ''}
                    />
                    <Separator className="my-4" />
                </section>

                <section data-aos="fade-right" className="pokemon-details">
                    <PokemonDetails {...pokemon} pokemonColor={pokemonColor} />
                </section>

                {/* > 768px */}
                <section data-aos="fade-left" className="pokemon-image">
                    <div className='hidden md:block'>
                        <PokemonImage
                            cardBackground={pokemonColor}
                            name={pokemon?.name || ''}
                            image={pokemon?.image || ''}
                        />
                    </div>
                    <Separator className="my-4" />
                    <PokemonStats stats={pokemon?.stats} progressBarColor={pokemonColor} />
                </section>
            </div>
        </main>
    );
};

export default PokemonDetailsPage;
