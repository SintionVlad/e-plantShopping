import React from 'react';

import CartItem from './CartItem';

const CartPage = ({ goToProductList }) => {
  return (
    <div>
   
      <div className="page-content">
        <CartItem goToProductList={goToProductList} />
      </div>
    </div>
  );
};

export default CartPage;
