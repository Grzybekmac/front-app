import React, { Component } from "react";
import Table from "./common/table";

class UsersTable extends Component {
  columns = [
    { path: "username", label: "Name" },
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
