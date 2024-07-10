
// // import React from 'react';
// // import { useSelector, useDispatch } from 'react-redux';
// // import { removeItem, updateQuantity } from './CreatSlice'; // Ajustează calea dacă este necesar
// // import './CartItem.css'; // Importăm fișierul CSS

// // const CartItem = ({ goToProductList }) => { // Adăugăm prop pentru a schimba pagina
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
// //     return item.quantity * (item.cost || 0); // Asigurăm că costul este definit
// //   };

// //   const calculateTotalAmount = () => {
// //     return items.reduce((total, item) => total + calculateSubtotal(item), 0);
// //   };

// //   const handleCheckoutShopping = () => {
// //     alert('Functionality to be added for future reference');
// //   };

// //   return (
// //     <div className="cart-item">
// //       <h2>Shopping Cart</h2>
// //       {items.length === 0 ? (
// //         <p>Your cart is empty.</p>
// //       ) : (
// //         <div>
// //           {items.map((item, index) => (
// //             <div key={index} className="item">
// //               <img src={item.image} alt={item.name} />
// //               <span>{item.name}</span>
// //               <div>
// //                 <button onClick={() => handleIncrement(item.name)}>+</button>
// //                 <span>{item.quantity}</span>
// //                 <button onClick={() => handleDecrement(item.name)}>-</button>
// //               </div>
// //               <span>${calculateSubtotal(item)}</span>
// //               <button onClick={() => handleRemove(item.name)}>Delete</button>
// //             </div>
// //           ))}
// //           <div className="total">
// //             <span>Total: ${calculateTotalAmount()}</span>
// //           </div>
// //           <button onClick={handleCheckoutShopping}>Checkout</button>
// //           <button onClick={goToProductList}>Continue Shopping</button>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default CartItem;

// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { removeItem, updateQuantity } from './CreatSlice'; // Ajustează calea dacă este necesar
// import './CartItem.css'; // Importăm fișierul CSS

// const CartItem = ({ goToProductList }) => { // Adăugăm prop pentru a schimba pagina
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
//     return item.quantity * (item.cost || 0); // Asigurăm că costul este definit
//   };

//   const calculateTotalAmount = () => {
//     return items.reduce((total, item) => total + calculateSubtotal(item), 0);
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
//               <img src={item.image} alt={item.name} />
//               <span>{item.name}</span>
//               <div>
//                 <button onClick={() => handleIncrement(item.name)}>+</button>
//                 <span>{item.quantity}</span>
//                 <button onClick={() => handleDecrement(item.name)}>-</button>
//               </div>
//               <span>${calculateSubtotal(item)}</span>
//               <button onClick={() => handleRemove(item.name)}>Delete</button>
//             </div>
//           ))}
//           <div className="total">
//             <span>Total: ${calculateTotalAmount()}</span>
//           </div>
//           <button onClick={handleCheckoutShopping}>Checkout</button>
//           <button onClick={goToProductList}>Continue Shopping</button> {/* Butonul pentru a reveni la lista de produse */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CartItem;

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
    <div>
      {/* Replicăm codul pentru navbar din ProductList.jsx */}
      <div className="navbar" style={{
        backgroundColor: '#4CAF50',
        color: '#fff!important',
        padding: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignIems: 'center',
        fontSize: '20px',
      }}>
        <div className="tag">
          <div className="luxury">
            <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="" />
            <div onClick={goToProductList}  style={{marginLeft:"5px"}}>
              <h3 style={{ color: 'white' }}>Paradise Nursery</h3>
              <i style={{ color: 'white' }}>Where Green Meets Serenity</i>
            </div>
          </div>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '1100px',
        }}>
          <div><a onClick={goToProductList} style={{
            color: 'white',
            fontSize: '30px',
            textDecoration: 'none',
          }}>Plants</a></div>
          <div><a href="#" style={{
            color: 'white',
            fontSize: '30px',
            textDecoration: 'none',
          }}>
            <h1 className='cart'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="68" width="68">
                <rect width="156" height="156" fill="none"></rect>
                <circle cx="80" cy="216" r="12"></circle>
                <circle cx="184" cy="216" r="12"></circle>
                <path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="#faf9f9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" id="mainIconPathAttribute"></path>
              </svg>
              <span className="cart_quantity_count">{items.length}</span> {/* Modificăm pentru a afișa numărul de elemente din coș */}
            </h1>
          </a></div>
        </div>
      </div>

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
                <button onClick={() => handleRemove(item.name)}>Delete</button>
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
    </div>
  );
};

export default CartItem;
