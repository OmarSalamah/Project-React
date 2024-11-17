import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity, removeItem } from "../store/cartSlice";

const CartPage = () => {
  const cart = useSelector((state) => state.cart.items);
  const totalCost = useSelector((state) => state.cart.totalCost);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.map((item) => (
        <div key={item.id}>
          <img src={item.thumbnail} alt={item.name} />
          <h3>{item.name}</h3>
          <p>${item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
          <button onClick={() => dispatch(decrementQuantity(item.id))} disabled={item.quantity === 1}>
            -
          </button>
          <button onClick={() => dispatch(removeItem(item.id))}>Remove</button>
        </div>
      ))}
      <h2>Total Cost: ${totalCost}</h2>
      <button>Checkout (Coming Soon)</button>
      <button onClick={() => (window.location.href = "/")}>Continue Shopping</button>
    </div>
  );
};

export default CartPage;

