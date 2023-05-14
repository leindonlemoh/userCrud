import { useState } from "react";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Login from "./pages/Login";
import UserList from "./pages/UserList";
import UpdateUser from "./pages/UpdateUser";
import axios from "axios";
import AdminRoute from "./pages/AdminRoute";
import User from "./pages/User";
axios.defaults.baseURL = "http://127.0.0.1:8000/api";

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  console.log(loggedInUser);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar loguser={loggedInUser} onLogout={setLoggedInUser} />
        <Routes>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/" element={<Login onLogin={setLoggedInUser} />}></Route>
          <Route path="/users">
            <Route
              index
              element={
                <AdminRoute loguser={loggedInUser}>
                  <UserList />
                </AdminRoute>
              }
            ></Route>
            <Route path=":id" element={<UpdateUser />}></Route>
          </Route>
          <Route path="/userwelcome">
            <Route index element={<User />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
