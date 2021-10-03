import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../logo.png";
import "./HeaderNavbar.css";

const HeaderNavbar = () => {
  return (
    <div>
      <Navbar className="shadow-sm" text="dark" expand="lg">
        <Container>
          <Navbar.Brand>
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mx-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <NavLink className="text-decoration-none text-dark me-4" to="/home">
                <h5 className="linkRoute">Home</h5>
              </NavLink>
              <NavLink className="text-decoration-none text-dark me-4" to="/events">
                <h5 className="linkRoute">Events</h5>
              </NavLink>
              <NavLink className="text-decoration-none text-dark me-4" to="/teachers">
                <h5 className="linkRoute">Teachers</h5>
              </NavLink>
              <NavLink className="text-decoration-none text-dark me-4" to="/services">
                <h5 className="linkRoute">Services</h5>
              </NavLink>{" "}
              <NavLink className="text-decoration-none text-dark me-4" to="/about">
                <h5 className="linkRoute">About Us</h5>
              </NavLink>
              <NavLink className="text-decoration-none text-dark me-4" to="/contact">
                <h5 className="linkRoute">Contact</h5>
              </NavLink>
              <NavLink className="text-decoration-none text-dark me-4" to="/pages">
                <h5 className="linkRoute">Pages</h5>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default HeaderNavbar;
