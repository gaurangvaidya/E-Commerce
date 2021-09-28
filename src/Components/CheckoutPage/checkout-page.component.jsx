import React from "react";
import "./checkout-page.styles.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { createStructuredSelector } from "reselect";
import { selectTotalPrice } from "../../Redux/cart/cart.selectors";
import { connect } from "react-redux";
import { selectCartItems } from "../../Redux/cart/cart.selectors";
import { removeItemFromCart,reduceItemFromCart,addItemToCart } from "../../Redux/cart/cart.action";
import StripeButton from "../StripeButton/stripe-button.component";

const CheckoutPage = ({ totalPrice, cartItems, removeItemFromCart ,addItemToCart, reduceItemFromCart}) => {
  return (
    <div className="checkout-container">
      <Table sx={{ fontSize: "100" }}>
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Remove</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {cartItems.map((cartItem) => (
            <TableRow key={cartItem.id}>
              <TableCell>
                <img src={cartItem.imageUrl} />
              </TableCell>
              <TableCell>
                <span>{cartItem.name}</span>
              </TableCell>
              <TableCell>
                <div className="quantity-arrows">
                  <span className="arrow" onClick={()=>reduceItemFromCart(cartItem)}>&#x25C2;</span>
                  <span>{cartItem.quantity}</span>
                  <span className="arrow" onClick={()=>addItemToCart(cartItem)}>&#x25B8;</span>
                </div>
              </TableCell>
              <TableCell>
                <span>{cartItem.price}</span>
              </TableCell>
              <TableCell>
                <span
                  className="remove-button"
                  onClick={() => removeItemFromCart(cartItem)}
                >
                  &#10005;
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="total-price">
        <span>Total:${totalPrice}</span>
      </div>

      <StripeButton price={totalPrice}></StripeButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeItemFromCart: (item) => dispatch(removeItemFromCart(item)),
    reduceItemFromCart : (item) => dispatch(reduceItemFromCart(item)),
    addItemToCart: (item) => dispatch(addItemToCart(item))
  };
};
const mapStateToProps = createStructuredSelector({
  totalPrice: selectTotalPrice,
  cartItems: selectCartItems,
});
export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
