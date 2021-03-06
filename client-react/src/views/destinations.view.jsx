import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { imgPath, serverPath } from "../paths";

import "./destinations.style.css";

class Destinations extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cities: []
        };
    }

    componentDidMount() {
        axios.get(serverPath + "get-destinations.php")
            .then((response) => {
                console.log(response);
                this.setState({
                    cities: response.data.map((value) => {
                        return (
                            <div className={value.id === "1" || value.id === "10" ? "card large" : "card small"} key={value.id}>
                                <img src={imgPath + value.urlSmall} alt="" />
                                <Link to={"/client-react/build/destinations/" + value.id} className="desc">{value.name}</Link>
                            </div>
                        );
                    })
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="wrapper destinations">
                <div className="vertical-space"></div>
                <h1><center>Our Destinations</center></h1>
                <div>{this.state.cities}</div>
            </div>
        );
    }
}

export default Destinations;
