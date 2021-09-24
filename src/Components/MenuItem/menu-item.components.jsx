import React from "react";
import { withRouter } from "react-router";
import "./menu-item.styles.scss";

const MenuItem = ({ title,imageUrl,linkUrl,history,match }) => {
  return (
    <div  className="menu-item-container" onClick={()=>history.push(`${match.url}${linkUrl}`)}>
        <div
            className="background-image"
            style={{"backgroundImage":`url(${imageUrl})`}}
        />
      <div className="menu-inner-box">
        <div className="menu-item-header">{title.toUpperCase()}</div>

        <div>SHOP NOW</div>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
