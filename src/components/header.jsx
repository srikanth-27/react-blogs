import React from "react";
import { Container, Navbar } from "react-bootstrap";

import logo from "../images/caw.jpeg";
const header = ({ title = "CAW Blogs" }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top mr-5"
          />
          {title}
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default header;
