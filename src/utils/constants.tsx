/**
 * Base URL for the PokeAPI.
 */
export const POKEAPI_BASE_URL: string = "https://pokeapi.co/api/v2";

/**
 * URL for accessing Pokemon information from the PokeAPI.
 */
export const POKEAPI_POKEMONS_URL: string = `${POKEAPI_BASE_URL}/pokemon/`;

/**
 * URL for accessing full-size Pokemon images from the Pokemon website.
 */
export const POKEAPI_POKEMONS_IMAGE_URL: string = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/";

// // https://www.eurogamer.net/pokemon-go-type-chart-effectiveness-weaknesses
export function getPokemonWeakness() {
    const weakness = {
        normal: ["rock", "ghost", "steel"],
        fighting: ["flying", "poison", "psychic", "bug", "ghost", "fairy"],
        flying: ["rock", "steel", "electric"],
        poison: ["poison", "ground", "rock", "ghost", "steel"],
        ground: ["flying", "bug", "grass"],
        rock: ["fighting", "ground", "steel"],
        bug: ["fighting", "flying", "poison", "ghost", "steel", "fire", "fairy"],
        ghost: ["normal", "dark"],
        steel: ["steel", "fire", "water", "electric"],
        fire: ["rock", "fire", "water", "dragon"],
        water: ["water", "grass", "dragon"],
        grass: ["flying", "poison", "bug", "steel", "fire", "grass", "dragon"],
        electric: ["ground", "grass", "electric", "dragon"],
        psychic: ["steel", "psychic", "dark"],
        ice: ["steel", "fire", "water", "ice"],
        dragon: ["steel", "fairy"],
        dark: ["fighting", "dark", "fairy"],
        fairy: ["poison", "steel", "fire"],
    };

    //   return weakness[pokemonType];
}

export function getPokemonStrength() {
    const strength = {
        normal: [],
        fighting: ["normal", "rock", "steel", "ice", "dark"],
        flying: ["fighting", "bug", "grass"],
        poison: ["grass", "fairy"],
        ground: ["poison", "rock", "steel", "fire", "electric"],
        rock: ["flying", "bug", "fire", "ice"],
        bug: ["grass", "psychic", "dark"],
        ghost: ["ghost", "psychic"],
        steel: ["rock", "ice", "fairy"],
        fire: ["bug", "steel", "grass", "ice"],
        water: ["ground", "rock", "fire"],
        grass: ["ground", "rock", "water"],
        electric: ["flying", "water"],
        psychic: ["fighting", "poison"],
        ice: ["flying", "ground", "grass", "dragon"],
        dragon: ["dragon"],
        dark: ["ghost", "psychic"],
        fairy: ["fighting", "dragon", "dark"],
    };

    //   return strength[pokemonType];
}

export function getPokemonColor() {
    const colors = {
        bug: "#92BC2C",
        dark: "#595761",
        dragon: "#0C69C8",
        electric: "#EDD53E",
        fire: "#FD7D24",
        fairy: "#EC8CE5",
        fighting: "#D04164",
        flying: "#8FA8DD",
        ghost: "#516AAC",
        grass: "#5DBE62",
        ground: "#DC7545",
        ice: "#70CCBD",
        normal: "#9298A4",
        poison: "#A864C7",
        psychic: "#F66F71",
        rock: "#C5B489",
        steel: "#52869D",
        water: "#4A90DA",
    };

    //   return colors[pokemonType];
}