import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react"; // Import the ArrowRight icon

type LoadMorePokemonButtonProps = {
    loadMorePokemons: () => void;
}

const LoadMorePokemonButton: React.FC<LoadMorePokemonButtonProps> = ({ loadMorePokemons }) => {
    return (
        <Button
            className="w-full text-[15px] rounded-full py-6 flex items-center justify-start relative group"
            onClick={loadMorePokemons}
        >
            <ArrowDown
                size={24}
                className="absolute animate-bounce left-0 ml-4 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 group-hover:ml-4"
            />
            <p className="transition-transform duration-500 ease-in-out group-hover:translate-x-6">
                Load More Pokemon
            </p>
        </Button>
    );
}

export default LoadMorePokemonButton;