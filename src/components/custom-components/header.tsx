import Image from "next/image";
import { ModeToggle } from "./theme-toggler";

/**
 * Renders the header component.
 *
 * @return {JSX.Element} The header component.
 */
const Header = () => {
    return (
        <nav className="absolute container w-full h-[100px] flex items-center justify-between">
            <div>
                <Image priority={true} src={'/pokedex-logo.png'} alt="Pokedex Logo" width={100} height={100} />
            </div>

            <div className="flex gap-x-7 items-center">
            </div>
        </nav>
    );
}

export default Header;