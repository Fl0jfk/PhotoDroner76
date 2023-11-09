"use client"

import { useParams } from "next/navigation";
import { DataProvider } from "@/app/contexts/data";
import DetailsProject from "@/app/components/detailsProject/DetailsProject";

function Projects(){
    const params = useParams();
    const paramsId = params.projectsId;
    return (
        <DataProvider>
            <DetailsProject params={paramsId}/>
        </DataProvider>    
    )
}

export default Projects;