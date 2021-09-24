import React from 'react';
import Login from '../Login/login.component';
import Register from '../Register/register.component';
import './sign-in.styles.scss';


const SignIn = () => {
    return(
        <div className="signin-container">

            <Login/>
            <Register/>


        </div>
    );
}


export default SignIn;