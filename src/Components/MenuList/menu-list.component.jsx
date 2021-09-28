import React from "react";
import MenuItem from "../MenuItem/menu-item.components";
import "./menu-list.styles.scss";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from '../../Redux/directory/directory.selectors'
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class MenuList extends React.Component {
  

  render() {
    return (
      <div className="item-container">
        {this.props.sections.map(({id,...otherProps}) => (
          <MenuItem key={id} {...otherProps} onClick={()=><Redirect to={`/${otherProps.linkUrl}`}/>} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  'sections':selectDirectorySections
})
export default connect(mapStateToProps)(MenuList);
