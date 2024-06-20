import React from "react";
import type { PokemonCard } from "@/types/pokemon";

const PokemonCard: React.FC<PokemonCard> = ({ name, url}) => {
    // Fetch all pokemons
    
    return (
        <div className="text-white">
            {name}, {url}
        </div>
    );
}

export default PokemonCard;
