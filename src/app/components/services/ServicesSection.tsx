import Image from "next/image";
import { Services } from "@/app/contexts/data";

function ServicesSection ({id, imageBackground, name, description, pictures}: Services){
    return (
        <div id={name} className="flex flex-col gap-4 relative z-1 w-full items-center overflow-hidden">
            <div className="absolute w-full h-full z-0 brightness-75">
                {imageBackground && <Image src={imageBackground} fill alt={`Image de présentation de notre prestation ${name}`} sizes="100vw" style={{objectFit: "cover"}}/>}
            </div>
            <div className="z-1 relative flex flex-col h-full w-full gap-4 overflow-hidden items-center justify-center">
                <h3 className="text-4xl text-center underline h-[20vh] pt-4 flex items-center">{name}</h3>
                <p className="text-2xl z-1 overflow-y-scroll h-[80vh] bg-gray-800 opacity-70 p-8 flex flex-col gap-8">{description}
                    <div className="flex gap-4 justify-center mt-4 sm:flex-col">
                        {pictures.map((picture) => {
                            return <Image key={picture.id} src={picture.image} alt={`Image de notre service ${name}`} width={400} height={400} className="rounded-xl"/>
                        })}
                    </div>
                </p>
            </div>
        </div>
    )
}

export default ServicesSection;
