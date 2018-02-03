import React from "react";
import Hero from "../components/hero.component";
import Form from "../components/form.component";
import "./home.style.css";

class Home extends React.Component {
    render() {
        return (
            <div>
                <Hero />
                <Form onUserClick={this.props.onUserClick} />
            </div>
        );
    }
}

export default Home;
