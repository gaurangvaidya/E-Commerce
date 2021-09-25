import React from "react";
import "./login.styles.scss";
import { TextField } from '@mui/material';
import CustomButton from "../CustomButtom/custom-button.component";
import {setCurrentUser} from '../../Redux/user/user.action';
import { connect } from "react-redux";

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

        const { setCurrentUser } = this.props;
        const {email,password} = this.state;

        if(email==='gaurang@gmail.com' && password==='1234') {

            setCurrentUser({email});

        }
    

        
        
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

const mapDispatchToProps = dispatch => {
    return (
        {
            setCurrentUser:user=>dispatch(setCurrentUser(user))
        }
    )

}

export default connect(null,mapDispatchToProps)(Login);
