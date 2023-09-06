import React from "react";
import { Text } from "@mantine/core";
import "./navbar.css";
import Github from "../assets/Github.png";
import Linkedin from "../assets/Linkedin.png";
import Instagram from "../assets/Instagram.png";

function Navbar() {
    return (
        <>
            <div className="TOP">
                <div className="Navbar">
                    <div className="Titre">{"</Seb>"}</div>
                    <div className="Liens">
                        <div className="Lien">Accueil</div>
                        <div className="Lien">Skills </div>
                        <div className="Lien">Portfolio</div>
                    </div>
                    <div className="Social">
                        <a href="https://github.com/Sebras22">
                            <img src={Github} alt="" />
                        </a>
                        <a href="https://www.linkedin.com/in/s%C3%A9bastien-branly/">
                            <img src={Linkedin} alt="" />
                        </a>
                        <a href="https://www.instagram.com/sebras_22_/">
                            <img src={Instagram} alt="" />
                        </a>
                        <button className="BoutonContact">Contact</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
