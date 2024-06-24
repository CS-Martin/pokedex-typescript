import React from "react";
import type { Pokemon as PokemonCardProps } from "@/types/pokemon";
import DisplayPokemonImage from "@/components/custom-components/pokemon-image";
import { PokemonTypeBadge } from "@/components/custom-components/pokemon-type/type-badge";
import Tilt from 'react-parallax-tilt';
import { getPokemonColor } from "@/utils/constants";
import { CapitalizeString } from "@/utils/utils";

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
    const cardBackground = types ? getPokemonColor(types[0].replace(/\s+/g, '').toLowerCase()) : '#000000';

    return (
        <div key={id} data-aos="fade-up" className="border rounded-lg w-full py-5 px-3 relative group">
            <div className="absolute inset-0 flex justify-center items-center">
                <div className={`w-64 h-64 z-[-1] rounded-full transition-opacity duration-300 opacity-0 group-hover:opacity-100`}
                    style={{ background: `radial-gradient(circle, ${cardBackground} 0%, rgba(255, 255, 255, 0.03) 50%)` }}></div>
            </div>
            <div className="absolute flex gap-2 flex-wrap">
                {types?.map((type: string, index: number) => (
                    <Tilt key={index} scale={1.07}><PokemonTypeBadge type={type} /></Tilt>
                ))}
            </div>
            <div className="relative flex justify-center mt-5">
                <DisplayPokemonImage image={image} name={name} size={200} className={`hover:scale-[1.15] transition-all duration-300`} />
            </div>
            <div className="px-1">
                <p className="sm:text-[16px]">{String(id).padStart(3, '0')}</p>
                <p className="sm:text-[18px]">{CapitalizeString(name)}</p>
            </div>
        </div>
    );
}

export default PokemonCard;