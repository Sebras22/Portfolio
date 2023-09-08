import React from "react";
import "./projects.css";
import { projets } from "./Array";

function Projects() {
    return (
        <>
            <div className="Projects">
                <div className="MyProjects">My Projects</div>
                <div className="Proposition">
                    {projets.map((el, id) => {
                        return (
                            <div>
                                <div>{el.name}</div>
                                <div>
                                    <img src={el.src} alt="" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default Projects;
