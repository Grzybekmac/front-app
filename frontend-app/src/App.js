import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Users from "./components/users";
import "./App.css";
import UserForm from "./components/userForm";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <main className="container">
          <Switch>
            <Route path="/users/:id" component={UserForm} />
            <Route path="/users" component={Users} />
            <Redirect from="/" exact to="/users" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
