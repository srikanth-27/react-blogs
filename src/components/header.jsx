import React from "react";
import { Navbar } from "react-bootstrap";

import logo from "../images/caw.jpeg";
const header = ({ title = "CAW Blogs" }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand className="d-flex">
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          style={{ marginLeft: "100px" }}
        />
        <h4 className="mx-3">{title}</h4>
      </Navbar.Brand>
    </Navbar>
  );
};

export default header;
