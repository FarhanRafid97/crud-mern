import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './post.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  filterByHarga,
  filterByHargaLow,
  getPost,
  getPostPopuler,
} from '../../../actions/posts';
import { deletePost } from '../../../actions/posts';
import { AiFillEdit } from 'react-icons/ai';
import { clickPost } from '../../../actions/posts';

const Post = () => {
  let post = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const handlerHarga = (e) => {
    if (e.target.value === 'mahal') {
      dispatch(filterByHarga());
    } else if (e.target.value === 'murah') {
      dispatch(filterByHargaLow());
    } else if (e.target.value === 'populer') {
      dispatch(getPostPopuler());
    }
  };

  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);

  return (
    <>
      <div class="filter">
        <span>FILTER :</span>
        <select name="cars" id="cars" onChange={handlerHarga}>
          <option value="mahal">High To Low</option>
          <option value="murah">LOW To High</option>
          <option value="populer">Populer</option>
        </select>
      </div>

      <div className="listProduk">
        {post.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.selectedFile} alt="" />
            <Link to={`update/${item._id}`} className="editButton">
              <AiFillEdit />
            </Link>
            <ul>
              <li className="kategori"></li>
              <li>{item.namaBarang}</li>
              <li>{item.deskripsi}</li>
              <li>Dilihat :{item.click}</li>
              <li>Rp.{item.harga}</li>
            </ul>
            <div className="button">
              <Link
                to={`detail/${item._id}`}
                onClick={() => dispatch(clickPost(item._id))}
                className="detailButton"
              >
                DETAIL
              </Link>
              <button
                className="deleteButton"
                onClick={() => dispatch(deletePost(item._id))}
              >
                DELETE
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Post;
