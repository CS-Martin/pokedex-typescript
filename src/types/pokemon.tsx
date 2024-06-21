export type Pokemon = {
    id: string,
    name: string,
    url: string
    image: string,
    types?: string[]
}

export type PokemonImage = Pick<Pokemon, 'image' | 'name'> & {
    size: number
};