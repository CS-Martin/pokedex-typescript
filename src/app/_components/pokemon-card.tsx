import React from "react";
import type { Pokemon as PokemonCardProps } from "@/types/pokemon";
import Image from 'next/image';
import DisplayPokemonImage from "@/components/custom-components/pokemon-image";

/**
 * Renders a PokemonCard component with the given properties.
 * 
 * @param {PokemonCardProps} props - The properties of the PokemonCard component.
 * @param {number} props.id - The ID of the Pokemon.
 * @param {string} props.name - The name of the Pokemon.
 * @param {string} props.url - The URL of the Pokemon's image.
 * @returns {JSX.Element} The rendered PokemonCard component.
 */
const PokemonCard: React.FC<PokemonCardProps> = ({
    id,
    name,
    url,
    image
}: PokemonCardProps): JSX.Element => {
    return (
        <div className="border rounded-lg">
            <DisplayPokemonImage image={image} name={name} size={200} />
            <p>{id}</p>
            <p>{name}</p>
        </div>
    );
}

export default PokemonCard;
