import { useData } from "../../contexts/data";
import SliderCard from "./SliderCard";
import { useState, useRef } from "react";
import { motion} from "framer-motion";

function Slides() {
  const data = useData();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const handleMouseDown = (e: React.MouseEvent) => {
    if (containerRef.current) {
      setIsDragging(true);
      setStartX(e.pageX);
      setScrollLeft(containerRef.current.scrollLeft);
    }
  };
  const handleMouseUp = () => {
    setIsDragging(false);
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    const x = e.pageX;
    const diffX = x - startX;
    const newScrollLeft = scrollLeft - diffX;
    containerRef.current.scrollLeft = newScrollLeft;
  };
  const wrapperVariants = {
    visible: {opacity: 1, transition:{when:'beforeChildren'}},
    hidden: {opacity:0,transition:{when:'afterChildren',staggerChildren: .5}}
  }
  return (
    <>
      {data.projects &&
        <section className="flex flex-col gap-4 max-w-[1500px] w-[65%] bottom-[30%] sm:w-full">
            <motion.div 
              className="flex snap-mandatory overflow-x-scroll snap-x select-none cursor-grab"
              ref={containerRef}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onMouseMove={handleMouseMove}
              variants={wrapperVariants}
              animate={'visible'}
              initial={'hidden'}
              exit={'hidden'}
            >
              {data.projects.map((project) => {
                return <SliderCard key={project.id} id={project.id} type={project.type} date={project.date} title={project.title} location={project.location} imageMiniature={project.imageMiniature} imageBackground={project.imageBackground} video={project.video} pictures={project.pictures} description={project.description}/>
              })}
            </motion.div>
        </section>   
      }
    </>
  );
}

export default Slides;
