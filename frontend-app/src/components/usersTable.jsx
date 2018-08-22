import React, { Component } from "react";
import Table from "./common/table";
import { Link } from "react-router-dom";

class UsersTable extends Component {
  columns = [
    {
      path: "username",
      label: "Name",
      content: user => <Link to={`/users/${user.id}`}>{user.username}</Link>
    },
    { path: "email", label: "Email" },
    {
      key: "delete",
      content: user => (
        <button
          onClick={() => this.props.onDelete(user)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      )
    }
  ];
  render() {
    const { users, sortColumn, onSort } = this.props;
    return (
      <Table
        columns={this.columns}
        data={users}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default UsersTable;
