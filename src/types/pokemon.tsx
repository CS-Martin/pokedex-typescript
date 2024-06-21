export type Pokemon = {
    id: number,
    name: string,
    url: string
}

/**
 * Represents a Pokemon card, which is a combination of a Pokemon and optional additional information.
 *
 * @property {number} id - The ID of the Pokemon.
 * @property {string} name - The name of the Pokemon.
 * @property {string} url - The URL of the Pokemon's image.
 * @property {number} [id] - The ID of the Pokemon.
 * @property {string} [image] - The URL of the Pokemon's image.
 * @property {string[]} [types] - The types of the Pokemon.
 */
export type PokemonCard = Pokemon & {
    image?: string,
    types?: string[], 
}
