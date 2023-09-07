import React from "react";
import "./skills.css";
import Crea from "../assets/Crea.png";

function Skills() {
    return (
        <>
            <div className="skillplacement">
                <div className="all">
                    <div className="Skilltitre">test</div>
                    <img className="iconeskill" src={Crea} alt="" />
                </div>
            </div>
            {/* <div className="Cardall">
                <div className="cardskill">
                    <div className="Skilltitre">Test</div>
                    <div className="cardlanguage">HA</div>
                    <img src={Crea} className="iconeskill" alt="" />
                </div>
            </div> */}
            {/* <div className="all">
                <div className="Cardall">
                    <div>
                        <img className="iconeskill" src={Crea} alt="" />
                    </div>
                    <div className="cardskill">
                        <div className="Skilltitre">test</div>
                        <div className="cardlanguage">HA</div>
                    </div>
                </div>
            </div> */}
        </>
    );
}

export default Skills;
