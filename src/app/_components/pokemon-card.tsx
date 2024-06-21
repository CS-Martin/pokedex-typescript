import React from "react";
import type { PokemonCard as PokemonCardProps } from "@/types/pokemon";

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
}: PokemonCardProps): JSX.Element => {
    return (
        <div className="border rounded-lg">
            <p>{id}</p>
            <p>{name}</p>
            <p>{url}</p>
        </div>
    );
}

export default PokemonCard;
