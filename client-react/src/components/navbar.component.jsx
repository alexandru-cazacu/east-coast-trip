import React from "react";
import "./navbar.style.css";
import { Link } from "react-router-dom";

function DestinationCard() {
    return (
        <nav className="navbar">
            <div className="wrapper">
                <Link to="/" className="logo"><h2>East Coast Trip</h2></Link>
                <div className="list">
                    <Link to="/" className="item">Home</Link>
                    <Link to="/destinations" className="item">Destinations</Link>
                    <Link to="/about" className="item">About</Link>
                </div>
            </div>
        </nav>
    );
}

export default DestinationCard;
