import React from "react";
import profile from "../res/profile.jpg";
import "./about.style.css";

function About() {
    return (
        <div className="about">
            <div className="bg">
                <div className="center-vertical">
                    <h1 className="title space bottom"><center>About Us</center></h1>
                    <center><p className="content">East Coast Trip is a World Class traveling agency, born from an idea of Gianpiergiorgio Sfrizzi, now CEO of Viaggiare Felici std. Customer satisfaction is our #1 priority</p></center>
                </div>
            </div>
            <div className="wrapper">
                <div className="half">
                    <div className="center-vertical">
                        <span className="fa fa-globe"></span>
                        <p className="second-half-title">Our Team</p>
                        <p className="second-half-content">Founded in december 2017, based in San Francisco, California, East Coast Trip is a new-born booking agency that wants to provide the best traveling options to its clients. The agency after some initial difficulties has grown and now has achieved its own online-marketing competing with the major travel e-commerce companies in the world.</p>
                    </div>
                </div>
                <div className="profile">
                    <img src={profile} alt="" />
                    <p className="name">Alexandru Cazacu</p>
                    <p className="role">CEO, Lead Programmer</p>
                </div>
                <div className="profile">
                    <img src={profile} alt="" />
                    <p className="name">Omar Facchini</p>
                    <p className="role">Lead Content Manager</p>
                </div>
                <div className="profile">
                    <img src={profile} alt="" />
                    <p className="name">Marco Berardelli</p>
                    <p className="role">Lead Programmer</p>
                </div>
                <div className="profile">
                    <img src={profile} alt="" />
                    <p className="name">Andrea Nishku</p>
                    <p className="role">UI Designer</p>
                </div>
                <div className="profile">
                    <img src={profile} alt="" />
                    <p className="name">Lorenzo Cerlini</p>
                    <p className="role">UI Designer</p>
                </div>
                <div className="profile">
                    <img src={profile} alt="" />
                    <p className="name">Michael Perini</p>
                    <p className="role">Q.A.</p>
                </div>
            </div>
        </div>
    );
}

export default About;
