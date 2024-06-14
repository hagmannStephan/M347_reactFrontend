import React from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


export default function RootFile() {

    const handleClick = () => {
        navigate('/trips');
      };
  return (
<div>
    <div className="rootFilePath">
        <h1>Business Trips and Wishlist!</h1>
    </div>
    <div className="rootFilePath buttons">
        <button className="btnReal btn-trips" onClick={handleClick}>Trips</button>
        <button className="btnReal btn-wishlist">Wishlist</button>
    </div>
</div>
  );
}