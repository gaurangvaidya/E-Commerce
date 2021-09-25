import React from 'react'
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { connect } from 'react-redux';
import './topbar.styles.scss';
const Topbar = ({currentUser}) => {
    const signOut = () => {

    }
    return(
        <div className="topbar">

        <Link to="/">
            <Logo/>
        </Link>

        <div className="option-container">

            <Link  to="/shop">Shop</Link>
            <Link to="/contact">Contact</Link>
            {
                currentUser?<div className="sign-out-button" onClick={signOut}>
                Sign Out

                </div> : <Link to="/signin">SignIn</Link>
            }
           
          


        </div>

          



        </div>
    );
}

const mapStateToProps = state => {
    return ({
        "currentUser":state.user.currentUser
    })
}

export default connect(mapStateToProps)(Topbar);