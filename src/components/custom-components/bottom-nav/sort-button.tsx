"use client"

import * as React from "react"
import { ArrowDown01, ArrowDownAZ, ArrowDownZA, ArrowUp10, ArrowUpZA, Moon, Sun, SunMoon } from "lucide-react"
import { useTheme } from "next-themes"
import {
    NavigationMenuContent,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { ListItem } from "./bottom-nav"
import { NavigationMenuViewport } from '@radix-ui/react-navigation-menu';


export function Test() {
    return (
        <>
            <NavigationMenuTrigger>
                <ArrowDownAZ size={18} /> <span className="ms-1">Sort</span>
            </NavigationMenuTrigger>
            <NavigationMenuContent className="">
                <ul className="p-6 w-[330px] lg:w-[360px]">
                    <ListItem>
                        <span className="flex justify-between items-center">
                            Sort by Name (A - Z)
                            <ArrowDownAZ size={20} />
                        </span>
                    </ListItem>
                    <ListItem>
                        <span className="flex justify-between items-center">
                            Sort by Name (Z - A)
                            <ArrowUpZA size={20} />
                        </span>
                    </ListItem>
                    <ListItem>
                        <span className="flex justify-between items-center">
                            Sort by ID (Increasing)
                            <ArrowDown01 size={20} />
                        </span>
                    </ListItem>
                    <ListItem>
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