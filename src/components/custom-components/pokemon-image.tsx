import React from 'react';
import Image from 'next/image';
import { PokemonImage as PokemonImageProps } from '../../types/pokemon';

const DisplayPokemonImage: React.FC<PokemonImageProps> = ({image, name, size}) => {
    return (
        <Image src={image} alt={name} height={size} width={size} />
    );
};

export default DisplayPokemonImage;