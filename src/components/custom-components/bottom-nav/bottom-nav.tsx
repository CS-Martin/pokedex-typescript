import React from 'react';

import './bottom-nav.css';
import { ModeToggle } from '../theme-toggler';
import LoadMorePokemonButton from '@/app/_components/load-more-pokemon';

type BottomNavigationProps = {
    onClick: () => void;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({ onClick }): JSX.Element => {
    
    return (
        <div className='fixed bottom-5 w-full md:w-[330px] bg-transparent max-h-[65px] h-fit bottom-nav-container'>
            <div className='flex items-center gap-x-3'>
                <LoadMorePokemonButton onClick={onClick} />
                <ModeToggle />
            </div>  
        </div>
    );  
};

export default BottomNavigation;