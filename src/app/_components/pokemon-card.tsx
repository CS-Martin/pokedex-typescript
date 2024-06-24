import React from "react";
import type { Pokemon as PokemonCardProps } from "@/types/pokemon";
import DisplayPokemonImage from "@/components/custom-components/pokemon-image";
import { PokemonTypeBadge } from "@/components/custom-components/pokemon-type/type-badge";

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
    return (
        <div className="border rounded-lg w-full py-5 px-3 relative">
            <div className="absolute flex gap-2 flex-wrap">
                {types?.map((type: string, index: number) => {
                    return <PokemonTypeBadge key={index} type={type} />;
                })}
            </div>
            <div className="flex justify-center mt-5">
                <DisplayPokemonImage image={image} name={name} size={200} />
            </div>
            <div className="px-1">
                <p className="sm:text-[18px]">{id}</p>
                <p className="sm:text-[20px]">{name}</p>
            </div>
        </div>
    );
}

export default PokemonCard;
