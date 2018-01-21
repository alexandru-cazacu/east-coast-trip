import React from "react";
import hero0 from "../images/hero0.jpg";
import hero1 from "../images/hero1.jpg";
import hero2 from "../images/hero2.jpg";
import hero3 from "../images/hero3.jpg";
import hero4 from "../images/hero4.jpg";
import hero5 from "../images/hero5.jpg";
import hero6 from "../images/hero6.jpg";
import "../styles/destinations.css";

import { Link } from "react-router-dom";

function Destinations(props) {
    return (
        <div className="wrapper destinations">
            <div className="vertical-space"></div>
            <h1><center>Our Destinations</center></h1>
            <div className="card large">
                <img src={hero0} alt="" />
                <Link to="destinations/1" className="desc">New York</Link>
            </div>
            <div className="card small">
                <img src={hero1} alt="" />
                <Link to="destinations/2" className="desc">Philadelphia</Link>
            </div>
            <div className="card small">
                <img src={hero2} alt="" />
                <Link to="destinations/3" className="desc">Washington</Link>
            </div>
            <div className="card small">
                <img src={hero3} alt="" />
                <Link to="destinations/4" className="desc">Seattle</Link>
            </div>
            <div className="card small">
                <img src={hero4} alt="" />
                <Link to="destinations/5" className="desc">New Orleans</Link>
            </div>
            <div className="card small">
                <img src={hero5} alt="" />
                <Link to="destinations/6" className="desc">Chicago</Link>
            </div>
            <div className="card large">
                <img src={hero6} alt="" />
                <Link to="destinations/7" className="desc">Los Angeles</Link>
            </div>
        </div>
    );
}

export default Destinations;
