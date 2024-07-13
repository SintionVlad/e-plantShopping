// // import React from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { removeItem, updateQuantity } from './CreatSlice';
// // import './CartItem.css';
// // import './ProductList.css'; // Importăm stilurile pentru ProductList

// // const CartItem = ({ goToProductList }) => {
// //   const dispatch = useDispatch();
// //   const items = useSelector(state => state.cart.items);

// //   const handleIncrement = (name) => {
// //     const itemToUpdate = items.find(item => item.name === name);
// //     if (itemToUpdate) {
// //       dispatch(updateQuantity({ name, quantity: itemToUpdate.quantity + 1 }));
// //     }
// //   };

// //   const handleDecrement = (name) => {
// //     const itemToUpdate = items.find(item => item.name === name);
// //     if (itemToUpdate) {
// //       if (itemToUpdate.quantity > 1) {
// //         dispatch(updateQuantity({ name, quantity: itemToUpdate.quantity - 1 }));
// //       } else {
// //         dispatch(removeItem(name));
// //       }
// //     }
// //   };

// //   const handleRemove = (name) => {
// //     dispatch(removeItem(name));
// //   };

// //   const calculateSubtotal = (item) => {
// //     return item.quantity * (parseFloat(item.cost.replace('$', '')) || 0);
// //   };

// //   const calculateTotalAmount = () => {
// //     return items.reduce((total, item) => total + calculateSubtotal(item), 0).toFixed(2);
// //   };

// //   const handleCheckoutShopping = () => {
// //     alert('Functionality to be added for future reference');
// //   };

// //   const navbar = (
// //     <div className="navbar">
// //       <div className="tag">
// //         <div className="luxury">
// //           <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="" />
// //           <div style={{ marginLeft: "30px" }}>
// //             <h3 style={{ color: 'white' }}>Paradise Nursery</h3>
// //             <i style={{ color: 'white' }}>Where Green Meets Serenity</i>
// //           </div>
// //         </div>
// //       </div>
// //       <a onClick={goToProductList}
// //         style={{
// //           color: 'white',
// //           fontSize: '30px',
// //           textDecoration: 'none',
// //           // paddingRight: '22%',
// //         }}>
// //         Plants
// //       </a>
// //       <div className="menu">
// //         <a href="#" style={{ color: 'white', fontSize: '30px', textDecoration: 'none' }}>
// //           <h1 className='cart'>
// //             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="68" width="68">
// //               <rect width="156" height="156" fill="none"></rect>
// //               <circle cx="80" cy="216" r="12"></circle>
// //               <circle cx="184" cy="216" r="12"></circle>
// //               <path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="#faf9f9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" id="mainIconPathAttribute"></path>
// //             </svg>
// //             <span className="cart_quantity_count">0</span> {/* Static cart count */}
// //           </h1>
// //         </a>
// //       </div>
// //     </div>
// //   );

// //   return (
// //     <div>
// //       {navbar} {/* Afișăm navbar-ul */}
// //       <div className="cart-item">
// //         <h2>Shopping Cart</h2>
// //         {items.length === 0 ? (
// //           <p>Your cart is empty.</p>
// //         ) : (
// //           <div>
// //             {items.map((item, index) => (
// //               <div key={index} className="item">
// //                 <div className="item-details">
// //                   <div>
// //                     <span className="item-name">{item.name}</span>
// //                     <span className="item-price">${item.cost}</span>
// //                   </div>
// //                   <div className="button-row">
// //                     <button className="decrement-button" onClick={() => handleDecrement(item.name)}>-</button>
// //                     <span>{item.quantity}</span>
// //                     <button className="increment-button" onClick={() => handleIncrement(item.name)}>+</button>
// //                   </div>
// //                   <div className="item-subtotal">
// //                     Subtotal: ${calculateSubtotal(item).toFixed(2)}
// //                   </div>
// //                   <button className="delete-button" onClick={() => handleRemove(item.name)}>Delete</button>
// //                 </div>
// //                 <div className="item-thumbnail">
// //                   <img src={item.image} alt={item.name} />
// //                 </div>
// //               </div>
// //             ))}
// //             <div className="totals">
// //               <div className="total-items">
// //                 <span>Total Items: {items.reduce((total, item) => total + item.quantity, 0)}</span>
// //               </div>
// //               <div className="total-amount">
// //                 <span>Total Amount: ${calculateTotalAmount()}</span>
// //               </div>
// //             </div>
// //             <div className="button-container">
// //               <button className="continue-shopping-button" onClick={goToProductList}>Continue Shopping</button>
// //               <button className="checkout-button" onClick={handleCheckoutShopping}>Checkout</button>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default CartItem;


// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { removeItem, updateQuantity } from './CreatSlice';
// import './CartItem.css';
// import './ProductList.css'; // Importăm stilurile pentru ProductList

// const CartItem = ({ goToProductList }) => {
//   const dispatch = useDispatch();
//   const items = useSelector(state => state.cart.items);

//   const handleIncrement = (name) => {
//     const itemToUpdate = items.find(item => item.name === name);
//     if (itemToUpdate) {
//       dispatch(updateQuantity({ name, quantity: itemToUpdate.quantity + 1 }));
//     }
//   };

//   const handleDecrement = (name) => {
//     const itemToUpdate = items.find(item => item.name === name);
//     if (itemToUpdate) {
//       if (itemToUpdate.quantity > 1) {
//         dispatch(updateQuantity({ name, quantity: itemToUpdate.quantity - 1 }));
//       } else {
//         dispatch(removeItem(name));
//       }
//     }
//   };

//   const handleRemove = (name) => {
//     dispatch(removeItem(name));
//   };

//   const calculateSubtotal = (item) => {
//     return item.quantity * (parseFloat(item.cost.replace('$', '')) || 0);
//   };

//   const calculateTotalAmount = () => {
//     return items.reduce((total, item) => total + calculateSubtotal(item), 0).toFixed(2);
//   };

//   const handleCheckoutShopping = () => {
//     alert('Functionality to be added for future reference');
//   };

//   return (
//     <div className="cart-item">
//       <h2>Shopping Cart</h2>
//       {items.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <div>
//           {items.map((item, index) => (
//             <div key={index} className="item">
//               <div className="item-details">
//                 <div>
//                   <span className="item-name">{item.name}</span>
//                   <span className="item-price">${item.cost}</span>
//                 </div>
//                 <div className="button-row">
//                   <button className="decrement-button" onClick={() => handleDecrement(item.name)}>-</button>
//                   <span>{item.quantity}</span>
//                   <button className="increment-button" onClick={() => handleIncrement(item.name)}>+</button>
//                 </div>
//                 <div className="item-subtotal">
//                   Subtotal: ${calculateSubtotal(item).toFixed(2)}
//                 </div>
//                 <button className="delete-button" onClick={() => handleRemove(item.name)}>Delete</button>
//               </div>
//               <div className="item-thumbnail">
//                 <img src={item.image} alt={item.name} />
//               </div>
//             </div>
//           ))}
//           <div className="totals">
//             <div className="total-items">
//               <span>Total Items: {items.reduce((total, item) => total + item.quantity, 0)}</span>
//             </div>
//             <div className="total-amount">
//               <span>Total Amount: ${calculateTotalAmount()}</span>
//             </div>
//           </div>
//           <div className="button-container">
//             <button className="continue-shopping-button" onClick={goToProductList}>Continue Shopping</button>
//             <button className="checkout-button" onClick={handleCheckoutShopping}>Checkout</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CartItem;




import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CreatSlice';
import './CartItem.css';
import './ProductList.css'; // Importăm stilurile pentru ProductList

const CartItem = ({ goToProductList }) => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);

  // Funcție pentru a incrementa cantitatea unui produs din coș
  const handleIncrement = (name) => {
    const itemToUpdate = items.find(item => item.name === name);
    if (itemToUpdate) {
      dispatch(updateQuantity({ name, quantity: itemToUpdate.quantity + 1 }));
    }
  };

  // Funcție pentru a decrementa cantitatea unui produs din coș
  const handleDecrement = (name) => {
    const itemToUpdate = items.find(item => item.name === name);
    if (itemToUpdate) {
      if (itemToUpdate.quantity > 1) {
        dispatch(updateQuantity({ name, quantity: itemToUpdate.quantity - 1 }));
      } else {
        dispatch(removeItem(name)); // Dacă cantitatea este 1, eliminăm complet elementul din coș
      }
    }
  };

  // Funcție pentru a elimina complet un produs din coș
  const handleRemove = (name) => {
    dispatch(removeItem(name));
  };

  // Funcție pentru a calcula subtotalul pentru un element din coș
  const calculateSubtotal = (item) => {
    return item.quantity * (parseFloat(item.cost.replace('$', '')) || 0);
  };

  // Funcție pentru a calcula suma totală a tuturor elementelor din coș
  const calculateTotalAmount = () => {
    return items.reduce((total, item) => total + calculateSubtotal(item), 0).toFixed(2);
  };

  // Funcție apelată la checkout (momentan doar un mesaj de alertă)
  const handleCheckoutShopping = () => {
    alert('Funcționalitatea va fi adăugată în viitor!');
  };

  // Randare componentă
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
