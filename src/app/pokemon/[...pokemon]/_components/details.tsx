import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { cleanDescription } from '@/lib/utils';
import { Pokemon } from '@/types/pokemon';
import React, { useState } from 'react';

type PokemonDetailsProps = Partial<Omit<Pokemon, 'image' | 'url'>> & {
    pokemonColor: string;
};

const PokemonDetails: React.FC<PokemonDetailsProps> = ({ pokemonColor, ...pokemon }): JSX.Element => {
    return (
        <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center justify-between border-r py-3">
                <h1 className={`text-3xl font-semibold`} style={{ color: pokemonColor }}>
                    {pokemon?.name && pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                </h1>
                <h1 className="me-3 text-xl">#{pokemon?.id?.toString()?.padStart(3, '0') ?? ''}</h1>
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
            <div>test</div>
        </div>
    );
};

const PokemonDescription: React.FC<PokemonDetailsProps> = ({ description, pokemonColor }) => {
    const [showMore, setShowMore] = useState<boolean>(false);

    return (
        <div className="col-span-2 border-t">
            <div className={`${showMore ? 'h-fit' : 'max-h-[350px]'} relative overflow-y-hidden`}>
                <p className="mb-2 text-label">Description:</p>
                {description?.map((desc, index) => (
                    <div data-aos="fade-up" key={index} className="relative">
                        <p key={index} className="mt-3 w-[90%]">
                            {cleanDescription(desc)}
                        </p>
                        <small style={{ color: pokemonColor }} className="absolute right-0 top-0">
                            [{index + 1}]
                        </small>
                    </div>
                ))}
            </div>
            <Button
                style={{ color: pokemonColor }}
                onClick={() => setShowMore(!showMore)}
                variant="outline"
                className="mt-3 w-full">
                Load more description
            </Button>
        </div>
    );
};

export default PokemonDetails;
