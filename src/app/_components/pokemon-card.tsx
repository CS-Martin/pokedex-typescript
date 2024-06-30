import React, { useState } from 'react';
import type { Pokemon as PokemonCardProps } from '@/types/pokemon';
import DisplayPokemonImage from '@/components/custom-components/pokemon-image';
import { PokemonTypeBadge } from '@/components/custom-components/pokemon-type/type-badge';
import Tilt from 'react-parallax-tilt';
import { getPokemonColor } from '@/utils/constants';
import { CapitalizeString } from '@/utils/utils';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

/**
 * Renders a PokemonCard component with the given properties.
 *
 * @param {PokemonCardProps} props - The properties of the PokemonCard component.
 * @param {number} props.id - The ID of the Pokemon.
 * @param {string} props.name - The name of the Pokemon.
 * @param {string} props.url - The URL of the Pokemon's image.
 * @param {string[]} props.types - The types of the Pokemon.
 * @returns {JSX.Element} The rendered PokemonCard component.
 */
const PokemonCard: React.FC<PokemonCardProps> = ({
    id,
    name,
    image,
    types
}: PokemonCardProps): JSX.Element => {
    const cardBackground = types
        ? getPokemonColor(types[0].replace(/\s+/g, '').toLowerCase())
        : '#000000';
    const test = '[#654321]';

    return (
        <div
            key={id}
            data-aos="fade-up"
            className={`group relative w-full overflow-y-hidden rounded-lg border px-3 py-5`}
        >
            <div className="absolute inset-0 flex items-center justify-center">
                <div
                    className={`z-[-1] h-64 w-64 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                    style={{
                        background: `radial-gradient(circle, ${cardBackground} 0%, rgba(255, 255, 255, 0.03) 50%)`
                    }}
                ></div>
            </div>
            <div className="absolute flex flex-wrap gap-2">
                {types?.map((type: string, index: number) => (
                    <Tilt key={index} scale={1.07}>
                        <PokemonTypeBadge type={type} />
                    </Tilt>
                ))}
            </div>
            <div className="relative mt-5 flex justify-center">
                <DisplayPokemonImage
                    image={image}
                    name={name}
                    size={200}
                    className={`transition-all duration-300 hover:scale-[1.15]`}
                />
            </div>
            <div className="bottom-3 justify-between transition-all duration-500 group-hover:-translate-y-10">
                <p className={`sm:text-[16px]`}>
                    #{String(id).padStart(3, '0')}
                </p>
                <p className="sm:text-[18px]">{CapitalizeString(name)}</p>
            </div>
            <div className="absolute left-0 right-0 top-[100%] mx-3 duration-500 ease-in-out group-hover:-translate-y-[50px]">
                <Link href="">
                    <Button className="w-full px-4 py-2 transition-colors">
                        <span>View {CapitalizeString(name)} Details</span>
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default PokemonCard;
