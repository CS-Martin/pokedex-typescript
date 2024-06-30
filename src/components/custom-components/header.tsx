import Image from 'next/image';

/**
 * Renders the header component.
 *
 * @return {JSX.Element} The header component.
 */
const Header = () => {
    return (
        <nav className="container absolute flex h-[100px] w-full items-center justify-between">
            <div>
                <Image priority={true} src={'/pokedex-logo.png'} alt="Pokedex Logo" width={100} height={100} />
            </div>

            <div>
                <small>&#47;&#42; Still under development &#42;&#47;</small>
            </div>

            <div className="flex items-center gap-x-7">
                <small>Created by: Martin</small>
            </div>
        </nav>
    );
};

export default Header;
