import React from "react";
import abstract0 from "../images/abstract-bg1.png";
import "./about.style.css";

function About() {
    return (
        <div className="about">
            <div className="bg">
                <div className="vertical-space"></div>
                <h1 className="title space bottom"><center>About Us</center></h1>
                <div className="vertical-space"></div>
                <center><p className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consequatur debitis, dolor, dolorum provident nemo tenetur voluptatum magni pariatur placeat, aliquam perferendis! Aliquam a, commodi voluptate impedit quod reprehenderit provident</p></center>
            </div>
            <div className="wrapper">
                <div className="half">
                    <span className="fa fa-globe"></span>
                    <p className="second-half-title">Our Team</p>
                    <p className="second-half-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consequatur debitis, dolor, dolorum provident nemo tenetur voluptatum magni pariatur placeat, aliquam perferendis! Aliquam a, commodi voluptate impedit quod reprehenderit provident.</p>
                </div>
                <div className="profile">
                    <img src={abstract0} alt="" />
                    <p className="name">Alexandru Cazacu</p>
                    <p className="role">CEO, Lead Programmer</p>
                </div>
                <div className="profile">
                    <img src={abstract0} alt="" />
                    <p className="name">Omar Facchini</p>
                    <p className="role">Lead Content Manager</p>
                </div>
                <div className="profile">
                    <img src={abstract0} alt="" />
                    <p className="name">Marco Berardelli</p>
                    <p className="role">Lead Programmer</p>
                </div>
                <div className="profile">
                    <img src={abstract0} alt="" />
                    <p className="name">Andrea Nishku</p>
                    <p className="role">UI Designer</p>
                </div>
                <div className="profile">
                    <img src={abstract0} alt="" />
                    <p className="name">Lorenzo Cerlini</p>
                    <p className="role">UI Designer</p>
                </div>
                <div className="profile">
                    <img src={abstract0} alt="" />
                    <p className="name">Michael Perini</p>
                    <p className="role">Q.A.</p>
                </div>
            </div>
        </div>
    );
}

export default About;
