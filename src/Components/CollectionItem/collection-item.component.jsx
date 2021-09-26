import React from "react";
import CustomButton from "../CustomButtom/custom-button.component";
import { addItemToCart } from "../../Redux/cart/cart.action";
import { connect } from "react-redux";
import "./collection-item.styles.scss";

const CollectionItem = ({ items, title, addItemToCart }) => {
  return (
    <div className="shop-item-container">
      <h2>{title}</h2>
      <div className="item-image-row">
        {items
          .filter((val, idx) => idx < 4)
          .map((item) => {
            const { id, name, imageUrl, price } = item;

            return (
              <div  key={id} className="shop-individual-item-container">
                <div
                  className="image"
                  style={{ backgroundImage: `url(${imageUrl})` }}
                />
                <div className="shop-individual-item-footer">
                  <span className="individual-footer-item-name">{name}</span>
                  <span className="individual-footer-item-price">${price}</span>
                </div>
                <CustomButton inverted onClick={() => addItemToCart(item)}>
                  Add to cart
                </CustomButton>
              </div>
            );
          })}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (item) => dispatch(addItemToCart(item)),
  };
};

export default connect(null, mapDispatchToProps)(CollectionItem);
