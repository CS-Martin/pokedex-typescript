import Image from "next/image";

const Loading = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
            <div className="flex flex-col gap-y-5">
                {/* <div>
                    <p className="dot-flashing text-xl">Loading</p>
                </div> */}
                <div className="flex gap-3">
                    <Image height={50} width={50} className="animate-bounce" src="/icons/loading/pikachu.svg" alt="" style={{ animationDelay: "0.1s" }} />
                    <Image height={50} width={50} className="animate-bounce" src="/icons/loading/bulbasaur.svg" alt="" style={{ animationDelay: "0.2s" }} />
                    <Image height={50} width={50} className="animate-bounce" src="/icons/loading/charmander.svg" alt="" style={{ animationDelay: "0.3s" }} />
                    <Image height={50} width={50} className="animate-bounce" src="/icons/loading/mankey.svg" alt="" style={{ animationDelay: "0.4s" }} />
                    <Image height={50} width={50} className="animate-bounce" src="/icons/loading/psyduck.svg" alt="" style={{ animationDelay: "0.5s" }} />
                    <Image height={50} width={50} className="animate-bounce" src="/icons/loading/squirtle.svg" alt="" style={{ animationDelay: "0.6s" }} />
                </div>
            </div>
        </div>
    );
};

export default Loading;