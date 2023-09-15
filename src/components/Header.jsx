import React from "react";
import "./header.css";

function Header() {
    return (
        <>
            <div id="Accueil" className="Header">
                <div className="Job">Student Developer</div>
                <img className="Me" src="./assets/Me.png" alt="" />
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
