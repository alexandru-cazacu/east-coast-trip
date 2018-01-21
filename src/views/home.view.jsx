import React from "react";
import Hero from "../components/hero.component";
import Form from "../components/form.component";
import "./home.style.css";

function Home(props) {
    return (
        <div>
            <Hero />
            <Form />
        </div>
    );
}

export default Home;
