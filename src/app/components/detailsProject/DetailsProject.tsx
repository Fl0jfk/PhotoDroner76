import { useData } from "@/app/contexts/data";

function DetailsProject(props: { params: any }) {
    const data = useData();
    const projectId = parseInt(props.params, 10);
    const details = data.projects.find((project) => project.id === projectId);
    return (
        <div>
            {details && <p className="text-white">{details.id}</p>}
        </div>
    );
}

export default DetailsProject;


