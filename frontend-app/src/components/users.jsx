import React, { Component } from "react";
import UsersTable from "./usersTable";

class Users extends Component {
  state = {
    users: [{ id: 1, username: "abc", email: "abc@pl" }],
    sortColumn: { path: "username", order: "asc" }
  };

  componentDidMount() {
    const users = [];
    this.setState(users);
  }

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  handleDelete = user => {
    console.log(user.id);
  };

  render() {
    const { length: count } = this.state.users;

    if (count === 0) return <p>There are no users</p>;

    return (
      <div style={{ marginTop: 20 }}>
        <p>Showing {count} users in the database.</p>
        <UsersTable
          users={this.state.users}
          sortColumn={this.state.sortColumn}
          onDelete={this.handleDelete}
          onSort={this.handleSort}
        />
      </div>
    );
  }
}

export default Users;
