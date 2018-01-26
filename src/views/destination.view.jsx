import React from "react";
import axios from "axios";

import PageNotFound from "./pageNotFound.view";

import "./destination.style.css";

const imgUrl = "http://localhost:8080/east-coast-trip/images/";

class Destination extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            city: [],
            available: true,
            places: []
        };
    }

    componentDidMount() {
        axios.get("http://localhost:8080/east-coast-trip/get-destination.php?id=" + this.props.match.params.id)
            .then((response) => {
                console.log(response);

                this.setState({
                    city: response.data[0],
                    places: response.data[0].places.map((value) => {
                        return (
                            <div className="section" key={value.name}>
                                <div className="card right">
                                    <img src={imgUrl + value.url} alt={value.name} />
                                    <div className="desc">
                                        <p>{value.name}</p>
                                    </div>
                                </div>
                                <h2 className="space top bottom"><center>{value.name}</center></h2>
                                <p className="content">{value.desc}</p>
                            </div>
                        );
                    })
                });

            })
            .catch((error) => {
                console.log(error);

                this.setState({ available: false });
            });
    }

    render() {
        if (!this.state.available) {
            return (
                <PageNotFound />
            );
        }
        else {
            return (
                <div className="destination">
                    <div className="small-hero">
                        <img className="bg" src={imgUrl + this.state.city.urlBig} alt="" />
                        <h1 className="title">{this.state.city.name}</h1>
                        <h1 className="subtitle">{this.state.city.nick}</h1>
                    </div>

                    <div className="vertical-space"></div>
                    <div className="wrapper">
                        <h1><center className="space bottom">Welcome to {this.state.city.name}</center></h1>
                        <div className="left section">
                            <div className="card">
                                <img src={imgUrl + this.state.city.urlSmall} alt="" />
                                <div className="desc">
                                    <p>{this.state.city.name}</p>
                                </div>
                            </div>
                            <p className="content">{this.state.city.desc}</p>
                        </div>

                        <h1><center className="space bottom">Best places to visit</center></h1>
                        {this.state.places}
                    </div>
                </div>
            );
        }
    }
}

export default Destination;