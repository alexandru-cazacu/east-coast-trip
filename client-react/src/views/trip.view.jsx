import React from "react";
import { Link, Redirect } from "react-router-dom";
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
            totalCost: 0,
            error: false
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
                                <Link to={"/client-react/build/destinations/" + response.data[0].fromID}>
                                    <p className="title">{response.data[0].from}</p>
                                </Link>
                            </div>],
                        trip: response.data.map((value) => {

                            this.setState({ totalCost: this.state.totalCost + value.price });
                            this.setState({ totalTime: this.state.totalTime + value.time });

                            return (
                                <div>
                                    <div className="line">
                                        <div className="info">
                                            {value.vehicle === "train" && <div><span className="fa fa-subway"></span> Train </div>}
                                            {value.vehicle === "bus" && <div><span className="fa fa-bus"></span> Bus </div>}
                                            {value.vehicle === "airplane" && <div><span className="fa fa-plane"></span> Plane </div>}
                                            <br />
                                            <span className="fa fa-usd"></span> ${value.price} <br />
                                            <span className="fa fa-clock-o"></span> {value.time}h <br />
                                        </div>
                                    </div>
                                    <div className="point">
                                        <Link to={"/client-react/build/destinations/" + value.toID}>
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
                    this.setState({ error: true });
                });
        }
    }

    render() {
        if (this.props.link === "") {
            return <Redirect to="/client-react/build/" />;
        }
        if (this.state.error)
            return (
                <div>
                    <div className="vertical-space">
                    </div>
                    <div className="wrapper">
                        <h1 className="space-bottom">We are sorry for the inconvenience...</h1>
                        <p>We are sorry for the inconvenience, but it seems that there aren't any available routes that comply to your requests. Please try again with different settings.</p>
                    </div>
                </div>
            );
        return (
            <div>
                <div className="vertical-space"></div>
                <div className="wrapper">
                    <h1 className="space bottom"><center>Your Itinerary</center></h1>
                    <div className="timeline">
                        <div className="book-button-container">
                            <div className="book-button"><span className="fa fa-shopping-cart"></span> Book</div>
                            <div className="book-button"><span className="fa fa-info"></span> Info</div>
                        </div>
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
                    {/* <h1 className="space top bottom"><center>You might also like...</center></h1> */}
                </div>
            </div >
        );
    }
}

export default Trip;
