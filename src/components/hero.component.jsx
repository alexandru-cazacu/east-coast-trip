import React from "react";
import hero0 from "../images/hero0.jpg";
import hero1 from "../images/hero1.jpg";
import hero2 from "../images/hero2.jpg";
import hero3 from "../images/hero3.jpg";
import hero4 from "../images/hero4.jpg";
import "../styles/hero.css";
import Slider from "react-slick";

function Hero() {

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        swipe: false,
        fade: true,
        appendDots: "darker"
    };

    return (
        <div className="hero" >
            {/* <img src={hero0} alt="" /> */}
            <div className="darker">
                <Slider {...settings}>
                    <div className="slide-container"><img src={hero0} alt="" /><h1 className="desc">Location: place name</h1></div>
                    <div className="slide-container"><img src={hero1} alt="" /><h1 className="desc">Location: place name</h1></div>
                    <div className="slide-container"><img src={hero2} alt="" /><h1 className="desc">Location: place name</h1></div>
                    <div className="slide-container"><img src={hero3} alt="" /><h1 className="desc">Location: place name</h1></div>
                    <div className="slide-container"><img src={hero4} alt="" /><h1 className="desc">Location: place name</h1></div>
                </Slider>
            </div>
        </div>
    );
}

export default Hero;
