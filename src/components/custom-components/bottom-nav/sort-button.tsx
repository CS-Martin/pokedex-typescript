"use client"

import * as React from "react"
import { ArrowDown01, ArrowDownAZ, ArrowUp10, ArrowUpZA } from "lucide-react"
import {
    NavigationMenuContent,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { ListItem } from "./bottom-nav"

type SortPokemonsButtonProps = {
    sortPokemons: (method: string) => void;
}

const SortPokemonsButton: React.FC<SortPokemonsButtonProps> = ({ sortPokemons }) => {
    return (
        <>
            <NavigationMenuTrigger>
                <ArrowDownAZ size={18} /> <span className="ms-1">Sort</span>
            </NavigationMenuTrigger>
            <NavigationMenuContent className="">
                <ul className="p-6 w-[330px] lg:w-[360px]">
                    <ListItem onClick={() => sortPokemons("AZ")}>
                        <span className="flex justify-between items-center">
                            Sort by Name (A - Z)
                            <ArrowDownAZ size={20} />
                        </span>
                    </ListItem>
                    <ListItem onClick={() => sortPokemons("ZA")}>
                        <span className="flex justify-between items-center">
                            Sort by Name (Z - A)
                            <ArrowUpZA size={20} />
                        </span>
                    </ListItem>
                    <ListItem onClick={() => sortPokemons("01")}>
                        <span className="flex justify-between items-center">
                            Sort by ID (Increasing)
                            <ArrowDown01 size={20} />
                        </span>
                    </ListItem>
                    <ListItem onClick={() => sortPokemons("10")}>
                        <span className="flex justify-between items-center">
                            Sort by ID (Decreasing)
                            <ArrowUp10 size={20} />
                        </span>
                    </ListItem>
                </ul>
            </NavigationMenuContent>
        </>
    );
}

export default SortPokemonsButton;