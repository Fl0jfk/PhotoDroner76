import { useData } from "@/app/contexts/data";
import Diploma from "./Diploma";

function Diplomas (){
    const data = useData();
    return (
        <div className="grid grid-cols-1 mt-4 gap-4">
             {data.diplomas.map((diploma) => {
                return <Diploma key={diploma.id} id={diploma.id} name={diploma.name} date={diploma.date} organism={diploma.organism} logoOrganism={diploma.logoOrganism} linkOrganism={diploma.linkOrganism}/>
             })}
        </div>
    )
}

export default Diplomas;