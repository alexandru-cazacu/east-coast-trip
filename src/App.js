import React from "react";
import Navbar from "./components/navbar.component";
import Home from "./views/home.view";
import Trip from "./views/trip.view";
import Destinations from "./views/destinations.view";
import Destination from "./views/destination.view";
import About from "./views/about.view";
import PageNotFound from"./views/pageNotFound.view";
import "./app.style.css";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";

function App() {
    return (
        <Router>
            <div>
                <Navbar />
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
