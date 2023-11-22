import { useState } from "react";
import "./header.css";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Login from "../loginSignup/login/login";
import Signup from "../loginSignup/signup/signup";
import { TiThMenu } from "react-icons/ti";
import Offcanvas from "react-bootstrap/Offcanvas";
function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div>
        <Link to="/">
          {" "}
          <img
            src="./imgpage/HomePage/zomato.logo2.png"
            alt="logo"
            className="zomato-logo"
          />{" "}
        </Link>
        <Navbar className="search-bar-2 justify-content-between">
          <Form inline>
            <InputGroup>
              <div className="loc-box">
                <InputGroup.Text id="basic-addon1" className="location-box-2">
                  <Dropdown>
                    {" "}
                    <div className="location-icon-2">
                      <FaMapMarkerAlt />{" "}
                    </div>
                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                      pune
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Mumbai</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Bangalore</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Delhi</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <div className="search-divider"></div>
                  <div className="search-icon">
                    {" "}
                    <FaSearch />{" "}
                  </div>
                </InputGroup.Text>
              </div>
              <input
                type="text"
                className="search-input-2"
                placeholder="  Search for restaurant, cuisine or a dish"
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
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <div className="mobilenavs">
            <span className="m-navtab"> Invester Relation</span>{" "}
            <span className="m-navtab2">Add restatrunt</span>
            <span className="m-navtab3">
              <Login />
            </span>
            <span className="m-navtab3">
              <Signup />
            </span>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      <div className="menu-icon1" onClick={handleShow}>
        <TiThMenu />
      </div>
    </>
  );
}

export default Header;
