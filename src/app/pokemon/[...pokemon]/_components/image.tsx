import DisplayPokemonImage from '@/components/custom-components/pokemon-image';
import Tilt from 'react-parallax-tilt';

type PokemonImageProps = {
    name: string;
    image: string;
    cardBackground: string;
};

const PokemonImage: React.FC<PokemonImageProps> = ({ cardBackground, image, name }): JSX.Element => {
    return (
        <>
            <Tilt
                className="relative flex h-[450px] w-[350px] items-center rounded-xl border"
                glareEnable={true}
                glareMaxOpacity={0.1}
                glareColor="lightblue"
                glarePosition="all"
                glareBorderRadius="10px"
                transitionSpeed={3000}
                scale={1.07}>
                <div className="group overflow-hidden rounded-lg px-3 py-5">
                    <div className="absolute inset-0 z-[-1] flex items-center justify-center">
                        <div
                            className={`h-[22rem] w-[22rem] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                            style={{
                                background: `radial-gradient(circle, ${cardBackground} 15%, rgba(255, 255, 255, 0.03) 50%)`
                            }}></div>
                    </div>
                    <DisplayPokemonImage
                        image={image}
                        name={name}
                        size={300}
                        className={`transition-all duration-300 hover:scale-[1.15]`}
                    />
                </div>
            </Tilt>
        </>
    );
};

export default PokemonImage;
