import Image from "next/image";

const Header = () => {
    return (
        <nav className="absolute w-full h-[56px] flex items-center justify-between">
            <div>
                <Image src={'/pokedex-logo.png'} alt="Pokedex Logo" width={100} height={100} />
            </div>

            <div>
                Search
                Theme
            </div>
        </nav>
    );
}

export default Header;