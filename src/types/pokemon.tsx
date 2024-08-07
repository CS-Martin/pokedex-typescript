export type Pokemon = {
    id: number;
    name: string;
    description: string[];
    base_experience: number;
    height: number;
    weight: number;
    url: string;
    image: string;
    types: PokemonType[];
    stats: PokemonStats;
    abilities: string[];
};

export type PokemonPageProps = Omit<Pokemon, 'url'>;

export type PokemonStats = {
    attack: {
        base: number;
        effort: number;
    };
    defense: {
        base: number;
        effort: number;
    };
    specialAttack: {
        base: number;
        effort: number;
    };
    specialDefense: {
        base: number;
        effort: number;
    };
    speed: {
        base: number;
        effort: number;
    };
};

export type PokemonImage = Pick<Pokemon, 'image' | 'name'> & {
    size: number;
    className: string;
};

export type PokemonType = "ice" | "normal" | "water" | "bug" | "dark" | "dragon" | "electric" | "fire" | "fairy" | "fighting" | "flying" | "ghost" | "grass" | "ground" | "poison" | "psychic" | "rock" | "steel";
