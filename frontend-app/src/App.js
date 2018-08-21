import React, { Component } from "react";
import Users from "./components/users";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <main className="container">
          <Users />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
