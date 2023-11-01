"use client"

import { motion } from "framer-motion";
import { useData } from "../../contexts/data";
import { useSelector } from "react-redux";
import { ProjectState } from "../../redux/slices/projectSlice";
import { useEffect, useState } from "react";
import Image from "next/image";

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
          <motion.div 
            key={key}
            layoutId={transitionData.imageBackground}
            initial={{scale: 0}}
            animate={{scale : 1}}
            transition={{ type: "spring", damping: 20, stiffness: 100, duration: 1}}
            className="absolute min-w-[100vw] min-h-[100vh] w-full h-full z-0 brightness-50 object-cover"
            style={{transformOrigin: "right"}}
          > 
            <Image src={transitionData.imageBackground} alt={`Image du projet ${transitionData.title}`} fill quality={50} sizes="100vw"/>
          </motion.div>
        }
      </>
    );
  }

  export default BackgroundImage;
