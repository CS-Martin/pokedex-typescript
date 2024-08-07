import Image from 'next/image';
import './type-icons.css';

const types = {
    ice: { bg: '#70CCBD', icon: '/icons/ice.svg', label: 'Ice' },
    normal: { bg: '#A0A29F', icon: '/icons/normal.svg', label: 'Normal' },
    water: { bg: '#539DDF', icon: '/icons/water.svg', label: 'Water' },
    bug: { bg: '#92BC2C', icon: '/icons/bug.svg', label: 'Bug' },
    dark: { bg: '#595861', icon: '/icons/dark.svg', label: 'Dark' }, // SVG handled separately
    dragon: { bg: '#0C69C8', icon: '/icons/dragon.svg', label: 'Dragon' },
    electric: { bg: '#EDD53E', icon: '/icons/electric.svg', label: 'Electric' },
    fire: { bg: '#FBA54C', icon: '/icons/fire.svg', label: 'Fire' },
    fairy: { bg: '#EC8CE5', icon: '/icons/fairy.svg', label: 'Fairy' },
    fighting: { bg: '#D3425F', icon: '/icons/fighting.svg', label: 'Fighting' },
    flying: { bg: '#A1BBEC', icon: '/icons/flying.svg', label: 'Flying' },
    ghost: { bg: '#516AAC', icon: '/icons/ghost.svg', label: 'Ghost' },
    grass: { bg: '#5DBE62', icon: '/icons/grass.svg', label: 'Grass' },
    ground: { bg: '#DA7C4D', icon: '/icons/ground.svg', label: 'Ground' },
    poison: { bg: '#B763CF', icon: '/icons/poison.svg', label: 'Poison' },
    psychic: { bg: '#FA8581', icon: '/icons/psychic.svg', label: 'Psychic' },
    rock: { bg: '#C9BB8A', icon: '/icons/rock.svg', label: 'Rock' },
    steel: { bg: '#5A8EA1', icon: '/icons/steel.svg', label: 'Steel' },
};

export const PokemonTypeBadge = (type: { type: keyof typeof types }) => {
    const typeInfo = types[type.type];
    if (!typeInfo) return null;

    return (
        <div className="icon-container" style={{ backgroundColor: typeInfo.bg }}>
            <Image src={typeInfo.icon} className={`${type.type} py-1`} alt={`${typeInfo.label} Icon`} width={24} height={24} />
            <small className="ml-1 hidden sm:block">{typeInfo.label}</small>
        </div>
    );
};