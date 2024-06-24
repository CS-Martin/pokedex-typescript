import { Button } from "@/components/ui/button";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

type LoadMorePokemonButtonProps = {
    onClick: () => void;
}

const LoadMorePokemonButton: React.FC<LoadMorePokemonButtonProps> = ({ onClick }) => {
    return (
        <Button className={`w-full text-[15px] rounded-full py-6 bottom-nav-container flex justify-start`} onClick={onClick}>
            Load More Pokemon
        </Button>
    );
}

export default LoadMorePokemonButton; 