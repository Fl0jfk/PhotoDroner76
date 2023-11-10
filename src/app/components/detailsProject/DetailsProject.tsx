import { useData } from "@/app/contexts/data";
import { motion } from "framer-motion"; 
import Image from "next/image";

function DetailsProject(props: { params: any }) {
    const data = useData();
    const projectId = parseInt(props.params, 10);
    const details = data.projects.find((project) => project.id === projectId);
    return (
        <div>
            {details&&<motion.div 
            key={details.id}
            layoutId={details.imageBackground}
            initial={{scale: 0}}
            animate={{scale : 1}}
            transition={{ type: "spring", damping: 20, stiffness: 100, duration: 1}}
            className={`absolute min-w-[100vw] w-full h-[86vh] sm:h-full z-0 brightness-50`}
            style={{transformOrigin: "bottom"}}
          > 
            <Image src={details.imageBackground} alt={`Image du projet ${details.title}`} fill sizes="100vw" style={{objectFit: "cover"}}/> 
          </motion.div>}
          {details && 
            <div className="w-full flex flex-col items-center justify-center absolute top-[18vh] sm:top-[10vh] z-1 gap-4">
                <h1 className="text-6xl text-center">{details.title}</h1>
                <p className="text-xl">{details.date}</p>
                <p className="text-2xl">{details.location}</p>
                <p className="text-xl">{details.description}</p>
            </div>
          }
        </div>
    );
}

export default DetailsProject;


