import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";

import Navbar from "./components/navbar.component";
import Home from "./views/home.view";
import Trip from "./views/trip.view";
import Destinations from "./views/destinations.view";
import Destination from "./views/destination.view";
import About from "./views/about.view";
import PageNotFound from "./views/pageNotFound.view";

import "./app.style.css";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            link: ""
        };
    }

    onUserClick(str) {
        this.setState({ link: str });
    }

    render() {
        return (
            <Router>
                <div>
                    {this.state.link !== "" && <Redirect to="/trip" push={true} />}
                    <Navbar />
                    <Switch>
                        <Route exact path="/" render={() => <Home onUserClick={this.onUserClick.bind(this)} />} />
                        <Route exact path="/trip" render={() => <Trip link={this.state.link} />} />
                        <Route exact path="/destinations" render={(props) => (<Destinations {...props} name="ciao" />)} />
                        <Route exact path="/destinations/:id(\d+)" component={Destination} />
                        <Route exact path="/about" component={About} />
                        <Route component={PageNotFound} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;