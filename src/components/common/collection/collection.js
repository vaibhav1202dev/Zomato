import React from "react";
import "./collection.css";
import { FaCaretRight } from "react-icons/fa";
import Prevarrow from "../carousel/prevArrow";
import Nextarrow from "../carousel/nextArrow";
import Slider from "react-slick";

// Arrow Settings
const settings = {
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <Nextarrow />,
  prevArrow: <Prevarrow />,
};

const Collection = ({ list }) => {
  return (
    <div className="collection-wrapper ">
      <div className="max-width collection">
        <div className="collection-title ">Collections</div>
        <div className="collection-subtitle-row">
          <div className="collection-subtitle-text">
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            Pune, based on trends
          </div>
          <div className="collection-location">
            <div>All collection in Pune </div>
            <div className="absolute-center">
              <FaCaretRight />{" "}
            </div>
          </div>
        </div>
        <Slider {...settings}>
          {list.map((item) => (
            <div>
              <div className="collection-cover cur-po">
                <img
                  src={item.cover}
                  className="collection-image  "
                  alt={item.title}
                />
                <div className="gradient-bg"></div>
                <div className="collection-card-title">{item.title}</div>
                <div className="collection-card-subtitle">
                  <div>{item.places}</div>
                  <div className="absolute-center">
                    <FaCaretRight />{" "}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Collection;
