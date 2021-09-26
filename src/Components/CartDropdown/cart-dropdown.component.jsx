import React from "react";
import CustomButton from "../CustomButtom/custom-button.component";
import "./cart-dropdown.styles.scss";
import { connect } from 'react-redux';
import CartItem from "../CartItem/cart-item.component";
import { withRouter } from "react-router";
import { toggleHiddenCart } from '../../Redux/cart/cart.action'

const CartDropdown = ({cartItems,history,dispatch}) => {

  const redirectTo = () => {
    history.push("/checkout");
    dispatch(toggleHiddenCart());
    
  }
  return (
    <div className="cart-dropdown">
      <div className="cart-items">

      {
        cartItems.length?
        cartItems.map((cartItem)=>{
          return(
            <CartItem key={cartItem.id} item={cartItem}/>
          );
        }):
        <span>The Cart Is Empty</span>
      }

      </div>
      <CustomButton onClick={redirectTo}>Go To Checkout</CustomButton>
    </div>
  );
};

const mapPropsToState = ({cart}) =>{
  return({
    cartItems:cart.cartItems
  })
}
export default withRouter(connect(mapPropsToState)(CartDropdown));