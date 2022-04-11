import React from 'react';
import './login.css';

import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <>
      <div className="form">
        <form action="">
          <div className="style-form">
            <h3>Login </h3>
            <input
              name="userName"
              placeholder=" "
              className="username"
              // value={dataUser.username}
              // onChange={(e) =>
              //   setDataUser({ ...dataUser, username: e.target.value })
              // }
              autoComplete="off"
            />
            <label className="labelUsername">Username</label>
            <input
              name="kategory"
              className="password"
              type="password"
              placeholder=" "
              autoComplete="off"
              // value={dataUser.password}
              // onChange={(e) =>
              //   setDataUser({ ...dataUser, password: e.target.value })
              // }
            />
            <label className="labelPassword">Password</label>

            <button className="submit" type="submit">
              Submit
            </button>
            <button className="clear" type="button">
              Clear
            </button>
            <Link to="/register" className="registerButton">
              Register
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
