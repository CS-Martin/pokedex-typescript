/**
 * Base URL for the PokeAPI.
 */
export const POKEAPI_BASE_URL: string = 'https://pokeapi.co/api/v2';

/**
 * URL for accessing Pokemon information from the PokeAPI.
 */
export const POKEAPI_POKEMONS_URL: string = `${POKEAPI_BASE_URL}/pokemon/`;

/**
 * URL for accessing full-size Pokemon images from the Pokemon website.
 */
export const POKEAPI_POKEMONS_IMAGE_URL: string =
    'https://assets.pokemon.com/assets/cms2/img/pokedex/full/';

// // https://www.eurogamer.net/pokemon-go-type-chart-effectiveness-weaknesses
export function getPokemonWeakness() {
    const weakness = {
        normal: ['rock', 'ghost', 'steel'],
        fighting: ['flying', 'poison', 'psychic', 'bug', 'ghost', 'fairy'],
        flying: ['rock', 'steel', 'electric'],
        poison: ['poison', 'ground', 'rock', 'ghost', 'steel'],
        ground: ['flying', 'bug', 'grass'],
        rock: ['fighting', 'ground', 'steel'],
        bug: [
            'fighting',
            'flying',
            'poison',
            'ghost',
            'steel',
            'fire',
            'fairy'
        ],
        ghost: ['normal', 'dark'],
        steel: ['steel', 'fire', 'water', 'electric'],
        fire: ['rock', 'fire', 'water', 'dragon'],
        water: ['water', 'grass', 'dragon'],
        grass: ['flying', 'poison', 'bug', 'steel', 'fire', 'grass', 'dragon'],
        electric: ['ground', 'grass', 'electric', 'dragon'],
        psychic: ['steel', 'psychic', 'dark'],
        ice: ['steel', 'fire', 'water', 'ice'],
        dragon: ['steel', 'fairy'],
        dark: ['fighting', 'dark', 'fairy'],
        fairy: ['poison', 'steel', 'fire']
    };

    //   return weakness[pokemonType];
}

export function getPokemonStrength() {
    const strength = {
        normal: [],
        fighting: ['normal', 'rock', 'steel', 'ice', 'dark'],
        flying: ['fighting', 'bug', 'grass'],
        poison: ['grass', 'fairy'],
        ground: ['poison', 'rock', 'steel', 'fire', 'electric'],
        rock: ['flying', 'bug', 'fire', 'ice'],
        bug: ['grass', 'psychic', 'dark'],
        ghost: ['ghost', 'psychic'],
        steel: ['rock', 'ice', 'fairy'],
        fire: ['bug', 'steel', 'grass', 'ice'],
        water: ['ground', 'rock', 'fire'],
        grass: ['ground', 'rock', 'water'],
        electric: ['flying', 'water'],
        psychic: ['fighting', 'poison'],
        ice: ['flying', 'ground', 'grass', 'dragon'],
        dragon: ['dragon'],
        dark: ['ghost', 'psychic'],
        fairy: ['fighting', 'dragon', 'dark']
    };

    //   return strength[pokemonType];
}

export function getPokemonColor(hex: string): string {
    switch (hex) {
        case 'normal':
            return '#9298A4';
        case 'fighting':
            return '#D04164';
        case 'flying':
            return '#8FA8DD';
        case 'poison':
            return '#A864C7';
        case 'ground':
            return '#DC7545';
        case 'rock':
            return '#C5B489';
        case 'bug':
            return '#92BC2C';
        case 'ghost':
            return '#516AAC';
        case 'steel':
            return '#52869D';
        case 'fire':
            return '#FD7D24';
        case 'water':
            return '#4A90DA';
        case 'grass':
            return '#5DBE62';
        case 'electric':
            return '#EDD53E';
        case 'psychic':
            return '#F66F71';
        case 'ice':
            return '#70CCBD';
        case 'dragon':
            return '#0C69C8';
        case 'dark':
            return '#595761';
        case 'fairy':
            return '#EC8CE5';
        default:
            return '#000000';
    }
}
