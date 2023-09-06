import React from "react";
import "./navbar.css";

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
                    <button className="BoutonContact">Contact</button>
                </div>
            </div>
        </>
    );
}

export default Navbar;
