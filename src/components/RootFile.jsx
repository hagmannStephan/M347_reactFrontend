import React from "react";
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
    <div className="rootFilePath">
      <p className="description">Welcome to our Business Trips Application! Designed for professionals, our platform simplifies every aspect of business travel. Book flights, reserve hotels, and organize itineraries with ease. Our mission is to streamline your travel experience, allowing you to focus on achieving your business goals. We prioritize efficiency, transparency, and sustainability, ensuring that your trips are not only seamless but also aligned with your company's values. Embrace hassle-free travel and elevate your business endeavors with our comprehensive travel management solution.</p>
    </div>
</div>
  );
}