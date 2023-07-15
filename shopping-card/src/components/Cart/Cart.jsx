import React, { useContext } from 'react';

import CartItem from '../CartItem/CartItem';
import AppContext from '../../context/AppContex';
import './Cart.css';
import formatCurrency from '../../utils/formatCurrency';

export default function Cart() {
  const {cartItems, isCartVisible} = useContext(AppContext);

  const totalPrice = cartItems.reduce((acc, item) => item.price + acc, 0);

  return (
    <section className={`Cart ${isCartVisible ? 'cart-active' : ''}`}>
      <div className="cart-items">
        {cartItems.map((cartItem) => <CartItem key={cartItem.id} data={cartItem} />)}

      </div>

      <div className="cart-resume">{formatCurrency(totalPrice, 'BRL')}</div>
    </section>
  );
}
