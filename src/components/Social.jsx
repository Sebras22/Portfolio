import React from "react";
import "./Social.css";
import Github from "../assets/Github.png";
import Linkedin from "../assets/Linkedin.png";
import Instagram from "../assets/Instagram.png";

function Social() {
    return (
        <>
            <div className="Social">
                {" "}
                <a href="https://github.com/Sebras22">
                    <img src={Github} alt="" />
                </a>
                <a href="https://www.linkedin.com/in/s%C3%A9bastien-branly/">
                    <img src={Linkedin} alt="" />
                </a>
                <a href="https://www.instagram.com/sebras_22_/">
                    <img src={Instagram} alt="" />
                </a>
            </div>
        </>
    );
}

export default Social;
