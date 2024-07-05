import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <div className="sideBySide">
              <Link to="/">
                <img src="/images/businessLogo.png" alt="Business Logo" />
              </Link>
              <div style={{ marginLeft: '2rem'}}><b>Buisness Trips and Wishlist!</b></div>
            </div>
          </li>
          <li>
            <div className="sideBySide">
              <Link to="/trips" className="notBlue"><div style={{ marginRight: '2rem'}}>Trips</div></Link> 
              <Link to="/wishlist" className="notBlue"><div style={{ marginRight: '2rem'}}>Wishlist</div></Link>
              <div style={{ marginRight: '2rem'}} className="lastLink">DE | <b>EN</b></div>
              <div className="lastLink">Login</div>    
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
