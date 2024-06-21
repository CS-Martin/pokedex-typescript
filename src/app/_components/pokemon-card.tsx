import React from "react";
import type { PokemonCard } from "@/types/pokemon";

const PokemonCard: React.FC<PokemonCard> = ({ name, url }) => {
    return (
        <div>
            <p>{name}</p>
            <p>{url}</p>
        </div>
    );
}

export default PokemonCard;
