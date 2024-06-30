import { Pokemon } from '@/types/pokemon';

// export type Pokemon = {
//     id: number;
//     name: string;
//     base_experience: number;
//     height: number;
//     weight: number;
//     url: string;
//     image: string;
//     types: string[];
//     stats: PokemonStats;
//     abilities: string[];
// };

type PokemonDetailsProps = Partial<Omit<Pokemon, 'image' | 'url'>>;

const PokemonDetails: React.FC<PokemonDetailsProps> = ({ ...pokemon }): JSX.Element => {
    return (
        <div>
            <div>
                <h1 className="text-3xl">
                    {pokemon?.name && pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                </h1>
                <h1 className="text-2xl">#{pokemon?.id?.toString()?.padStart(3, '0') ?? ''}</h1>
            </div>
            <div>test</div>
        </div>
    );
};

export default PokemonDetails;
