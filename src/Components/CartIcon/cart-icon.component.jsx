import React from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleHiddenCart } from "../../Redux/cart/cart.action";
import { selectTotalItems } from "../../Redux/cart/cart.selectors";
const CartIcon = ({toggleHiddenCart,itemCount}) => {
  return (
    <div className="cart-icon-container" onClick={toggleHiddenCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleHiddenCart: () => dispatch(toggleHiddenCart()),
  };
};

const mapStateToProps = (state)=> {
  return({
    itemCount:selectTotalItems(state)
  })
}
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
