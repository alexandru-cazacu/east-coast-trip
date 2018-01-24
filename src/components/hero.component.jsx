import React from "react";
import axios from "axios";
import "./hero.style.css";
import Slider from "react-slick";

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

let cities;

class Hero extends React.Component {

    componentDidMount() {
        axios.get("http://localhost:8080/east-coast-trip/get-city-list.php")
            .then(function (response) {
                console.log(response);
                cities = response.data.map((value) => {
                    return (
                        <div className="slide-container" key={value.id}>
                            <img src={"http://localhost:8080/east-coast-trip/images/" + value.urlBig} alt="" />
                            <h1 className="desc">
                                {value.name}
                            </h1>
                        </div>
                    );
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="hero" >
                <div className="darker">
                    <Slider {...settings}>
                        {/* <div className="slide-container"><img src={hero0} alt="" /><h1 className="desc">Location: place name</h1></div>
                        <div className="slide-container"><img src={hero1} alt="" /><h1 className="desc">Location: place name</h1></div>
                        <div className="slide-container"><img src={hero2} alt="" /><h1 className="desc">Location: place name</h1></div>
                        <div className="slide-container"><img src={hero3} alt="" /><h1 className="desc">Location: place name</h1></div>
                        <div className="slide-container"><img src={hero4} alt="" /><h1 className="desc">Location: place name</h1></div> */}
                        {cities}
                    </Slider>
                </div>
            </div>
        );
    }
}

export default Hero;
