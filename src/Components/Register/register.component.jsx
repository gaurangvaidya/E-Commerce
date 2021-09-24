import React from "react";
import "./register.styles.scss";

import { TextField } from "@mui/material";

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

  handleChange = (event) => {

  }

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
        </form>
      </div>
    );
  }
}
export default Register;
