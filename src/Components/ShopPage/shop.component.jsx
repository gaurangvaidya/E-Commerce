import React from "react";
import CollectionPreview from "../CollectionPreview/collection-preview.component";

import ShopData from "./shop.data";
import "./shop.styles.scss";
class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: ShopData,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-container">
        <h1>Collections</h1>
        <CollectionPreview collections={collections}/>
      </div>
    );
  }
}

export default Shop;
