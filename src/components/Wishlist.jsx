import React, { useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Wishlist(props) {
  const { wishlist, dispatch } = props;

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await axios.get("http://localhost:5000/flights"); // Anpassen der URL entsprechend deiner Flask-Server-Konfiguration
        dispatch({ type: "load", payload: response.data });
      } catch (error) {
        console.error("Error fetching flights:", error);
        // Optional: Fehlerbehandlung hier einfügen
      }
    };
    fetchFlights();
  }, [dispatch]);

  const itemsMapped = wishlist.map((item, index) => (
    <Wish dispatch={dispatch} item={item} key={index} />
  ));

  const empty = (
    <tr>
      <td colSpan="5">
        <p className="alert alert-info">Wishlist of Business trips is empty</p>
      </td>
    </tr>
  );

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="card table-responsive">
            <table className="table table-hover shopping-cart-wrap">
              <thead className="text-muted">
                <tr>
                  <th scope="col">Trip</th>
                  <th scope="col" width="200">
                    Title
                  </th>
                  <th scope="col" width="200">
                    Like
                  </th>
                  <th scope="col" width="120">
                    Description
                  </th>
                  <th scope="col" width="200" className="text-right">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>{itemsMapped.length > 0 ? itemsMapped : empty}</tbody>
              <tfoot>
                <tr>
                  <th align="right" scope="col" colSpan="4" />
                  <th scope="col">
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => dispatch({ type: "empty" })}
                      disabled={itemsMapped.length === 0}
                    >
                      empty List
                    </button>
                  </th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function Wish(props) {
  const { dispatch } = props;
  const { id, title, description, startTrip, endTrip } = props.item;

  return (
    <tr key={id}>
      <td>
        <figure className="media">
          <div className="img-wrap">
            <img
              className="img-thumbnail img-xs"
              src={"images/items/" + id + ".jpg"}
              alt="img"
            />
          </div>
          <figcaption className="media-body">
            <h6 className="h6">{title}</h6>
            <dl className="dlist-inline small">
              <dt>Start: </dt>
              <dd>{startTrip}</dd>
            </dl>
            <dl className="dlist-inline small">
              <dt>End: </dt>
              <dd>{endTrip}</dd>
            </dl>
          </figcaption>
        </figure>
      </td>
      <td>
        <span className="media-body">
          <div>{title}</div>
        </span>
      </td>
      <td>
        <span className="media-body">
          <div>
            {/* Placeholder für Like-Button */}
            <button className="btn btn-outline-success fa fa-heart fa-xs" />
          </div>
        </span>
      </td>
      <td className="price-wrap price">{description}</td>
      <td className="text-right">
        <button
          className="btn btn-outline-danger"
          onClick={() => dispatch({ type: "deleteItem", id: props.item.id })}
        >
          delete Trip
        </button>
      </td>
    </tr>
  );
}
