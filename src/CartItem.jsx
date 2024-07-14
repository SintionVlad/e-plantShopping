import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CreatSlice';
import './CartItem.css';
import './ProductList.css'; // Importăm stilurile pentru ProductList

const CartItem = ({ goToProductList }) => {
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
    return item.quantity * (parseFloat(item.cost.replace('$', '')) || 0);
  };

  const calculateTotalAmount = () => {
    return items.reduce((total, item) => total + calculateSubtotal(item), 0).toFixed(2);
  };

  const handleCheckoutShopping = () => {
    alert('Funcționalitatea va fi adăugată în viitor!');
  };

  return (
    <div className="cart-item">
      <h2>Shopping Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {items.map((item, index) => (
            <div key={index} className="item">
              <div className="item-details">
                <div>
                  <span className="item-name">{item.name}</span>
                  <span className="item-price">${item.cost}</span>
                </div>
                <div className="button-row">
                  <button className="decrement-button" onClick={() => handleDecrement(item.name)}>-</button>
                  <span>{item.quantity}</span>
                  <button className="increment-button" onClick={() => handleIncrement(item.name)}>+</button>
                </div>
                <div className="item-subtotal">
                  Subtotal: ${calculateSubtotal(item).toFixed(2)}
                </div>
                <button className="delete-button" onClick={() => handleRemove(item.name)}>Delete</button>
              </div>
              <div className="item-thumbnail">
                <img src={item.image} alt={item.name} />
              </div>
            </div>
          ))}
          <div className="totals">
            <div className="total-items">
              <span>Total Items: {items.reduce((total, item) => total + item.quantity, 0)}</span>
            </div>
            <div className="total-amount">
              <span>Total Amount: ${calculateTotalAmount()}</span>
            </div>
          </div>
          <div className="button-container">
            <button className="continue-shopping-button" onClick={goToProductList}>Continue Shopping</button>
            <button className="checkout-button" onClick={handleCheckoutShopping}>Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItem;
