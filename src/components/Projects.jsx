import React from "react";
import "./projects.css";
import { projets } from "./Array";

function Projects() {
    return (
        <>
            <div id="Portfolio" className="Projects">
                <div className="MyProjects">My Projects</div>
                <div className="Proposition">
                    {projets.map((el, id) => {
                        return (
                            <div>
                                <div className="ProjectName">
                                    <img
                                        className="imgprojet"
                                        src={el.src}
                                        alt=""
                                    />
                                    <div className="Name">
                                        <div className="TitrePro">
                                            {el.name}
                                        </div>
                                        <div>
                                            Lorem ipsum dolor sit amet. Quo
                                            omnis harum ut sapiente voluptas est
                                            galisum eligendi et tempora
                                            molestias ad dignissimos galisum eos
                                            rerum similique? Et sint rerum ut
                                            odio natus et deleniti modi ex
                                            consequatur perspiciatis aut velit
                                            dolorum in nemo amet. Lorem ipsum
                                            dolor sit amet. Quo omnis harum ut
                                            sapiente voluptas est galisum
                                            eligendi et tempora molestias ad
                                            dignissimos galisum eos rerum
                                            similique? Et sint rerum ut odio
                                            natus et deleniti modi ex
                                            consequatur perspiciatis aut velit
                                            dolorum in nemo amet.
                                        </div>
                                        <img src={el.lang} alt="" />
                                    </div>
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
