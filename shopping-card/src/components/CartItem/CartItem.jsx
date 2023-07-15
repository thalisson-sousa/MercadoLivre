import React, { useContext } from 'react';
import propTypes from 'prop-types';
import {BsFillCartXFill} from 'react-icons/bs';

import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/AppContex';

import './CartItem.css';

export default function CartItem({data}) {

  const { cartItems, setCartItems } = useContext(AppContext);
  const {id, thumbnail, title, price} = data;

  const handleRemoveItem = () => {
    const updatedItems = cartItems.filter((item) => item.id != id);
    setCartItems(updatedItems);
  };

  return (
    <section className="cart-item">
      <img src={thumbnail} alt="imagem do produto" className="cart-item-img" />
      <div className="cart-item-content">
        <h3 className="cart-item-title">{title}</h3>
        <h3 className="cart-item-price">{formatCurrency(price, 'BRL')}</h3>
        
        <button onClick={ handleRemoveItem } type="button" className="button__remove-item"><BsFillCartXFill/></button>
      </div>
    </section>
  );
}

CartItem.propTypes = {
  data: propTypes.object
}.isRequired;
