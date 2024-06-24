import { Button } from "@/components/ui/button";

type LoadMorePokemonButtonProps = {
    onClick: () => void;
}

const LoadMorePokemonButton: React.FC<LoadMorePokemonButtonProps> = ({ onClick }) => {
    return (
        <Button className="w-full rounded-full py-6 bottom-nav-container" onClick={onClick}>
            Load More Pokemon
        </Button>
    );
}

export default LoadMorePokemonButton; 