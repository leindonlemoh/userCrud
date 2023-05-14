import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";

const Login = ({ onLogin }) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onInputChange = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: user.email,
      password: user.password,
    };
    axios
      .post("/user/login", data)
      .then((res) => {
        swal("Success", "Logged in Successfully", "success");

        onLogin({
          id: res.data.user.id,
          first_name: res.data.user.first_name,
          last_name: res.data.user.last_name,
          is_admin: res.data.user.is_admin,
        });

        console.log(res.data);
      })
      .catch(function (err) {
        swal("Error", err.response.data.message, "error");
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header text-center">
              <h4>Login</h4>
            </div>
            <div className="card-body">
              <form onSubmit={onFormSubmit}>
                {/*  email */}
                <div className="input-group mb-3">
                  <label htmlFor="email" className="input-group-text">
                    email:
                  </label>
                  <input
                    className={`form-control `}
                    name="email"
                    id="email"
                    type="email"
                    onChange={onInputChange}
                    value={user.email}
                  />
                </div>
                {/* pass  */}
                <div className="input-group mb-3">
                  <label htmlFor="password" className="input-group-text">
                    Password:
                  </label>
                  <input
                    className={`form-control `}
                    name="password"
                    id="password"
                    type="password"
                    onChange={onInputChange}
                    value={user.password}
                  />
                </div>
                {/* confirm pass */}

                <div className="input-group mb-3"></div>
                <div className="input-group mb-3">
                  <input
                    type="submit"
                    value="submit"
                    className="btn btn-primary w-100"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
