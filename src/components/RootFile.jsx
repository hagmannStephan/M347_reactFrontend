import React from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


export default function RootFile() {
    const navigate = useNavigate();

    const handleClickTrip = () => {
        navigate('/trips');
      };

    const handleClickWishlist = () => {
        navigate('/wishlist')
    }
  return (
<div>
    <div className="rootFilePath">
        <h1>Business Trips and Wishlist!</h1>
    </div>
    <div className="rootFilePath buttons">
        <button className="btnReal btn-trips" onClick={handleClickTrip}>Trips</button>
        <button className="btnReal btn-wishlist" onClick={handleClickWishlist}>Wishlist</button>
    </div>
</div>
  );
}