import React from "react";
import "./collection-individual.styles.scss";
import CustomButton from "../CustomButtom/custom-button.component";
import { connect } from "react-redux";
import { addItemToCart } from "../../Redux/cart/cart.action";
const CollectionIndividualItem = ({item,addItemToCart}) => {
  const { imageUrl, name, price } = item;
  return (
    <div className="shop-individual-item-container">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="shop-individual-item-footer">
        <span className="individual-footer-item-name">{name}</span>
        <span className="individual-footer-item-price">${price}</span>
      </div>
      <CustomButton inverted onClick={() => addItemToCart(item)}>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (item) => dispatch(addItemToCart(item)),
  };
};

export default connect(null, mapDispatchToProps)(CollectionIndividualItem);
