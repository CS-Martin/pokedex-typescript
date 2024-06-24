'use client'

import { useDisplayPokemons } from '@/hooks/catalogue'; // Adjust path as per your project structure
import PokemonCard from './pokemon-card';
import SearchPokemon from '@/components/custom-components/search';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { useSearchParams } from 'next/navigation';

type CatalogueContainerProps = {
    limit: number;
}
/**
 * Renders the CatalogueContainer component with a list of pokemons fetched based on the limit.
 *
 * @return {JSX.Element} The rendered CatalogueContainer component
 */
const CatalogueContainer: React.FC<CatalogueContainerProps> = ({ limit }) => {
    const searchParams = useSearchParams();
    const search: string = searchParams?.get('search') || '';

    const pokemons = useDisplayPokemons(limit, search);

    return (
        <div className=' mt-32 w-full'>
            <div className='flex'>
                <SearchPokemon />
            </div>
            <Separator className='my-3' />
            <div className='grid grid-cols-2 gap-5 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2'>
                {pokemons.map((pokemon) => (
                    <PokemonCard
                        key={pokemon.name}
                        id={pokemon.id}
                        name={pokemon.name}
                        url={pokemon.url}
                        image={pokemon.image}
                        types={pokemon.types}
                    />
                ))}
            </div>
            <Separator className='my-4' />
        </div>
    );
};

export default CatalogueContainer;