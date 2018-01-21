import React from "react";
import Home from "./views/home.view";
import Trip from "./views/trip.view";
import Destination from "./views/destination.view";
import Destinations from "./views/destinations.view";
import About from "./views/about.view";
import PageNotFound from"./views/pageNotFound.view";
import "./styles/App.css";
import "./styles/navbar.css";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from "react-router-dom";

function App() {

    return (
        <Router>
            <div>
                <nav className="navbar">
                    <div className="wrapper">
                        <h2 className="logo">East Coast Trip</h2>
                        <div className="list">
                            <Link to="/" className="item">Home</Link>
                            <Link to="/trip" className="item">Trip</Link>
                            <Link to="/destinations" className="item">Destinations</Link>
                            <Link to="/about" className="item">About</Link>
                        </div>
                    </div>
                </nav>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/trip" component={Trip} />
                    <Route exact path="/destinations" render={(props) => (<Destinations {...props} name="ciao" />)} />
                    <Route exact path="/destinations/:id(\d+)" component={Destination} />
                    <Route exact path="/about" component={About} />
                    <Route component={PageNotFound} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
