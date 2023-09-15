import React from "react";
import "./skills.css";
import { Lang } from "./Array";

function Languages() {
    return (
        <>
            <div className="skillplacement">
                <div className="skillback">
                    <div className="all">
                        <div>
                            <img
                                className="iconeskill"
                                src="./assets/code.png"
                                alt=""
                            />
                        </div>
                        <div className="Skilltitre">Languages</div>
                    </div>

                    {Lang.map((el, id) => {
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

export default Languages;
