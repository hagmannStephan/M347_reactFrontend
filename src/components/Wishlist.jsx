import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { getWishlistItems } from "./tripsService.js";

function WishList({ dispatch }) {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    getWishlistItems().then((response) => setWishlist(response));
  }, []);

  const empty = (
    <tr>
      <td colSpan="5">
        <p className="alert alert-info">Wishlist is empty</p>
      </td>
    </tr>
  );


  return (
    <div className="container">
      <section>
        <h4 className="h4">Wishlist</h4>
        <div className="row">
          <table className="wishlistTable">
            <thead className="wishlistsTablehead">
              <tr>
                <th>Destination</th>
                <th>Origin</th>
              </tr>
            </thead>
            <tbody>
              {wishlist.map(item => (
                <tr className="wishlistTablebody" key={item.idFlight}>
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