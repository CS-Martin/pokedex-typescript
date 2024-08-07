import React from 'react';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList
} from '@/components/ui/navigation-menu';
import { ModeToggle } from './theme-toggler';
import SortPokemonsButton from './sort-button';
import LoadMorePokemonButton from './load-more-pokemon';
import { cn } from '@/lib/utils';
import { usePathname, useRouter } from 'next/navigation';
import NextPrevButton from './next-prev-button';

type BottomNavigationProps = {
    loadMorePokemons: () => void;
    sortPokemons: (method: string) => void;
    isLoading: boolean;
};

const BottomNavigation: React.FC<BottomNavigationProps> = ({ loadMorePokemons, sortPokemons, isLoading }) => {
    // If url is not /, then don't show the bottom navigation
    const pathname = usePathname();

    return (
        <div className="fixed bottom-5 left-0 right-0 mx-auto h-fit max-h-[65px] w-full animate-fade rounded-full bg-transparent px-3 shadow-2xl sm:w-[385px] sm:px-0">
            {pathname === '/' ? (
                <div className="flex w-full items-center gap-x-3">
                    <LoadMorePokemonButton loadMorePokemons={loadMorePokemons} isLoading={isLoading} />
                    <NavigationMenu className="absolute right-4 sm:right-2">
                        <NavigationMenuList className="rounded-full bg-background">
                            <NavigationMenuItem>
                                <SortPokemonsButton sortPokemons={sortPokemons} />
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <ModeToggle />
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            ) : (
                <div className="flex w-full items-center">
                    <NextPrevButton isLoading={isLoading} />
                </div>
            )}
        </div>
    );
};

export const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
    ({ className, title, children, ...props }, ref) => {
        return (
            <li>
                <NavigationMenuLink asChild>
                    <a
                        ref={ref}
                        className={cn(
                            'block cursor-pointer select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                            className
                        )}
                        {...props}>
                        <div className="text-sm font-medium leading-none">{title}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
                    </a>
                </NavigationMenuLink>
            </li>
        );
    }
);
ListItem.displayName = 'ListItem';

export default BottomNavigation;
