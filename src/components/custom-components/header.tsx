import Image from "next/image";
import { ModeToggle } from "./theme-toggler";
import { Search } from 'lucide-react';

const Header = () => {
    return (
        <nav className="absolute w-full h-[100px] flex items-center justify-between">
            <div>
                <Image src={'/pokedex-logo.png'} alt="Pokedex Logo" width={100} height={100} />
            </div>

            <div className="flex gap-x-7 items-center">
                <a href="" className="flex gap-x-2 items-center">
                    <Search size={18} />
                    <small className="font-semibold text-[12px] rounded-md p-1">⌘K</small>
                </a>
                <ModeToggle />
            </div>
        </nav>
    );
}

export default Header;