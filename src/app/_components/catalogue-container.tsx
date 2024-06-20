'use client'

import React from 'react';
import { useState } from 'react';
import { useDisplayPokemons } from '@/hooks/catalogue'; // Adjust path as per your project structure
import PokemonCard from './pokemon-card';

/**
 * Renders the CatalogueContainer component with a list of pokemons fetched based on the limit.
 *
 * @return {JSX.Element} The rendered CatalogueContainer component
 */
const CatalogueContainer: React.FC = () => {
    const [limit, setLimit] = useState(10);
    const pokemons = useDisplayPokemons(limit);
    console.log(pokemons);

    return (
        <div>
            {pokemons.map((pokemon) => (
                <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
            ))}
        </div>
    );
};

export default CatalogueContainer;