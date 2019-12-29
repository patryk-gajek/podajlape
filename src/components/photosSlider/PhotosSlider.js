import React, { Component } from "react";
import Slider from "react-slick";
import "./PhotosSlider.css";

export default class PhotosSlider extends Component {
  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000
    };
    return (
      <div className="container">
        <Slider {...settings}>
        <div className="slider-item item-1"></div>
        <div className="slider-item item-2"></div>
        <div className="slider-item item-3"></div>
        <div className="slider-item item-4"></div>
        <div className="slider-item item-5"></div>
        </Slider>
      </div>
    );
  }
}
