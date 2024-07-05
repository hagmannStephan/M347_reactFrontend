import React, { useState, useEffect } from "react";
import { getBusinessTrips } from "./tripsService.js";
import "./Wishlist.css";

function TripList({ dispatch }) {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    getBusinessTrips().then((response) => setTrips(response));
  }, []);

  return (
    <div className="container">
      <section>
        <h4 className="h4">Business Trips</h4>
        <div className="row">
          <table className="tripsTable">
            <thead className="tripsTablehead">
              <tr className="tableT">
                <th>Title</th>
                <th>Employees</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {trips.map(item => (
                <tr className="tripsTablebody tableT" key={item.idBusinessTrip}>
                  <td>{item.title}</td>
                  <td>{item.employees}</td>
                  <td>{item.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default TripList;
