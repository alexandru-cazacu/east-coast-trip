import React from "react";
import axios from "axios";
import "./destinations.style.css";

import { Link } from "react-router-dom";

let cities;

class Destinations extends React.Component {
    componentDidMount() {
        axios.get("http://localhost:8080/east-coast-trip/get-city-list.php")
            .then(function (response) {
                console.log(response);
                cities = response.data.map((value) => {
                    return (
                        <div className={value.id === "1" || value.id === "10" ? "card large" : "card small"} key={value.id}>
                            <img src={"http://localhost:8080/east-coast-trip/images/" + value.urlSmall} alt="" />
                            <Link to={"destinations/" + value.id} className="desc">{value.name}</Link>
                        </div>
                    );
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="wrapper destinations">
                <div className="vertical-space"></div>
                <h1><center>Our Destinations</center></h1>
                {/* <div className="card large">
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
                </div> */}
                <div>{cities}</div>
            </div>
        );
    }
}

export default Destinations;
