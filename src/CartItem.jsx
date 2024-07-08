// CartItem.jsx

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CreatSlice'; // Adjust the path

const CartItem = ({ name, image, cost, quantity }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeItem(name));
  };

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    dispatch(updateQuantity({ name, quantity: newQuantity }));
  };

  return (
    <div className="cart-item">
      <img src={image} alt={name} />
      <div>{name}</div>
      <div>${cost}</div>
      <div>
        <input type="number" value={quantity} onChange={handleQuantityChange} />
      </div>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default CartItem;
