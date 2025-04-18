import React from "react";
import { Link } from "react-router-dom";

class ProjectProps{
    img?:string;
    title?:string;
    description?:string;
    status?:string;
}

const ProjectCard : React.FC<ProjectProps> = ({img, title, description, status}) => {
    return(
        <figure className="p-3 border lg:w-100 shadow-md rounded flex flex-col">
        <img src={img} alt={title} className="rounded mb-3" />
        <figcaption className="text-sm font-medium text-center mb-2">{title}</figcaption>
        <p className="text-xs text-gray-500 font-medium line-clamp-3 mb-3">{description}</p>
        <p className="text-xs font-medium mb-2">Status: {status}</p>
        <Link to="/work" className="text-sm font-medium bg-black text-white px-3 py-1 rounded self-start">
          Learn more
        </Link>
      </figure>
    )
}

export default ProjectCard;
