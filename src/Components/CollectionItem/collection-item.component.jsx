import React from 'react'

import './collection-item.styles.scss';

const CollectionItem = ({items,title}) => {
    return(

        <div className="shop-item-container">
        <h2>{title}</h2>
        <div className="item-image-row">
        {
          items
          .filter((val,idx)=>(idx<4))
          .map(({id,name,imageUrl,price})=>(
            
            <div className="shop-individual-item-container">
               <div className="image" style={{backgroundImage:`url(${imageUrl})`}}/>
               <div className="shop-individual-item-footer">

                <span className="individual-footer-item-name">{name}</span>
                <span className="individual-footer-item-price">${price}</span>

               </div>
            </div>
            
           
            
          ))
        }

        </div>
        
        
      

      </div>

    );
}


export default CollectionItem;