import Image from "next/image";
import { Services } from "@/app/contexts/data";

function ServicesSection ({id, imageBackground, name, description, pictures}: Services){
    return (
        <div className="flex flex-col rounded-xl gap-4 p-4 relative z-1 sm:h-[40vh] h-[60vh] w-[95vw] items-center overflow-hidden">
            <div className="absolute rounded-xl w-full h-full z-0 brightness-50">
                {imageBackground && <Image src={imageBackground} fill alt={`Image de présentation de notre prestation ${name}`} sizes="100vw" style={{objectFit: "cover"}} className="rounded-xl" />}
            </div>
            <div className="z-1 relative flex flex-col h-full w-full p-4 gap-4 overflow-hidden">
                <h3 className="text-4xl text-center underline h-[10%]">{name}</h3>
                <p className="text-2xl z-1 overflow-y-scroll h-[90%] bg-gray-900 rounded-xl p-4 opacity-80">{description}</p>
            </div>
        </div>
    )
}

export default ServicesSection;
