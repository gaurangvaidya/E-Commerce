import React from "react";
import CustomButton from "../CustomButtom/custom-button.component";
import "./cart-dropdown.styles.scss";
import { connect } from 'react-redux';
import CartItem from "../CartItem/cart-item.component";

const CartDropdown = ({cartItems}) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">

      {
        cartItems.map((cartItem)=>{
          return(
            <CartItem key={cartItem.id} item={cartItem}/>
          );
        })
      }

      </div>
      <CustomButton>Go To Checkout</CustomButton>
    </div>
  );
};

const mapPropsToState = ({cart}) =>{
  return({
    cartItems:cart.cartItems
  })
}
export default connect(mapPropsToState)(CartDropdown);