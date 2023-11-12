import React from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { Project } from "../../contexts/data";
import { clickProject } from "../../redux/slices/projectSlice";
import Image from "next/image";
import { type } from "os";

function SliderCard({ id, title, location, imageMiniature }: Project) {
  const dispatch = useDispatch();
  const wrapperVariants = {
    visible: {transition:{when:'beforeChildren'}},
    hidden: {transition:{when:'afterChildren',staggerChildren: 0.8}}
  }
  const cardVariants ={
    visible: { y:0},
    hidden :{ y:500}
  }
  return ( 
    <motion.div className="relative min-w-[200px] h-[350px] rounded-2xl shadow-md cursor-pointer ml-6 hover:scale-x-110 duration-300" 
      variants={wrapperVariants} 
      animate={'visible'}
      initial={'hidden'}
      exit={'hidden'}
      onClick={()=> {dispatch(clickProject(id))}}
    >  
      <motion.div className="absolute h-full w-full overflow-hidden rounded-2xl" variants={cardVariants} animate={'visible'} exit={'hidden'} initial={'hidden'}>
        <Image src={imageMiniature} alt={`Image du projet ${title}`} fill sizes="50vw" className="rounded-2xl object-cover"/>
      </motion.div>
      <motion.div className="absolute z-10 flex h-full items-end p-4">
        <motion.div>
          <motion.div className=" mb-2 h-[2px] w-3 rounded-full bg-white"></motion.div>
          <motion.p className="text-xs text-[#D5D5D6]">
            {location}
          </motion.p>
          <motion.h1 className="text-xl leading-6 text-white">
            {title}
          </motion.h1>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default SliderCard;
