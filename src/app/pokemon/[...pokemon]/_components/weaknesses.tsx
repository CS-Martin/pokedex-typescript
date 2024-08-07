import { PokemonTypeBadge } from "@/components/custom-components/pokemon-type/type-badge";
import { getPokemonWeakness } from "@/lib/constants";
import { Pokemon, PokemonType } from "@/types/pokemon";

type PokemonTypesProps = {
    types: PokemonType[];
};

const PokemonWeaknesses: React.FC<PokemonTypesProps> = ({ types }): JSX.Element => {
    const weaknesses: string[] = types
        ? Array.from(new Set(types.flatMap((type) => getPokemonWeakness(type)).filter(Boolean)))
        : [];

    return (
        <div className="">
            <p className="text-label mb-2">Weak against:</p>
            <div className='flex gap-2 flex-wrap'>
                {weaknesses && weaknesses.map((weakness, index) =>
                    <PokemonTypeBadge key={index} type={weakness as PokemonType} />
                )}
            </div>
        </div>
    );
};

export default PokemonWeaknesses;   