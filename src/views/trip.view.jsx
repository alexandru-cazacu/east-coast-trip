import React from "react";
import { Link } from "react-router-dom";
import "./trip.style.css";

function Trip() {
    return (
        <div>
            <div className="vertical-space"></div>
            <div className="wrapper">
                <h1 className="space bottom"><center>Your Itinerary</center></h1>
                <div className="timeline">
                    <div className="first line"></div>
                    <div className="point">
                        <Link to="destinations/1">
                            <p className="title">New York</p>
                        </Link>
                    </div>
                    <div className="line">
                        <div className="info">
                            <span className="fa fa-subway"></span> Train <br />
                            <span className="fa fa-usd"></span> $84 <br />
                            <span className="fa fa-clock-o"></span> 148m <br />
                        </div>
                    </div>
                    <div className="point">
                        <p className="title">Philadelphia</p>
                    </div>
                    <div className="line">
                        <div className="info">
                            <span className="fa fa-subway"></span> Train <br />
                            <span className="fa fa-usd"></span> $84 <br />
                            <span className="fa fa-clock-o"></span> 148m <br />
                        </div>
                    </div>
                    <div className="point">
                        <p className="title">Washington</p>
                    </div>
                    <div className="last line">
                        <div className="info">
                            <span className="fa fa-usd"></span> Total: $168 <br />
                            <span className="fa fa-clock-o"></span> Total: 182m <br />
                        </div>
                    </div>
                </div>
                <h1 className="space top bottom"><center>You might also like...</center></h1>
                {/* ============================================================ */}
                <div className="timeline">
                    <div className="first line"></div>
                    <div className="point">
                        <p className="title">New York</p>
                    </div>
                    <div className="line">
                        <div className="info">
                            <span className="fa fa-subway"></span> Train <br />
                            <span className="fa fa-usd"></span> 84$ <br />
                            <span className="fa fa-clock-o"></span> 148m <br />
                        </div>
                    </div>
                    <div className="point">
                        <p className="title">Washington</p>
                    </div>
                    <div className="last line">
                        <div className="info">
                            <span className="fa fa-usd"></span> Total: $168 <br />
                            <span className="fa fa-clock-o"></span> Total: 182m <br />
                        </div>
                    </div>
                </div>
                {/* ============================================================ */}
                <div className="timeline">
                    <div className="first line"></div>
                    <div className="point">
                        <p className="title">New York</p>
                    </div>
                    <div className="line">
                        <div className="info">
                            <span className="fa fa-subway"></span> Train <br />
                            <span className="fa fa-usd"></span> 84$ <br />
                            <span className="fa fa-clock-o"></span> 148m <br />
                        </div>
                    </div>
                    <div className="point">
                        <p className="title">Philadelphia</p>
                    </div>
                    <div className="line">
                        <div className="info">
                            <span className="fa fa-subway"></span> Train <br />
                            <span className="fa fa-usd"></span> 84$ <br />
                            <span className="fa fa-clock-o"></span> 148m <br />
                        </div>
                    </div>
                    <div className="point">
                        <p className="title">Washington</p>
                    </div>
                    <div className="last line">
                        <div className="info">
                            <span className="fa fa-usd"></span> Total: $168 <br />
                            <span className="fa fa-clock-o"></span> Total: 182m <br />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Trip;
