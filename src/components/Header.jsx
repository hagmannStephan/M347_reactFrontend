import React from "react";
import { Link, NavLink } from "react-router-dom";

const activeStyle = {
  color: "purple",
};

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <img src="/images/businessLogo.png" />
            </Link>
          </li>
          {/* <li>
            <NavLink activeStyle={activeStyle} to="/cart">
              Cart
            </NavLink>
          </li> */}
          <li>
            <NavLink activeStyle={activeStyle} to="/trips">
              Trips
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={activeStyle} to="/wishlist">
              Wishlist
            </NavLink>
          </li>
        </ul>
      </nav>
      <hr />
      </header>
  );
}
