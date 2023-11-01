"use client"

import { motion } from "framer-motion";
import { useData } from "../../contexts/data";
import { useSelector } from "react-redux";
import { ProjectState } from "../../redux/slices/projectSlice";
import Link from "next/link";

function InfoProject() {
    const data = useData();
    const actualSlide = useSelector((state: ProjectState) => state.project.id);
    const dataToDisplay = data.projects[actualSlide-1];
    return (
      <>
        {dataToDisplay && 
            <section className="flex flex-col gap-4 w-[35%] sm:w-full sm:items-center sm:gap-2">
                <motion.span layout className=" mb-2 h-1 w-5 rounded-full bg-white sm:hidden"/>
                <p className="text-4xl sm:pt-[50px] sm:text-2xl">{dataToDisplay.location}</p>
                <h2 className="text-[120px] lg:text-[100px] md:text-[80px] sm:text-[80px]">{dataToDisplay.title}</h2>
                <p className="text-2xl">{dataToDisplay.description}</p>
                <Link className="w-fit rounded-full border-[1px] border-[#ffffff8f] px-6 py-3 text-[10px] text-white font-thin transition duration-300 ease-in-out hover:bg-white hover:text-black" href={`project${dataToDisplay.id}`}>DECOUVREZ CE PROJET</Link>
            </section> 
        }
      </>
    );
  }

  export default InfoProject;
