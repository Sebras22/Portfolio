import React from "react";
import "./skills.css";
import Languages from "./Languages";
import Tools from "./Tools";
import Frameworks from "./Frameworks";

function Skills() {
    return (
        <>
            <div id="skills" className="MySkills">
                My Skills
            </div>
            <Languages />
            <Tools />
            <Frameworks />
        </>
    );
}

export default Skills;
