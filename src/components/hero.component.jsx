import React from "react";
import hero0 from "../images/hero0.jpg";
import "../styles/hero.css";

function Hero() {
    return (
        <div className="hero" >
            <div className="darker">
                <img src={hero0} alt="" />

                <div className="bullets">
                    <div className="bullet"></div>
                    <div className="bullet"></div>
                    <div className="bullet"></div>
                    <div className="bullet"></div>
                    <div className="bullet"></div>
                    <div className="bullet"></div>
                    <div className="bullet"></div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
