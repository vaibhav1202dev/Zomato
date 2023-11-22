import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Login from "../loginSignup/login/login";
import Signup from "../loginSignup/signup/signup";
import { diningOut } from "../../data/dinigoutdata";

export function Heade() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  // In your handleSearch function
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter restaurant names based on the search query
    const filtered = diningOut.filter(
      (restaurant) =>
        typeof restaurant.info.name === "string" &&
        restaurant.info.name.toLowerCase().includes(query)
    );
    setFilteredRestaurants(filtered);

    // Add or remove the 'active' class based on whether there are results
    if (filtered.length > 0) {
      document.querySelector(".search-results").classList.add("active");
    } else {
      document.querySelector(".search-results").classList.remove("active");
    }
  };

  if (!searchQuery) {
    setFilteredRestaurants([]);
  }

  return (
    <>
      <div>
        <Link to="/">
          <img
            src="./imgpage/HomePage/zomato.logo2.png"
            alt="logo"
            className="zomato-logo"
          />
        </Link>
        <Navbar className="search-bar-2 justify-content-between">
          <Form inline>
            <InputGroup>
              <InputGroup.Text id="basic-addon1" className="location-box-2">
                <Dropdown>
                  <div className="location-icon-2">
                    <FaMapMarkerAlt />
                  </div>
                  <Dropdown.Toggle variant="light" id="dropdown-basic">
                    Pune
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Mumbai</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Bangalore</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Delhi</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <div className="search-divider"></div>
                <div className="search-icon">
                  <FaSearch />
                </div>
              </InputGroup.Text>
              <input
                type="text"
                className="search-input-2"
                placeholder="Search for restaurant, cuisine, or a dish"
                value={searchQuery}
                onChange={handleSearch}
              />
            </InputGroup>
          </Form>
        </Navbar>
      </div>
      <div className="log-sign">
        <span className="navtabls">
          <Login />
        </span>
        <span className="navtabls">
          <Signup />
        </span>
      </div>
      {/* Container for search results */}
      {/* <div className="search-results">
              <ul>
                {filteredRestaurants.map((restaurant) => (
                  <li key={restaurant.info.resId}>
                    <Link to={`/restaurant/${restaurant.info.resId}`}>
                      {restaurant.info.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div> */}
      <div className="search-results">
        <ul>
          {filteredRestaurants.map((restaurant) => (
            <li key={restaurant.info.resId}>{restaurant.info.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
