import { Button } from "@/components/ui/button";

type LoadMorePokemonButtonProps = {
    onClick: () => void;
}

const LoadMorePokemonButton: React.FC<LoadMorePokemonButtonProps> = ({ onClick }) => {
    return (
        <div>
            <Button onClick={onClick}>
                Load More Pokemon
            </Button>
        </div>
    );
}

export default LoadMorePokemonButton; 