import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

const ProductCard = ({ plant }) => {
  const dispatch = useDispatch();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart(plant));
    setAdded(true);
  };

  return (
    <div>
      <img src={plant.thumbnail} alt={plant.name} />
      <h3>{plant.name}</h3>
      <p>${plant.price}</p>
      <button onClick={handleAddToCart} disabled={added}>
        {added ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductCard;
