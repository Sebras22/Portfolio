import React from "react";
import "./skills.css";
import { To } from "./Array";

function Tools() {
    return (
        <>
            <div className="skillplacement">
                <div className="skillback">
                    <div className="all">
                        <div>
                            <img
                                className="iconeskill"
                                src="./assets/tools.png"
                                alt=""
                            />
                        </div>
                        <div className="Skilltitre">Tools</div>
                    </div>

                    {To.map((el, id) => {
                        return (
                            <div className="infoplacement">
                                <div key={id} className="info">
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

export default Tools;
