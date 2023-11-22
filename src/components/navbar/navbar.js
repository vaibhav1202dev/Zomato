import { useState } from "react";
import "./navbar.css";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import Login from "../loginSignup/login/login";
import Signup from "../loginSignup/signup/signup";
import { TiThMenu } from "react-icons/ti";
import Offcanvas from "react-bootstrap/Offcanvas";

function Navbarmenu() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="himg">
        <div className="homepagenav">
          <span className="navtab"> Invester Relation</span>{" "}
          <span className="navtab2">Add restatrunt</span>
          <span className="navtab3">
            <Login />
          </span>
          <span className="navtab4">
            <Signup />
          </span>
        </div>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton></Offcanvas.Header>
          <Offcanvas.Body>
            <div className="mobilenav">
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
      </div>

      <div className="logoname">zoamto</div>
      <div className="tabline">Discover best food and & drinks</div>
      <div className="searchbar">
        <Navbar className="search-bar justify-content-between">
          <Form inline>
            <InputGroup>
              <InputGroup.Text id="basic-addon1" className="location-box">
                <Dropdown>
                  {" "}
                  <div className="location-icon">
                    <FaMapMarkerAlt />{" "}
                  </div>
                  <Dropdown.Toggle variant="light" id="dropdown-basic">
                    pune
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="Mumbai">Mumbai</Dropdown.Item>
                    <Dropdown.Item href="Banglore">Bangalore</Dropdown.Item>
                    <Dropdown.Item href="Delhi">Delhi</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <div className="search-divider"></div>
                <div className="search-icon">
                  {" "}
                  <FaSearch />{" "}
                </div>
              </InputGroup.Text>
              <input
                type="text"
                className="search-input"
                placeholder="  Search for restaurant, cuisine or a dish"
              />
            </InputGroup>
          </Form>
        </Navbar>
      </div>

      <div className="menu-icon" onClick={handleShow}>
        <TiThMenu />
      </div>
    </>
  );
}

export default Navbarmenu;
