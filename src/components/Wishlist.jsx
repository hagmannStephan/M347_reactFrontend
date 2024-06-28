/* eslint-disable react/prop-types */
import React from "react";
import "./Wishlist.css";

export default function Wishlist(props) {
  const { wishlist, dispatch } = props;

  const itemsMapped = wishlist.map((item, index) => (
    <Wish dispatch={dispatch} item={item} key={index} />
  ));

  const empty = (
    <tr>
      <td colSpan="5">
        <p className="alert alert-info text-center">Wishlist of Business Trips is empty</p>
      </td>
    </tr>
  );

  
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">Business Trip Wishlist</h4>
            </div>
            <div className="card-body table-responsive p-0">
              <table className="table table-hover table-bordered mb-0">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Trip</th>
                    <th scope="col" width="200">Title</th>
                    <th scope="col" width="200">Like</th>
                    <th scope="col" width="250">Description</th>
                    <th scope="col" width="150" className="text-right">Action</th>
                  </tr>
                </thead>
                <tbody>{itemsMapped.length > 0 ? itemsMapped : empty}</tbody>
                <tfoot>
                  <tr>
                    <td colSpan="5" className="text-right">
                      <button
                        className="btn btn-outline-danger"
                        onClick={() => dispatch({ type: "empty" })}
                        disabled={itemsMapped.length === 0}
                      >
                        Empty List
                      </button>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
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
              className="img-thumbnail img-sm"
              src={"images/items/" + id + ".jpg"}
              alt="Trip"
            />
          </div>
          <figcaption className="media-body">
            <h6 className="h6">{title}</h6>
            <dl className="dlist-inline small">
              <dt>Start: </dt>
              <dd>{startTrip}</dd>
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
      <td className="text-center">
        <button className="btn btn-outline-success">
          <i className="fa fa-heart"></i>
        </button>
      </td>
      <td className="text-wrap">{description}</td>
      <td className="text-right">
        <button
          className="btn btn-outline-danger"
          onClick={() => dispatch({ type: "deleteItem", id: props.item.id })}
        >
          Delete Trip
        </button>
      </td>
    </tr>
  );
}
