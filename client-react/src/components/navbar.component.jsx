import React from "react";
import "./navbar.style.css";
import { Link } from "react-router-dom";

function DestinationCard() {
    return (
        <nav className="navbar">
            <div className="wrapper">
                <Link to="/client-react/build/" className="logo"><h2>East Coast Trip</h2></Link>
                <div className="list">
                    <Link to="/client-react/build/" className="item">Home</Link>
                    <Link to="/client-react/build/destinations" className="item">Destinations</Link>
                    <Link to="/client-react/build/about" className="item">About</Link>
                </div>
            </div>
        </nav>
    );
}

export default DestinationCard;
