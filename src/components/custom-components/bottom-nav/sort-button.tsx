'use client';

import * as React from 'react';
import { ArrowDown01, ArrowDownAZ, ArrowUp10, ArrowUpZA } from 'lucide-react';
import {
    NavigationMenuContent,
    NavigationMenuTrigger
} from '@/components/ui/navigation-menu';
import { ListItem } from './bottom-nav';

type SortPokemonsButtonProps = {
    sortPokemons: (method: string) => void;
};

const SortPokemonsButton: React.FC<SortPokemonsButtonProps> = ({
    sortPokemons
}) => {
    return (
        <>
            <NavigationMenuTrigger>
                <ArrowDownAZ size={18} />{' '}
                <span className="ms-1 hidden sm:block">Sort</span>
            </NavigationMenuTrigger>
            <NavigationMenuContent className="">
                <ul className="w-[330px] p-6 lg:w-[360px]">
                    <ListItem onClick={() => sortPokemons('AZ')}>
                        <span className="flex items-center justify-between">
                            Sort by Name (A - Z)
                            <ArrowDownAZ size={20} />
                        </span>
                    </ListItem>
                    <ListItem onClick={() => sortPokemons('ZA')}>
                        <span className="flex items-center justify-between">
                            Sort by Name (Z - A)
                            <ArrowUpZA size={20} />
                        </span>
                    </ListItem>
                    <ListItem onClick={() => sortPokemons('01')}>
                        <span className="flex items-center justify-between">
                            Sort by ID (Increasing)
                            <ArrowDown01 size={20} />
                        </span>
                    </ListItem>
                    <ListItem onClick={() => sortPokemons('10')}>
                        <span className="flex items-center justify-between">
                            Sort by ID (Decreasing)
                            <ArrowUp10 size={20} />
                        </span>
                    </ListItem>
                </ul>
            </NavigationMenuContent>
        </>
    );
};

export default SortPokemonsButton;
