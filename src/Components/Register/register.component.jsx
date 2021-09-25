import React from "react";
import "./register.styles.scss";

import { TextField } from "@mui/material";
import CustomButton from "../CustomButtom/custom-button.component";

class Register extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleChange = (event) => {};

  render() {
    return (
      <div className="register-container">
        <h2 className="register-title">I do not have an account</h2>
        <span className="register-subtitle">
          Sign up with email and password
        </span>

        <form className="register-form-container">
          <TextField
            label="Display Name"
            variant="standard"
            name="displayName"
            type="text"
            onChange={this.handleChange}
            style={{ width: "40%" }}
          />

          <TextField
            label="Email"
            variant="standard"
            name="email"
            type="email"
            onChange={this.handleChange}
            style={{ width: "40%" }}
          />

          <TextField
            label="Password"
            variant="standard"
            name="password"
            type="password"
            onChange={this.handleChange}
            style={{ width: "40%" }}
          />
          <TextField
            label="Confirm Password"
            variant="standard"
            name="confirmPassword"
            type="password"
            onChange={this.handleChange}
            style={{ width: "40%" }}
          />
          <div className="register-button-container">
            <CustomButton type="submit">Submit</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
export default Register;
