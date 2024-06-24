import React from 'react';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { cn } from '@/lib/utils';
import { ModeToggle } from './theme-toggler';
import SortPokemonsButton from './sort-button';
import LoadMorePokemonButton from './load-more-pokemon';

type BottomNavigationProps = {
    loadMorePokemons: () => void;
    sortPokemons: (method: string) => void;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({ loadMorePokemons, sortPokemons }): JSX.Element => {
    return (
        <div className='fixed bottom-5 px-3 sm:px-0 animate-fade w-full sm:w-[385px] bg-transparent shadow-2xl max-h-[65px] rounded-full h-fit'>
            <div className='flex items-center gap-x-3 w-full'>
                <LoadMorePokemonButton loadMorePokemons={loadMorePokemons} />
                <NavigationMenu className="absolute right-4 sm:right-2 ">
                    <NavigationMenuList className="bg-background rounded-full">
                        <NavigationMenuItem>
                            <SortPokemonsButton sortPokemons={sortPokemons}  />
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <ModeToggle />
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </div>
    );
};

export const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block cursor-pointer select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"

export default BottomNavigation;