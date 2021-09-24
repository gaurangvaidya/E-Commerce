import React from 'react'
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './topbar.styles.scss';
const Topbar = () => {
    return(
        <div className="topbar">

        <Link to="/">
            <Logo/>
        </Link>

        <div className="option-container">

            <Link  to="/shop">Shop</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/signin">SignIn</Link>
          


        </div>

          



        </div>
    );
}


export default Topbar;