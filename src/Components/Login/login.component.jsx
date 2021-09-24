import React from "react";
import "./login.styles.scss";
import { TextField } from '@mui/material';
import CustomButton from "../CustomButtom/custom-button.component";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'email':'',
            'password':''
        }

    }


    handleSubmit = (event) => {
        event.preventDefault();

        
        
    }
    handleChange = (event) => {
        
        const {name,value} = event.target;
        this.setState({[name]:value});

    }


    render() {
        return (
            <div className="login-container">
              <h2 className="login-title">I already have an account</h2>
              <span className="login-subtitle">Sign in with your email and password</span>
              <form className="form-container" onSubmit={this.handleSubmit}>
        
                    <TextField
                        label="Email"
                        variant="standard"
                        name="email"
                        type="email"
                        onChange={this.handleChange}
                        style={{width:'40%'}}
                    />

                    <TextField
                        label="Password"
                        variant="standard"
                        name="password"
                        type="password"
                        onChange={this.handleChange}
                        style={{width:'40%'}}
                    />


                    <div className="login-button-container">

                        <CustomButton type="submit">Login</CustomButton>
                        <CustomButton>Sign In With Google</CustomButton>

                    </div>


        
              </form>
            </div>
          );
    }

}

export default Login;
