"use client"

import { motion } from "framer-motion";
import { useData } from "../../contexts/data";
import { useSelector } from "react-redux";
import { ProjectState } from "../../redux/slices/projectSlice";
import { useEffect, useState } from "react";

function BackgroundImage(){
    const data = useData();
    const actualSlide = useSelector((state: ProjectState) => state.project.id);
    const transitionData = data.projects[actualSlide-1];
    const [key, setKey] = useState(0);
    useEffect(() => {
      setKey(key + 1);
    }, [transitionData]);
    return (
      <>
        {transitionData && 
          <motion.img 
            key={key}
            layoutId={transitionData.imageBackground}
            initial={{scaleX: 0}}
            animate={{scaleX : 1, transformOrigin: "right"}}
            transition={{ type: "spring", damping: 20, stiffness: 100, duration: 1}}
            className="absolute w-screen h-screen z-0 brightness-50 object-cover"
            alt={`Image du projet ${transitionData.title}`} 
            src={transitionData.imageBackground}
          /> 
        }
      </>
    );
  }

  export default BackgroundImage;
