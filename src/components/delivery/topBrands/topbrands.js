import React from "react";
import "./topbrands.css";
import Nextarrow from "../../common/carousel/nextArrow";
import Prevarrow from "../../common/carousel/prevArrow";
import Slider from "react-slick";

// Top Brands Data
const topBrandList = [
  {
    id: 1,
    time: "29 min",
    cover: "./imgpage/TopBrands/mcdonalds.png",
  },
  {
    id: 2,
    time: "25 min",
    cover: "./imgpage/TopBrands/dominos.png",
  },
  {
    id: 3,
    time: "45 min",
    cover: "./imgpage/TopBrands/burgerking.png",
  },
  {
    id: 4,
    time: "31 min",
    cover: "./imgpage/TopBrands/rollsmanis.png",
  },
  {
    id: 5,
    time: "31 min",
    cover: "./imgpage/TopBrands/pizzahut.png",
  },
  {
    id: 6,
    time: "20 min",
    cover: "./imgpage/TopBrands/kfc.png",
  },
  {
    id: 7,
    time: "29 min",
    cover: "./imgpage/TopBrands/aromah.png",
  },
  {
    id: 8,
    time: "32 min",
    cover: "./imgpage/TopBrands/ovenstory.png",
  },
  {
    id: 9,
    time: "30 min",
    cover: "./imgpage/TopBrands/subway.png",
  },
  {
    id: 10,
    time: "33 min",
    cover: "./imgpage/TopBrands/homelymeals.png",
  },
];

// Arrow Settings
const settings = {
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  nextArrow: <Nextarrow />,
  prevArrow: <Prevarrow />,
};

const Topbrands = () => {
  return (
    <div className="top-brands max-width">
      <div className="collection-title">Top brands for you</div>
      <Slider {...settings}>
        {topBrandList.map((brand) => {
          return (
            <div>
              <div className="top-brands-cover">
                <img
                  src={brand.cover}
                  className="top-brands-image"
                  alt={brand.time}
                />
              </div>
              <div className="brand-time ">{brand.time}</div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Topbrands;
