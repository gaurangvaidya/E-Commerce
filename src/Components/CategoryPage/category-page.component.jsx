import React from "react";
import "./category-page.styles.scss";
import { connect } from "react-redux";
import { selectCollection } from "../../Redux/collection/collection.selector";
import CollectionIndividualItem from '../CollectionIndividualItem/collection-individual.component';
import { createStructuredSelector } from "reselect";


const CategoryPage = ({ match,collections }) => {
  
    console.log(collections);
    console.log(match);

  return (
    <div className="category-container">
      <div className="category-header">
        <h1>{match.params.category}</h1>
      </div>

      <div className="category-collection-item-container">
        {
          collections.items.map((item)=>{
            return(
              <CollectionIndividualItem key={item.id} item={item} />
            );
            
          })
        }

      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    collections: selectCollection(ownProps.match.params.category)(state),
  };
};



export default connect(mapStateToProps)(CategoryPage);
