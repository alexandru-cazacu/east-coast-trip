import React from "react";
import "../styles/navbar.css";
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
function DestinationCard() {
    return (
        <nav className="navbar">
            <div className="wrapper">
                <h2 className="logo">East Coast Trip</h2>
                <div className="list">
                    <Router>
                        <div>
                            <Link to="/" className="item">Home</Link>
                            <Link to="/destinations" className="item">Destinations</Link>
                            <Link to="/about" className="item">About</Link>
                        </div>
                    </Router>
                </div>
            </div>
        </nav>
    );
}

export default DestinationCard;
