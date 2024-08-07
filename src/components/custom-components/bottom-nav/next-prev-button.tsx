import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@radix-ui/react-navigation-menu";
import { ModeToggle } from "./theme-toggler";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Home, HomeIcon, LayoutGrid } from "lucide-react";
import { useParams } from "next/navigation";

type NextPrevButtonProps = {
    isLoading: boolean;
}

const NextPrevButton = ({ isLoading }: NextPrevButtonProps) => {
    const params = useParams();
    const pokemonId: number = +params.pokemon[0];

    const getNextPokemonId = () => {
        if (pokemonId < 1010) {
            return pokemonId + 1;
        }

        return 1;
    }

    const getPrevPokemonId = () => {
        if (pokemonId > 1) {
            return pokemonId - 1;
        }

        return 1010;
    }

    return (
        <div className="bg-primary w-full rounded-full px-6 py-2 flex items-center gap-x-3">
            <Button>
                <Link href={`/pokemon/${getPrevPokemonId()}/details`} className="flex gap-2 items-center">
                    <ArrowLeft size={24} />
                    Prev
                </Link>
            </Button >

            <Button className="rounded-full">
                <Link href="/" className="flex items-center gap-x-2">
                    <LayoutGrid size={24} />
                    Home
                </Link>
            </Button>

            <Button>
                <Link href={`/pokemon/${getNextPokemonId()}/details`} className="flex gap-2 items-center">
                    Next
                    <ArrowRight size={24} />
                </Link>
            </Button>
        </div >
    );
};

export default NextPrevButton;