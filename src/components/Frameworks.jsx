import React from "react";
import "./skills.css";
import { Frame } from "./Array";

function Frameworks() {
    return (
        <>
            <div className="skillplacement">
                <div className="skillback">
                    <div className="all">
                        <div>
                            <img
                                className="iconeskill"
                                src="./assets/framework.png"
                                alt=""
                            />
                        </div>
                        <div className="Skilltitre">Frameworks</div>
                    </div>

                    {Frame.map((el, id) => {
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

export default Frameworks;
