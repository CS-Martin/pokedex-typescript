import { Search } from 'lucide-react';
import { Input } from '../ui/input';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

/**
 * Renders a search component that allows the user to search for a Pokemon by name or ID.
 *
 * @return {JSX.Element} The search component with an input field and search button.
 */
const SearchPokemon = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    function handleSearch(key: string) {
        const params = new URLSearchParams(searchParams);

        if (key) {
            params.set('search', key);
        } else {
            params.delete('search');
        }
        
        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <div className='flex items-center w-full'>
            <Search size={20} className='absolute ms-4' />
            <Input
                type="text"
                placeholder="Search for a pokemon"
                className="w-full h-full border-0 py-3 ps-14 focus-visible:ring-transparent"
                onChange={(e) => {
                    handleSearch(e.target.value);
                }}
            />
        </div>
    );
}

export default SearchPokemon;