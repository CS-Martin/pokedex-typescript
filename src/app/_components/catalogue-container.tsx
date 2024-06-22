'use client'

import React from 'react';
import { useState } from 'react';
import { useDisplayPokemons } from '@/hooks/catalogue'; // Adjust path as per your project structure
import PokemonCard from './pokemon-card';
import LoadMorePokemonButton from './load-more-pokemon';
import SearchPokemon from '@/components/custom-components/search';
import { Separator } from '@/components/ui/separator';
import Search from '@/components/custom-components/search';
import { Button } from '@/components/ui/button';

/**
 * Renders the CatalogueContainer component with a list of pokemons fetched based on the limit.
 *
 * @return {JSX.Element} The rendered CatalogueContainer component
 */
const CatalogueContainer: React.FC = () => {
    const [limit, setLimit] = useState(10);
    const pokemons = useDisplayPokemons(limit);

    /**
     * Increases the limit by 10 and updates the state
     */
    const handleLoadMore = (): void => {
        setLimit((prevLimit) => prevLimit + 10);
    }

    return (
        <div className='mt-40 w-full'>
            <div className='flex'>
                <SearchPokemon />
                <Separator orientation="vertical" className='' />
                <Button variant='outline'>Sort</Button>
            </div>
            <Separator className='my-3' />
            <div className='grid grid-cols-5 gap-5'>
                {pokemons.map((pokemon) => (
                    <PokemonCard
                        key={pokemon.name}
                        id={pokemon.id}
                        name={pokemon.name}
                        url={pokemon.url}
                        image={pokemon.image}
                    />
                ))}
            </div>
            <div className='flex justify-center py-8'>
                <LoadMorePokemonButton onClick={handleLoadMore} />
            </div>
        </div>
    );
};

export default CatalogueContainer;