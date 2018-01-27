import React from "react";
import axios from "axios";
import Slider from "react-slick";
import {imgPath, serverPath} from "../paths";

import "./hero.style.css";

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

class Hero extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cities: []
        };
    }

    componentDidMount() {
        axios.get(serverPath + "get-destinations.php")
            .then((response) => {
                console.log(response);
                this.setState({
                    cities: response.data.map((value) => {
                        return (
                            <div className="slide-container" key={value.id}>
                                <img src={imgPath + value.urlBig} alt="" />
                                <h1 className="desc">
                                    {value.name}
                                </h1>
                            </div>
                        );
                    })
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="hero" >
                <div className="darker">
                    <Slider {...settings}>
                        {this.state.cities}
                    </Slider>
                </div>
            </div>
        );
    }
}

export default Hero;
