import React from "react";
import "./Descriptif.css";
import { Desc } from "./Array.jsx";
import blob from "../assets/blob.png";

function Descriptif() {
    return (
        <>
            <div className="zone">
                {Desc.map((el, id) => {
                    return (
                        <div className="Descriptif">
                            <div className="Toptext">
                                <div className="iconetext">
                                    <img src={el.src} alt="" />
                                </div>
                            </div>
                            <div>
                                <div className="Texttitre">{el.name}</div>
                                <div className="text">{el.text}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default Descriptif;
