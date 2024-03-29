import './App.css';
import Form from './components/form/Form';
import Posts from './components/posts/Posts';
import { useDispatch, useSelector } from 'react-redux';
import { getPost } from './actions/posts';
import { getDataUsers } from './actions/usersActions';
import { useEffect, useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Detail from './components/detail/Detail';
import Update from './components/updateForm/Update';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Keranjang from './components/keranjang/Keranjang';
import { FiShoppingCart } from 'react-icons/fi';

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const filtered = users.filter((user) => user.username === 'farhan');
  const keranjangUser = filtered.map((user) => user.keranjang.length);

  useEffect(() => {
    dispatch(getDataUsers());
    dispatch(getPost());
    console.log(keranjangUser);
  }, [dispatch]);

  return (
    <>
      <div className="App">
        <div className="container">
          <div className="navbar">
            <nav>
              <ul>
                <li>
                  <Link to="/" className="link">
                    HOME
                  </Link>
                </li>
                <li>
                  <Link to="form" className="link">
                    FORM
                  </Link>
                </li>
                <li>
                  <Link to="Posts" className="link">
                    POST
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="search">
              <i className="fa-solid fa-magnifying-glass"></i>{' '}
              <input
                className="searchInput"
                name="title"
                placeholder="search"
              />
            </div>
            <div className="loginSection">
              <li>
                <Link to="login" className="loginButton">
                  Login
                </Link>
              </li>
              <div class="keranjangNavbar">
                <Link to="keranjang/userId">
                  <FiShoppingCart className="shopingchart" />
                  <div className="jumlahCheckout">{keranjangUser[0]}</div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/Posts" element={<Posts />} />
          <Route path="/Posts/detail/:id" element={<Detail />} />
          <Route path="/Posts/update/:id" element={<Update />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/keranjang/userId" element={<Keranjang />} />
          {/* <Route path="Karya" element={<Karya />} />
          <Route path="Contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
