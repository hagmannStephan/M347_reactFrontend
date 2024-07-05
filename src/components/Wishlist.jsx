import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { getWishlistItems } from "./tripsService.js";
import "./Wishlist.css";

function WishList({ dispatch }) {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    getWishlistItems().then((response) => setWishlist(response));
  }, []);

  return (
    <div className="container">
      <section>
        <h4 className="h4">Wishlist</h4>
        <div className="row">
          <table className="tripsTable">
            <thead className="tripsTablehead">
              <tr className="tableT">
                <th>Destination</th>
                <th>Origin</th>
              </tr>
            </thead>
            <tbody>
              {wishlist.map(item => (
                <tr className="tripsTablebody tableT" key={item.idFlight}>
                  <td>{item.destination}</td>
                  <td>{item.origin}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default WishList;