import React from "react";
import "./dinigout.css";
import Collection from "../common/collection/collection";
import Filter from "../common/filters/filter";
import { FaSlidersH } from "react-icons/fa";
import Exploresection from "../common/exploreSection/exploresection";
import { diningOut } from "../../data/dinigoutdata";

// Diningout Card Collection
const collectionList = [
  {
    id: 1,
    title: "13 Places for Freedom Feastival",
    cover: "./imgpage/DiningOutCollections/dinigout1.png",
    places: "12",
  },
  {
    id: 2,
    title: "11 Best Insta-worthy Places",
    cover: "./imgpage/DiningOutCollections/dinigout2.png",
    places: "11",
  },
  {
    id: 3,
    title: "16 Bars & Pubs",
    cover: "./imgpage/DiningOutCollections/dinigout3.png",
    places: "15",
  },
  {
    id: 4,
    title: "13 Serene Rooftop Places",
    cover: "./imgpage/DiningOutCollections/dinigout4.png",
    places: "11",
  },
  {
    id: 5,
    title: " 7 Pure Veg Places",
    cover: "./imgpage/DiningOutCollections/dinigout5.png",
    places: "7",
  },
  {
    id: 6,
    title: "18 Blissful Breakfast Places",
    cover: "./imgpage/DiningOutCollections/dinigout6.png",
    places: "20",
  },
  {
    id: 7,
    title: "8 Great Buffets",
    cover: "./imgpage/DiningOutCollections/dinigout7.png",
    places: "9",
  },
  {
    id: 8,
    title: "7 Newly Opened Restaurant",
    cover: "./imgpage/DiningOutCollections/dinigout8.png",
    places: "12",
  },
];

//Diningout Filters
const diningFilters = [
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
    icon: (
      <img
        src="./imgpage/Filter/goldicon.png"
        alt="goldimg"
        className="goldicon"
      />
    ),
    title: "Gold",
  },
  {
    id: 3,
    title: "Rating: 4.0+",
  },
  {
    id: 4,
    title: "Outdoor Seating",
  },
  {
    id: 5,
    title: "Serves Alcohol",
  },
  {
    id: 6,
    title: "Open Now",
  },
];

// Diningout Restaurants Data
const diningList = diningOut;

const Diningout = () => {
  return (
    <div>
      <Collection list={collectionList} />
      <div className="max-width dinig-filter">
        <Filter filterlist={diningFilters} />
      </div>
      <div className="dinig-banner">
        <img
          src="./imgpage/DiningOutCollections/dinigbanner.png"
          alt="dinigbanner"
        />
      </div>
      <Exploresection
        list={diningList}
        collectionName="Trending dining restaurants in Pune"
      />
    </div>
  );
};

export default Diningout;
