'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

/**
 * Renders the header component.
 *
 * @return {JSX.Element} The header component.
 */
const Header = () => {
    const pathname = usePathname();
    console.log(pathname);
    return (
        <nav
            className={`${pathname === '/' ? 'h-[100px]' : 'h-[65px]'} z-10 absolute top-0 flex w-full border-b transition-all duration-500`}>
            <div className={`${pathname === '/' ? '' : 'px-28'} container transition-all duration-500 flex items-center justify-between`}>
                <div>
                    <Link href={'/'}>
                        <Image priority={true} src={'/pokedex-logo.png'} alt="Pokedex Logo" width={100} height={100} />
                    </Link>
                </div>

                <div>
                    <small>&#47;&#42; Still under development &#42;&#47;</small>
                </div>

                <div className="flex items-center gap-x-7">
                    <small>Created by: Martin</small>
                </div>
            </div>
        </nav>
    );
};

export default Header;
