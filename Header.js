import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <header>
      <nav>
        <Link to="/">Products</Link>
        <Link to="/cart">Cart ({totalQuantity})</Link>
      </nav>
    </header>
  );
};

export default Header;