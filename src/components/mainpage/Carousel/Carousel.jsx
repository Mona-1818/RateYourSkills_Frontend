import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import { CarouselData } from "./CarouselData";
// import { data } from "./data";
import { FaAward } from "react-icons/fa";
import React from "react";

export default function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
          autoplay: true,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          autoplay: true,
          arrows: false,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          autoplay: true,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="carousel">
      <div className="carousel_heading">
        <h1> Score board </h1>
        <p>
          
          The RateYourSkill platform includes a Scoreboard feature that displays
          the top users in each skill category. The Scoreboard ranks users based
          on their performance in assessments and their overall skill level. The
          Scoreboard feature is a valuable addition to the RateYourSkill
          platform, providing users with a way to track their progress, set
          goals, and stay motivated to improve their skills.
        </p>
      </div>

      <div className="mainpageCarousel">
        <Slider {...settings}>
          {CarouselData.map((item) => (
            <div className="card">
              <div className="cardith">
                <div className="image">
                  <img src={item.img} alt="react logo" />
                </div>
                <div className="info">
                  <h4>Skill : {item.subject}</h4>
                  <h3>
                    
                    <FaAward /> <a href={item.firstrank}> {item.first} </a>
                  </h3>
                  <h3>
                    
                    <FaAward /> <a href={item.secondrank}>
                      
                      {item.second}
                    </a>
                  </h3>
                  <h3>
                    
                    <FaAward /> <a href={item.thridrank}> {item.thrid} </a>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
