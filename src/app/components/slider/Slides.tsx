import { useData } from "../../contexts/data";
import SliderCard from "./SliderCard";

function Slides() {
  const data = useData();
  return (
    <>
      {data.projects &&
        <section className="flex flex-col gap-4 max-w-[1500px] w-[65%] bottom-[30%] sm:w-full">
            <div className="flex snap-mandatory overflow-x-scroll snap-x select-none">
              {data.projects.map((project) => {
                return <SliderCard key={project.id} id={project.id} type={project.type} date={project.date} title={project.title} location={project.location} imageMiniature={project.imageMiniature} imageBackground={project.imageBackground} video={project.video} pictures={project.pictures} description={project.description}/>;
              })}
            </div>
        </section>   
      }
    </>
  );
}

export default Slides;
