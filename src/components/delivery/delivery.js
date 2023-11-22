import React from "react";
import "./delivery.css";
import Filter from "../common/filters/filter";
import { FaSlidersH } from "react-icons/fa";
import Deliverycollection from "./deliveryCollections/deliverycollection";
import Topbrands from "./topBrands/topbrands";
import Exploresection from "../common/exploreSection/exploresection";
import { restaurants } from "../../data/restaurants";

//Delivery Filters
const deliveryFilters = [
  {
    id: 1,
    icon: (
      <i className="absolute-centre">
        <FaSlidersH />
      </i>
    ),
    title: "Filters",
  },
  {
    id: 2,
    title: "Rating: 4.0+",
  },
  {
    id: 3,
    title: "Cuisines",
  },
];

const restaurantList = restaurants;

const Delivery = () => {
  return (
    <div>
      <div className="max-width">
        <Filter filterlist={deliveryFilters} />
      </div>
      <Deliverycollection />
      <Topbrands />
      <Exploresection
        list={restaurantList}
        collectionName="Best Food in Pune"
      />
    </div>
  );
};

export default Delivery;
