import { Search } from 'lucide-react';
import { Input } from '../ui/input';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { memo, Suspense } from 'react';

/**
 * Renders a search component that allows the user to search for a Pokemon by name or ID.
 *
 * @return {JSX.Element} The search component with an input field and search button.
 */
const SearchPokemon = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    console.log("Search Rendered");

    /**
     * Handles the search input change and updates the URL search params.
     * useCallback is used to prevent unnecessary search component re-renders.
     * 
     * @param {string} key - The search input value.
     * @return {void}
     */
    const handleSearch = useDebouncedCallback((key: string): void => {
        const params = new URLSearchParams(searchParams);

        if (key) {
            params.set('search', key);
        } else {
            params.delete('search');
        }

        replace(`${pathname}?${params.toString()}`);
    }, 500);

    return (
        <div className='flex items-center w-full'>
            <Search size={20} className='absolute ms-4' />
            <Input
                type="text"
                placeholder="Search a pokemon by name or ID"
                className="w-full h-full border-0 py-3 ps-14 focus-visible:ring-transparent"
                onChange={(e) => {
                    handleSearch(e.target.value);
                }}
                defaultValue={searchParams.get('search')?.toString()}
            />
        </div>
    );
}

export default memo(SearchPokemon);