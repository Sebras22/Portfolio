import React from "react";
import "./navbar.css";

function Navbar() {
    return (
        <>
            <div className="TOP">
                <div className="Navbar">
                    <div className="Nom">{"<Seb/>"}</div>
                    <div className="Liens">
                        <a href="#Accueil" className="Lien">
                            Accueil
                        </a>
                        <a href="#skills" className="Lien">
                            Skills{" "}
                        </a>
                        <a href="#Portfolio" className="Lien">
                            Portfolio
                        </a>
                    </div>
                    <button className="BoutonContact">Contact</button>
                </div>
            </div>
        </>
    );
}

export default Navbar;
