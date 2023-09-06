import React from "react";
import "./header.css";
import Me from "../assets/Me.png";

function Header() {
    return (
        <>
            <div className="Header">
                <div className="Job">Student Developer</div>
                <img className="Me" src={Me} alt="" />
                <div className="HelloText">
                    <div>
                        Hi, my name is <span>Seb !</span>
                    </div>
                    I’m a french student from Efrei Paris, I’m currently
                    studying in web development.
                </div>

                <div></div>
            </div>
        </>
    );
}

export default Header;
