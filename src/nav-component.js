import React, { useState, useEffect, useCallback } from "react";
import {
  Col,
  Dropdown,
  DropdownButton,
  Tooltip,
  Accordion,
  ButtonGroup,
} from "react-bootstrap";

import { Link } from "react-router-dom";

import { PersonCircle, Cart, CreditCard } from "react-bootstrap-icons";

import ContactHeader from "./contactheader-component";
import MobileNav from "./mobilenav-component";

import "./styles/nav.scss";

export default function Nav(props) {
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  const animateHam = () => {
    props.queryMobileNavContent((current) =>
      current === "0vh" ? "60vh" : "0vh"
    );
  };

  return (
    <Col id="nav">
      <Col id="navmenu-container">
        <Col id="mobilenav-cont1"></Col>

        <Col id="firstnavmenu-container">
          <Link to="/" className="navmenu">
            <p>Home</p>
          </Link>
          <p
            className="navmenu"
            onClick={() =>
              alert(
                "My Account, Shopping Cart, Checkout service's currently unavailable."
              )
            }
          >
            Shop
          </p>
          <Link to="/services" className="navmenu">
            <p>Services</p>
          </Link>
          <Link to="/portfolio" className="navmenu">
            <p>Portfolio</p>
          </Link>
        </Col>

        <Col
          className="mzgomezheadercontainer"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <p id="mcgomezconstruction">MC.GOMEZ CONSTRUCTION</p>
          </div>
        </Col>

        <Col id="mobilenav-cont2">
          <div id="hamcont" onClick={() => animateHam()}>
            <div className="hamline hamline1"></div>
            <div className="hamline hamline2"></div>
            <div className="hamline hamline3"></div>
          </div>
        </Col>

        <Col id="secondnavmenu-container">
          <Link to="#" className="navmenu">
            <p>Testimonials</p>
          </Link>
          <Link to="#" className="navmenu">
            <p>Latest News</p>
          </Link>
          <Link to="/contactus" className="navmenu">
            <p>Contact Us</p>
          </Link>
        </Col>
      </Col>
    </Col>
  );
}
