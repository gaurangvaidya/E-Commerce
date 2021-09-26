import React from "react";
import "./cart-item.styles.scss";

const CartItem = ({item:{ id, name, imageUrl, price, quantity }}) => {
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt="image" />
      <div className="cart-item-details">
        <span className="cart-item-name">{name}</span>
        <span className="cart-item-price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
