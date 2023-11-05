import { useData } from "@/app/contexts/data";
import ServicesSection from "./ServicesSection";

function ServicesComponent (){
    const data = useData();
    return (
        <div className="sm:pt-[10vh] flex flex-col justify-items items-center min-h-[80vh] h-full pb-[10vh] gap-[50px] w-full">
            <h2 className="text-4xl">Nos services</h2>
            <div className="flex flex-col gap-[100px] w-full items-center">
                {data.services.map((service) => {
                    return <ServicesSection key={service.id} id={service.id} name={service.name} imageBackground={service.imageBackground} description={service.description} pictures={service.pictures}/>
                })}
            </div>
        </div>
    )
}

export default ServicesComponent;