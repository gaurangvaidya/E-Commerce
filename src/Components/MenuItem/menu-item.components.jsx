import React from "react";
import "./menu-item.styles.scss";

const MenuItem = ({ title,imageUrl }) => {
  return (
    <div  className="menu-item-container">
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

export default MenuItem;
