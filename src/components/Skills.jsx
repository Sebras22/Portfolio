import React from "react";
import "./skills.css";
import Crea from "../assets/Crea.png";
import { skill } from "./Array";
import { skillinfo } from "./Array";

function Skills() {
    return (
        <>
            <div className="skillplacement">
                <div className="MySkills">My Skills</div>
                {skillinfo.map((el, id) => {
                    return (
                        <div className="skillback">
                            <div className="all">
                                <div>
                                    <img
                                        className="iconeskill"
                                        src={el.src}
                                        alt=""
                                    />
                                </div>
                                <div className="Skilltitre">{el.name}</div>
                            </div>

                            {skill.map((el, id) => {
                                return (
                                    <div className="infoplacement">
                                        <div key={id} className="info">
                                            <img src={el.src} alt="" />;
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default Skills;
