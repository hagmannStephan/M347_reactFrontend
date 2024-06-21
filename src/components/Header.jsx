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
              <img src="/images/businessLogo.png" alt="Business Logo" />
            </Link>
          </li>
          <li>
            <div className="lastLink">DE | <b>EN</b></div><div className="lastLink">Login</div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
