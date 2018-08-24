import React, { Component } from "react";
import { Link } from "react-router-dom";
import UsersTable from "./usersTable";
import { getUsers, deleteUser } from "../services/userService";

class Users extends Component {
  state = {
    users: [{ id: 1, username: "abc", email: "abc@pl" }],
    sortColumn: { path: "username", order: "asc" }
  };

  async componentDidMount() {
    const { data: users } = await getUsers();
    this.setState({ users });
  }

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  handleDelete = async user => {
    const originalUsers = this.state.users;
    const users = originalUsers.filter(u => u.id !== user.id);
    this.setState({ users });

    try {
      await deleteUser(user.id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404) console.log("x");
      alert("This user has already been deleted.");

      this.setState({ users: originalUsers });
    }
  };

  render() {
    const { length: count } = this.state.users;

    if (count === 0) return <p>There are no users</p>;

    return (
      <div style={{ marginTop: 20 }}>
        <Link
          to="/users/new"
          className="btn btn-primary"
          style={{ marginBottom: 20 }}
        >
          New user
        </Link>
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
