"use client"

import { useParams } from "next/navigation";
import { DataProvider } from "@/app/contexts/data";
import DetailsProject from "@/app/components/detailsProject/DetailsProject";
import Header from "@/app/components/header/Header";
import Footer from "@/app/components/footer/Footer";

function Projects(){
    const params = useParams();
    const paramsId = params.projectsId;
    return (
        <main className="text-white">
            <DataProvider>
                <Header/>
                <DetailsProject params={paramsId}/>
                <Footer/>
            </DataProvider>  
        </main>  
    )
}

export default Projects;