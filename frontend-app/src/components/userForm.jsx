import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class UserForm extends Form {
  state = {};
  render() {
    return (
      <div>
        User form
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Name")}
        </form>
      </div>
    );
  }
}

export default UserForm;
