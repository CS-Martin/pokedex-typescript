import { Button } from '@/components/ui/button';
import { cleanDescription } from '@/lib/utils';
import { Pokemon } from '@/types/pokemon';
import React, { useState } from 'react';
import { Inter } from 'next/font/google';
import { PacmanLoader } from 'react-spinners';
import PokemonTypes from './types';
import PokemonWeaknesses from './weaknesses';

const inter = Inter({ subsets: ['latin'] });

type PokemonDetailsProps = Partial<Omit<Pokemon, 'image' | 'url'>> & {
    pokemonColor: string;
};

const PokemonDetails: React.FC<PokemonDetailsProps> = ({ pokemonColor, ...pokemon }): JSX.Element => {
    return (
        <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center justify-between border-r py-3">
                <h1 className={`md:text-3xl font-semibold`} style={{ color: pokemonColor }}>
                    {pokemon?.name && pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                </h1>
                <h1 className="me-3 md:text-xl">#{pokemon?.id?.toString()?.padStart(3, '0') ?? ''}</h1>
            </div>
            <div className="flex items-center justify-evenly text-center">
                <div className="text-center">
                    <p>Height:</p>
                    <p>{pokemon?.height}&apos;</p>
                </div>
                <div>
                    <p>Wieght:</p>
                    <p>{pokemon?.weight}</p>
                </div>
            </div>

            <PokemonDescription description={pokemon?.description as string[]} pokemonColor={pokemonColor} />

            <div className=''>
                <PokemonTypes types={pokemon?.types} />
            </div>
            <div>
                <PokemonWeaknesses types={pokemon?.types} />
            </div>
        </div>
    );
};

const PokemonDescription: React.FC<PokemonDetailsProps> = ({ description, pokemonColor }) => {
    const [showMore, setShowMore] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleShowMore = () => {
        setIsLoading(true);

        if (showMore === false) {
            setTimeout(() => {
                setShowMore(true);
                setIsLoading(false);
            }, 1500);
        } else {
            setShowMore(!showMore);
            setIsLoading(false);
        }
    };

    return (
        <div className="col-span-2 border-b border-t py-5">
            <div className={`${showMore ? 'h-fit' : 'max-h-[350px]'} relative overflow-y-hidden`}>
                <p className="mb-2 text-label">Description:</p>
                {description?.map((desc, index) => (
                    <div data-aos="fade-up" key={index} className="relative">
                        <p className={`mt-3 w-[90%]`}>{cleanDescription(desc)}</p>
                        <small style={{ color: pokemonColor }} className="absolute right-0 top-0">
                            [{index + 1}]
                        </small>
                    </div>
                ))}
            </div>
            <Button
                disabled={isLoading}
                style={{ color: pokemonColor }}
                onClick={handleShowMore}
                variant="outline"
                className="relative mt-3 w-full">
                {isLoading ? (
                    <PacmanLoader
                        color={pokemonColor}
                        size={10}
                        className={`${isLoading ? 'pacman-loader-slide-in' : 'pacman-loader-slide-out'}`}
                    />
                ) : showMore ? (
                    'Show less'
                ) : (
                    'Show more'
                )}
            </Button>
        </div>
    );
};

export default PokemonDetails;
