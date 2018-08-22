import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class UserForm extends Form {
  state = {
    data: {
      username: "",
      email: ""
    },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    email: Joi.string()
      .required()
      .email()
      .label("Email")
  };

  render() {
    return (
      <div>
        <h1>User form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Name")}
          {this.renderInput("email", "Email")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default UserForm;
