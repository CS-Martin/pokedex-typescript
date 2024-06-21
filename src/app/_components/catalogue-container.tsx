'use client'

import React from 'react';
import { useState } from 'react';
import { useDisplayPokemons } from '@/hooks/catalogue'; // Adjust path as per your project structure
import PokemonCard from './pokemon-card';
import LoadMorePokemonButton from './load-more-pokemon';

/**
 * Renders the CatalogueContainer component with a list of pokemons fetched based on the limit.
 *
 * @return {JSX.Element} The rendered CatalogueContainer component
 */
const CatalogueContainer: React.FC = () => {
    const [limit, setLimit] = useState(10);
    const pokemons = useDisplayPokemons(limit);

    const handleLoadMore = (): void => {
        setLimit((prevLimit) => prevLimit + 10);
    }

    return (
        <div>
            <div className='grid grid-cols-4 gap-5'>
                {pokemons.map((pokemon) => (
                    <PokemonCard 
                        key={pokemon.name} 
                        id={pokemon.id}
                        name={pokemon.name} 
                        url={pokemon.url} />
                ))}
            </div>
            <div>
                <LoadMorePokemonButton onClick={handleLoadMore} />
            </div>
        </div>
    );
};

export default CatalogueContainer;