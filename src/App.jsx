import React, { useReducer } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./Products";
import { Routes, Route } from "react-router-dom";
import Detail from "./Detail";
import Cart from "./Cart";
import Checkout from "./Checkout";
import TripList from "./components/TripList";
import Wishlist from "./components/Wishlist";
import tripsReducer from "./components/tripsReducer";
import RootFile from "./components/RootFile";

export default function App() {
  const [wishlist, dispatch] = useReducer(tripsReducer, []);
  return (
    <>
      <Header />
      <div className="content">
        <main>
          <Routes>
            <Route
              path="/"
              element={<RootFile/>}
            />
            <Route path="/:category" element={<Products />} />
            <Route path="/:category/:id" element={<Detail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/trips" element={<TripList dispatch={dispatch} />} />
            <Route
              path="/wishlist"
              element={<Wishlist wishlist={wishlist} dispatch={dispatch} />}
            />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}
