import React, { useEffect, useState } from 'react';
import './register.css';
import { useDispatch } from 'react-redux';
import { createUser } from '../../actions/usersActions';

const Register = () => {
  const [dataUser, setDataUser] = useState({
    username: '',
    password: '',
    email: '',
    level: '',
  });
  const dispatch = useDispatch();

  const submitUser = (e) => {
    e.preventDefault();
    dispatch(createUser(dataUser));
  };

  useEffect(() => {
    console.log(dataUser);
  }, [dataUser]);
  return (
    <>
      <div className="form">
        <form action="" onSubmit={submitUser}>
          <div className="style-form">
            <h3>REGISTER </h3>
            <input
              name="userName"
              placeholder=" "
              className="username"
              value={dataUser.username}
              onChange={(e) =>
                setDataUser({ ...dataUser, username: e.target.value })
              }
              autoComplete="off"
            />
            <label className="labelUsername">Username</label>
            <input
              name="kategory"
              className="password"
              type="password"
              placeholder=" "
              autoComplete="off"
              value={dataUser.password}
              onChange={(e) =>
                setDataUser({ ...dataUser, password: e.target.value })
              }
            />
            <label className="labelPassword">Password</label>
            <input
              name="deskripsi"
              className="email"
              placeholder=" "
              autoComplete="off"
              value={dataUser.email}
              onChange={(e) =>
                setDataUser({ ...dataUser, email: e.target.value })
              }
            />
            <label className="labelEmail">Email</label>
            <input
              name="harga"
              className="level"
              placeholder=" "
              autoComplete="off"
              value={dataUser.level}
              onChange={(e) =>
                setDataUser({ ...dataUser, level: e.target.value })
              }
            />

            <label className="labelLevel">User/Admin</label>
            <button className="submit" type="submit">
              Submit
            </button>
            <button className="clear" type="button">
              Clear
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
