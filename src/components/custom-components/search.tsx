import { Search } from 'lucide-react';
import { Input } from '../ui/input';

const SearchPokemon = () => {
    return (
        <div className='flex items-center w-full'>
            <Search size={20} className='absolute ms-4' />
            <Input
                type="text"
                placeholder="Search for a pokemon"
                className="w-full h-full border-0 py-3 ps-14 focus-visible:ring-transparent"
            />
        </div>
    );
}

export default SearchPokemon;