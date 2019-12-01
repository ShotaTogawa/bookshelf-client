import React from "react";
import classes from "./top.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul className="Navbar" style={classes.Navbar}>
        <li className="Navbar_item" styke={classes.Navbar_item}>
          Top
        </li>
        <li className="Navbar_item" styke={classes.Navbar_item}>
          About
        </li>
        <li className="Navbar_item" styke={classes.Navbar_item}>
          Contact
        </li>
        <li className="Navbar_item" styke={classes.Navbar_item}>
          <Link to="/signup">Signup</Link>
        </li>
        <li className="Navbar_item" styke={classes.Navbar_item}>
          <Link to="/signin">Signin</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
