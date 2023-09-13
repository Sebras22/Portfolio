import React from "react";
import "./Cards.css";
import { Card } from "./Array.jsx";

function Cards() {
    return (
        <>
            <div className="carrousel">
                {Card.map((el, id) => {
                    return (
                        <div className="cardplacement" key={id}>
                            <div className="iconecard">
                                <img
                                    className="Illustration"
                                    src={el.src}
                                    alt=""
                                />
                            </div>
                            <div className="Card">
                                <div className="Titre">{el.name}</div>
                                <div className="Desc">{el.text}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default Cards;
