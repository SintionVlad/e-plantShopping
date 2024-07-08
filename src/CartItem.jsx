
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CreatSlice'; // Ajustează calea dacă este necesar
import './CartItem.css'; // Importăm fișierul CSS

const CartItem = ({ goToProductList }) => { // Adăugăm prop pentru a schimba pagina
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
    return item.quantity * (item.cost || 0); // Asigurăm că costul este definit
  };

  const calculateTotalAmount = () => {
    return items.reduce((total, item) => total + calculateSubtotal(item), 0);
  };

  const handleCheckoutShopping = () => {
    alert('Functionality to be added for future reference');
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
              <img src={item.image} alt={item.name} />
              <span>{item.name}</span>
              <div>
                <button onClick={() => handleIncrement(item.name)}>+</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleDecrement(item.name)}>-</button>
              </div>
              <span>${calculateSubtotal(item)}</span>
              <button onClick={() => handleRemove(item.name)}>Remove</button>
            </div>
          ))}
          <div className="total">
            <span>Total: ${calculateTotalAmount()}</span>
          </div>
          <button onClick={handleCheckoutShopping}>Checkout</button>
          <button onClick={goToProductList}>Continue Shopping</button>
        </div>
      )}
    </div>
  );
};

export default CartItem;
