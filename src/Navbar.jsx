import React from "react";
import { Link , Router } from "react-router-dom";
const Navbar = () => {
  return (
    <>
    <Router>
      <Link to="/">
        home
      </Link>
      <Link to="/about">
        about
      </Link>
      <Link to="/contact">
        contact
      </Link>
      </Router>
    </>
  );
};

export default Navbar;
