import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./trip.style.css";
import { serverPath } from "../paths";

class Trip extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            trip: [],
            firstPoint: [],
            totalTime: 0,
            totalCost: 0
        };
    }

    componentDidMount() {
        if (this.props.link !== "") {
            console.log("Log from trip.jsx: " + this.props.link);
            axios.get(serverPath + "dijkstra.php" + this.props.link)
                .then((response) => {
                    console.log(response);
                    this.setState({
                        firstPoint: [
                            <div className="point">
                                <Link to="destinations/1">
                                    <p className="title">{response.data[0].from}</p>
                                </Link>
                            </div>],
                        trip: response.data.map((value) => {
                            var vehicle;
                            if (value.vehicle === "train")
                                vehicle = () => (<p>Train</p>);
                            if (value.vehicle === "airplane")
                                vehicle = () => (<p>airplane</p>);
                            if (value.vehicle === "bus")
                                vehicle = () => (<p>Bus</p>);

                            this.setState({ totalCost: this.state.totalCost + value.price });
                            this.setState({ totalTime: this.state.totalTime + value.time });

                            return (
                                <div>
                                    <div className="line">
                                        <div className="info">
                                            {vehicle}
                                            <span className="fa fa-usd"></span> ${value.price} <br />
                                            <span className="fa fa-clock-o"></span> {value.time}h <br />
                                        </div>
                                    </div>
                                    <div className="point">
                                        <Link to="destinations/1">
                                            <p className="title">{value.to}</p>
                                        </Link>
                                    </div>
                                </div>
                            );
                        })
                    });
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }

    render() {
        return (
            <div>
                <div className="vertical-space"></div>
                <div className="wrapper">
                    <h1 className="space bottom"><center>Your Itinerary</center></h1>
                    <div className="timeline">
                        <div className="first line"></div>
                        {this.state.firstPoint}
                        {this.state.trip}
                        <div className="last line">
                            <div className="info">
                                <span className="fa fa-usd"></span> Total: ${this.state.totalCost} <br />
                                <span className="fa fa-clock-o"></span> Total: {this.state.totalTime}h <br />
                            </div>
                        </div>
                    </div>
                    <h1 className="space top bottom"><center>You might also like...</center></h1>
                </div>
            </div >
        );
    }
}

export default Trip;
