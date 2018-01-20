import React from "react";
import "../styles/trip.css";

function Trip() {
    return (
        <div>
            <div className="wrapper">
                <div className="timeline">
                    <p>You chose to go from <a href="http://">New York</a> to <a href="http://">Philadelphia</a></p>
                    <div className="first line"></div>
                    <div className="event">
                        <div className="point">
                            <p className="title">New York</p>
                        </div>
                    </div>
                    <div className="line">
                        <div className="info">
                            <span className="fa fa-usd"></span> 84$ <br />
                            <span className="fa fa-subway"></span> Train <br />
                            <span className="fa fa-clock-o"></span> 148m <br />
                        </div></div>
                    <div className="event">
                        <div className="point">
                            <p className="title">Philadelphia</p>
                        </div>
                    </div>
                    <div className="line">
                        <div className="info">
                            <span className="fa fa-usd"></span> 84$ <br />
                            <span className="fa fa-subway"></span> Train <br />
                            <span className="fa fa-clock-o"></span> 148m <br />
                        </div>
                    </div>
                    <div className="event">
                        <div className="point">
                            <p className="title">Washington</p>
                        </div>
                    </div>
                    <div className="last line"></div>
                </div>
            </div>
        </div>
    );
}

export default Trip;
