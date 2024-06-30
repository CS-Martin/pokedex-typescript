import React, { useState, useCallback } from 'react';
import PokemonCard from './pokemon-card';
import SearchPokemon from '@/components/custom-components/search';
import { Separator } from '@/components/ui/separator';
import { useSearchParams } from 'next/navigation';
import Tilt from 'react-parallax-tilt';
import BottomNavigation from '@/components/custom-components/bottom-nav/bottom-nav';
import { useDisplayPokemons } from '@/hooks/useCatalogue';
import Loading from '../loading';

const CatalogueContainer: React.FC = (): JSX.Element => {
    const searchParams = useSearchParams();
    const search: string = searchParams?.get('search') || '';
    const [limit, setLimit] = useState(10);
    const [sortMethod, setSortMethod] = useState<string>('AZ');

    const handleLoadMore = useCallback((): void => {
        setLimit((prevLimit) => prevLimit + 10);
    }, []);

    const handleSortPokemons = useCallback((method: string): void => {
        setSortMethod(method);
    }, []);

    const { pokemons, isLoading } = useDisplayPokemons(limit, search, sortMethod);

    if (isLoading && limit <= 10 && search === '' && sortMethod === '') {
        return <Loading />;
    }

    return (
        <div className="mt-32 w-full">
            <div className="flex">
                <SearchPokemon />
            </div>
            <Separator className="my-3" />
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                {pokemons?.map((pokemon) => (
                    <Tilt
                        key={pokemon.id}
                        glareEnable={true}
                        glareMaxOpacity={0.1}
                        glareColor="lightblue"
                        glarePosition="all"
                        glareBorderRadius="10px"
                        transitionSpeed={3000}
                        scale={1.07}>
                        <PokemonCard
                            id={pokemon.id}
                            name={pokemon.name}
                            url={pokemon.url}
                            image={pokemon.image}
                            types={pokemon.types}
                        />
                    </Tilt>
                ))}
            </div>
            <Separator className="mb-28 mt-10" />

            <BottomNavigation
                loadMorePokemons={handleLoadMore}
                sortPokemons={handleSortPokemons}
                isLoading={isLoading}
            />
        </div>
    );
};

export default CatalogueContainer;
