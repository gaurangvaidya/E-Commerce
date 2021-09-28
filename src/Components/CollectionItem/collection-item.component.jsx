import React from "react";
import "./collection-item.styles.scss";
import CollectionIndividualItem from "../CollectionIndividualItem/collection-individual.component";
import { Link } from "react-router-dom";

const CollectionItem = ({ items, title, addItemToCart,routeName }) => {
  return (
    <div className="shop-item-container">
      <Link to={`/shop/${routeName}`}>
        <h1>{title}</h1>
      </Link>
      <div className="item-image-row">
        {items
          .filter((val, idx) => idx < 4)
          .map((item) => {
            

            return (
              <CollectionIndividualItem key={item.id} item={item} />
            );
          })}
      </div>
    </div>
  );
};



export default CollectionItem;
