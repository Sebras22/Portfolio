import React from "react";
import "./projects.css";
import { projets } from "./Array";

function Projects() {
    return (
        <>
            <div>
                <div className="MyProjects">My Projects</div>
                {projets.map((el, id) => {
                    return <div></div>;
                })}
            </div>
        </>
    );
}

export default Projects;
