import React, { useState, useEffect } from 'react';
import { PacmanLoader } from 'react-spinners';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

type LoadMorePokemonButtonProps = {
    loadMorePokemons: () => void;
    isLoading: boolean;
};

const LoadMorePokemonButton: React.FC<LoadMorePokemonButtonProps> = ({ loadMorePokemons, isLoading }) => {
    const [wasLoading, setWasLoading] = useState(isLoading);

    useEffect(() => {
        if (!isLoading) {
            const timeout = setTimeout(() => setWasLoading(false), 500);
            return () => clearTimeout(timeout);
        } else {
            // Scroll to bottom and delay the scroll
            setWasLoading(true);
        }
    }, [isLoading]);

    const handleLoadMorePokemons = () => {
        loadMorePokemons();
        setTimeout(
            () =>
                scrollTo({
                    top: document.body.scrollHeight,
                    behavior: 'smooth'
                }),
            500
        );
    };

    return (
        <Button
            className="group relative flex w-full items-center justify-start rounded-full py-7 text-[15px]"
            onClick={handleLoadMorePokemons}
            disabled={isLoading}>
            {wasLoading ? (
                <>
                    <PacmanLoader
                        className={`${isLoading ? 'pacman-loader-slide-in' : 'pacman-loader-slide-out'}`}
                        size={14}
                    />
                    <p className="translate-x-6 transition-transform duration-500 ease-in-out sm:translate-x-10">
                        Loading..
                    </p>
                </>
            ) : (
                <>
                    <ArrowDown
                        size={24}
                        className="absolute left-0 ml-4 animate-bounce transition-opacity duration-500 ease-in-out group-hover:ml-4 group-hover:opacity-100 sm:opacity-0"
                    />
                    <p className="translate-x-6 transition-transform duration-500 ease-in-out group-hover:translate-x-6 sm:translate-x-0">
                        Load More Pokemon
                    </p>
                </>
            )}
        </Button>
    );
};

export default LoadMorePokemonButton;
