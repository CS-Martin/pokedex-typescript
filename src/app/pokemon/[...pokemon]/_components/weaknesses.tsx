import { Pokemon } from "@/types/pokemon";

type PokemonTypesProps = Partial<Pick<Pokemon, 'types'>>;

const PokemonWeaknesses: React.FC<PokemonTypesProps> = ({ types }): JSX.Element => {
    return (
        <div className="">
            <p className="text-label mb-2">Weak against:</p>
            <div className='flex gap-2 flex-wrap'>
                {/* {types && types.map((type, index) =>
                    <PokemonTypeBadge key={index} type={type} />
                )} */}
            </div>
        </div>
    );
};

export default PokemonWeaknesses;   