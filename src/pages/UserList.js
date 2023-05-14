import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

const UserList = () => {
  const { id } = useParams();
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    axios.get("/users").then((res) => {
      setUserList(res.data.users);
    });
  }, []);

  const deleteUser = (e, id) => {
    e.preventDefault();
    const deleteBtn = e.target;
    swal("Warning", "Are you sure you want to delete this user?", "warning", {
      dangerMode: true,
      buttons: true,
    }).then((confirm) => {
      axios
        .delete(`/user/${id}`)
        .then((res) => {
          swal("Deleted", res.data.message, "success");
          deleteBtn.closest("tr").remove();
        })
        .catch((err) => {
          console.log(err);
          swal("Error", "Unable to Delete", "erorr");
        });
    });
  };

  const renderlist = userList.map((user) => {
    return (
      <tr key={user.id}>
        <td>{user.first_name}</td>
        <td>{user.last_name}</td>
        <td>{user.email}</td>
        <td>
          <Link className="btn btn-primary" to={`/users/${user.id}`}>
            Edit
          </Link>
        </td>
        <td>
          <button
            className="btn btn-danger"
            onClick={(e) => {
              deleteUser(e, user.id);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div className="container mt-5">
      <h4>User List</h4>
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{renderlist}</tbody>
      </table>
    </div>
  );
};

export default UserList;
