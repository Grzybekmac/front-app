import React, { Component } from "react";
import UsersTable from "./usersTable";

class Users extends Component {
  state = {
    users: [],
    sortColumn: { path: "username", order: "asc" }
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  render() {
    return (
      <UsersTable
        users={this.state.users}
        sortColumn={this.state.sortColumn}
        onDelete={this.handleDelete}
        onSort={this.handleSort}
      />
    );
  }
}

export default Users;
