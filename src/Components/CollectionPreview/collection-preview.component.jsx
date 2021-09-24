import React from 'react'
import CollectionItem from '../CollectionItem/collection-item.component';
import './collection-preview.styles.scss';

const CollectionPreview = ({collections}) => {
    return(
        <div className="section-container">{
            collections.map(({id,...rest})=>(

                <CollectionItem key={id} {...rest}/>
           
            ))
          }</div>
    );
}

export default CollectionPreview;