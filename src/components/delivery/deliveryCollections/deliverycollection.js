import React from "react";
import "./deliverycollection.css";
import Nextarrow from "../../common/carousel/nextArrow";
import Prevarrow from "../../common/carousel/prevArrow";
import Slider from "react-slick";
import Deliveryitem from "./deliveryItem/deliveryitem";

const deliveryItems = [
  {
    id: 1,
    title: "Biryani",
    cover: "./imgpage/DeliveryCollections/biryani.png",
  },
  {
    id: 2,
    title: "Pizza",
    cover: "./imgpage/DeliveryCollections/pizza.png",
  },
  {
    id: 3,
    title: "Thali",
    cover: "./imgpage/DeliveryCollections/thali.png",
  },
  {
    id: 4,
    title: "Burger",
    cover: "./imgpage/DeliveryCollections/burger.png",
  },
  {
    id: 5,
    title: "Chicken",
    cover: "./imgpage/DeliveryCollections/chicken.png",
  },
  {
    id: 6,
    title: "Sandwich",
    cover: "./imgpage/DeliveryCollections/sandwich.png",
  },
  {
    id: 7,
    title: "Cake",
    cover: "./imgpage/DeliveryCollections/cake.png",
  },
  {
    id: 8,
    title: "North Indian",
    cover: "./imgpage/DeliveryCollections/northindian.png",
  },
  {
    id: 9,
    title: "Rolls",
    cover: "./imgpage/DeliveryCollections/rolls.png",
  },
  {
    id: 10,
    title: "Paneer",
    cover: "./imgpage/DeliveryCollections/paneer.png",
  },
  {
    id: 11,
    title: "Dosa",
    cover: "./imgpage/DeliveryCollections/dosa.png",
  },
  {
    id: 12,
    title: "Noodles",
    cover: "./imgpage/DeliveryCollections/noodles.png",
  },
];

const settings = {
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  nextArrow: <Nextarrow />,
  prevArrow: <Prevarrow />,
};

const Deliverycollection = () => {
  return (
    <div className="delivery-collection">
      <div className="max-width">
        <div className="collection-title ">
          Inspiration for your first order
        </div>
        <Slider {...settings}>
          {deliveryItems.map((item) => {
            return <Deliveryitem item={item} />;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Deliverycollection;
