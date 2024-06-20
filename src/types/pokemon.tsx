export type Pokemon = {
    name: string,
    url: string
}

export type PokemonCard = Pokemon & {
    id?: number,
    image?: string,
    types?: string[], 
}