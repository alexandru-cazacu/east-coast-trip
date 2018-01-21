import React from "react";
import PageNotFound from "./pageNotFound.view";
import LosAngeles from "../images/LosAngeles.jpg";
import GriffithObservatory from "../images/GriffithObservatory.jpg";
import HollywoodWalkOfFame from "../images/WalkOfFame.jpg";
import SantaMonicaBay from "../images/SantaMonicaBay.jpg";
import hero0 from "../images/hero0.jpg";
import "./destination.style.css";

class Destination extends React.Component {
    render() {
        if (this.props.match.params.id >= 9) {
            return (
                <PageNotFound />
            );
        }
        else {
            return (
                <div className="destination">
                    <div className="small-hero">
                        <img className="bg" src={hero0} alt="Los Angeles" />
                        <h1 className="title">Los Angeles</h1>
                        <h1 className="subtitle">City of Angels</h1>
                    </div>


                    <div className="vertical-space"></div>
                    <div className="wrapper">
                        <h1><center className="space bottom">Welcome to L.A.</center></h1>

                        <div className="section">
                            <div className="left card">
                                <img className="left" src={LosAngeles} alt="Los Angeles" />
                                <div className="desc">
                                    <p>Los Angeles</p>
                                </div>
                            </div>
                            <p className="content">Los Angeles is the cultural, financial, and commercial center of Southern California, it is the second most populous city in the United States. The city was officially founded on September 4, 1781, by Spanish governor, it became a part of Mexico in 1821, but in 1848, at the end of the Mexican–American War, it was incorporated in the United States. Nicknamed the "City of Angels" because of how its name translates from the Spanish is the home of Hollywood, a major center of the world entertainment industry </p>
                        </div>

                        <h1><center className="space bottom">Best places to visit</center></h1>
                        <div className="section">
                            <div className="card right">
                                <img className="right" src={GriffithObservatory} alt="Griffith Observatory" />
                                <div className="desc">
                                    <p>Griffith Observatory</p>
                                </div>
                            </div>
                            <h2 className="space top bottom"><center>Griffith Observatory</center></h2>
                            <p className="content">Built in 1896, commands a view of the Los Angeles Basin, including Downtown Los Angeles to the southeast, Hollywood to the south, and the Pacific Ocean to the southwest. Griffith J. Griffith, who donated funds to build it, wanted to make astronomy accessible to everyone.</p>
                        </div>

                        <div className="section">
                            <div className="card left">
                                <img src={HollywoodWalkOfFame} alt="Hollywood Walk Of Fame" />
                                <div className="desc">
                                    <p>Hollywood Walk Of Fame</p>
                                </div>
                            </div>
                            <h2 className="space top bottom"><center>Hollywood Walk Of Fame</center></h2>
                            <p className="content">The Hollywood Walk of Fame comprises more than 2,600 stars embedded in the sidewalks of Hollywood Boulevard, The stars are monuments to achievement in the entertainment industry. </p>
                        </div>

                        <div className="section">
                            <div className="card right">
                                <img src={SantaMonicaBay} alt="Santa Monica Bay" />
                                <div className="desc">
                                    <p>Santa Monica Bay</p>
                                </div>
                            </div>
                            <h2 className="space top bottom"><center>Santa Monica Bay</center></h2>
                            <p className="content">Santa Monica Bay, a bight of the Pacific Ocean in Southern California, is home to some of the most famous beaches in the world and is also a very popular fishing destination  </p>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default Destination;