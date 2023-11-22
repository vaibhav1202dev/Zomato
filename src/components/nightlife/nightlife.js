import React from "react";
import "./nightlife.css";
import Collection from "../common/collection/collection";
import Filter from "../common/filters/filter";
import { FaSlidersH } from "react-icons/fa";
import { HiArrowsUpDown } from "react-icons/hi2";
import { nightlife } from "../../data/nightlifedata";
import Exploresection from "../common/exploreSection/exploresection";

// Nightlife Card Collection
const nightlifeCollectionList = [
  {
    id: 1,
    title: "13 Places for Freedom Feastival",
    cover: "./imgpage/DiningOutCollections/dinigout3.png",
    places: "12",
  },
  {
    id: 2,
    title: "11 Best Insta-worthy Places",
    cover: "./imgpage/Nightlife/nightlifeparty.png",
    places: "11",
  },
];

// Nightlife Card Collection
const nightlifeFilters = [
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
    icon: (
      <i className="absolute-centre">
        <HiArrowsUpDown />{" "}
      </i>
    ),
    title: "Distance",
  },

  {
    id: 4,
    title: "Rating: 4.0+",
  },
  {
    id: 5,
    title: "Pubs & Bars",
  },
];

const nightlifeList = nightlife;

const Nightlife = () => {
  return (
    <div>
      <Collection list={nightlifeCollectionList} />
      <div className="max-width nightlife-filter">
        <Filter filterlist={nightlifeFilters} />
      </div>
      <div>
        <img
          src="./imgpage/Nightlife/nightlifebanner.png"
          alt="nightlife-banner"
          className="nightlife-banner"
        />
      </div>
      <Exploresection
        list={nightlifeList}
        collectionName="Nightlife Restaurants in Pune"
      />
    </div>
  );
};

export default Nightlife;
