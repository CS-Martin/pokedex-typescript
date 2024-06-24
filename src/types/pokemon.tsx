export type Pokemon = {
    id: number;
    name: string;
    url: string;
    image?: string;
    types?: string[];
    height?: number;
    weight?: number;
    stats?: PokemonStats;
    abilities?: string[];
};

export type PokemonStats = {
    attack?: number;
    defense?: number;
    specialAttack?: number;
    specialDefense?: number;
    speed?: number;
};

export type PokemonImage = Pick<Pokemon, 'image' | 'name'> & {
    size: number;
    className: string;
};