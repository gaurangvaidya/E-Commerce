import React from "react";
import CollectionPreview from "../CollectionPreview/collection-preview.component";
import { connect } from "react-redux";
import "./shop.styles.scss";

class Shop extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="shop-container">
          <CollectionPreview collections={this.props.collections}/>       
      </div>
    );
  }
}

const mapStateToProps = ({ collections }) => {
  return {
    collections: collections,
  };
};
export default connect(mapStateToProps)(Shop);
