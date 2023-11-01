import React from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { Project } from "../../contexts/data";
import { clickProject } from "../../redux/slices/projectSlice";
import { ProjectState } from "../../redux/slices/projectSlice";
import Image from "next/image";

function SliderCard({ id, type, date, title, location, imageMiniature, imageBackground, video, pictures }: Project) {
  const dispatch = useDispatch();
  const test = useSelector((state:ProjectState) => state.project.id);
  return ( 
    <motion.div
      className="relative min-w-[200px] h-[350px] rounded-2xl shadow-md cursor-pointer ml-6" 
      layout 
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{scale: 1, opacity: 1,transition:{duration: 0.4,}}}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ type: "spring", damping: 20, stiffness: 100}}
      onClick={()=> {dispatch(clickProject(id))}}
      >  
      <motion.div className=" absolute h-full w-full">
        <Image src={imageMiniature} alt={`Image du projet ${title}`} fill sizes="50vw" className="rounded-2xl object-cover"/>
      </motion.div>
      <motion.div className=" absolute z-10 flex h-full items-end p-4">
        <motion.div>
          <motion.div layout className=" mb-2 h-[2px] w-3 rounded-full bg-white"></motion.div>
          <motion.p  className="text-xs text-[#D5D5D6]">
            {location}
          </motion.p>
          <motion.h1  className="text-xl leading-6 text-white">
            {title}
          </motion.h1>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default SliderCard;
