import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { connect } from "react-redux";
import "./topbar.styles.scss";
import { setCurrentUser } from "../../Redux/user/user.action";
import CartIcon from "../CartIcon/cart-icon.component";
import CartDropdown from "../CartDropdown/cart-dropdown.component";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../Redux/user/user.selectors";
import { selectHidden } from "../../Redux/cart/cart.selectors";
const Topbar = ({ currentUser, setCurrentUser, hidden }) => {
  const signOut = () => {
    setCurrentUser(null);
  };
  return (
    <div className="topbar">
      <Link to="/">
        <Logo />
      </Link>

      <div className="option-container">
        <Link to="/shop">Shop</Link>
        <Link to="/contact">Contact</Link>
        {currentUser ? (
          <div className="sign-out-button" onClick={signOut}>
            Sign Out
          </div>
        ) : (
          <Link to="/signin">SignIn</Link>
        )}

        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser,
  hidden:selectHidden
})

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Topbar);
