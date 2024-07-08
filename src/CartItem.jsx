// CartItem.jsx

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CreateSlice'; // Importăm acțiunile necesare

const CartItem = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);

  const handleIncrement = (name) => {
    const itemToUpdate = items.find(item => item.name === name);
    if (itemToUpdate) {
      dispatch(updateQuantity({ name, quantity: itemToUpdate.quantity + 1 }));
    }
  };

  const handleDecrement = (name) => {
    const itemToUpdate = items.find(item => item.name === name);
    if (itemToUpdate) {
      if (itemToUpdate.quantity > 1) {
        dispatch(updateQuantity({ name, quantity: itemToUpdate.quantity - 1 }));
      } else {
        dispatch(removeItem(name));
      }
    }
  };

  const handleRemove = (name) => {
    dispatch(removeItem(name));
  };

  const calculateSubtotal = (item) => {
    return item.quantity * item.cost;
  };

  const calculateTotalAmount = () => {
    return items.reduce((total, item) => total + calculateSubtotal(item), 0);
  };

  return (
    <div className="cart-item">
      {items.map((item, index) => (
        <div key={index} className="item">
          <span>{item.name}</span>
          <button onClick={() => handleIncrement(item.name)}>+</button>
          <span>{item.quantity}</span>
          <button onClick={() => handleDecrement(item.name)}>-</button>
          <span>${calculateSubtotal(item)}</span>
          <button onClick={() => handleRemove(item.name)}>Remove</button>
        </div>
      ))}
      <div className="total">
        <span>Total: ${calculateTotalAmount()}</span>
      </div>
    </div>
  );
};

export default CartItem;
