import React, { useEffect, useState } from 'react';
import './update.css';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { updatePost } from '../../actions/posts';

const Update = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const { id } = useParams();
  const filteredPost = posts.filter((post) => post._id === id);

  const [postData, setPostData] = useState({
    namaBarang: filteredPost[0].namaBarang,
    kategory: filteredPost[0].kategory,
    deskripsi: filteredPost[0].deskripsi,
    harga: filteredPost[0].harga,
    selectedFile: filteredPost[0].selectedFile,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updatePost(filteredPost[0]._id, postData));
    clear();
  };
  const clear = () => {
    setPostData({
      namaBarang: '',
      kategory: '',
      deskripsi: '',
      harga: '',
      selectedFile: '',
    });
  };

  useEffect(() => {}, [handleSubmit]);
  return (
    <>
      <div className="form">
        <form action="" onSubmit={handleSubmit}>
          <div className="style-form">
            <h3>EDIT</h3>
            <input
              name="namaBarang"
              placeholder=" "
              className="namaBarang"
              value={postData.namaBarang}
              autoComplete="off"
              onChange={(e) =>
                setPostData({ ...postData, namaBarang: e.target.value })
              }
            />
            <label className="labelNama">Nama Barang</label>

            <input
              name="kategory"
              className="kategori"
              placeholder=" "
              autoComplete="off"
              value={postData.kategory}
              onChange={(e) =>
                setPostData({
                  ...postData,
                  kategory: e.target.value.split(','),
                })
              }
            />
            <label className="labelKategori">Kategori</label>
            <input
              name="deskripsi"
              className="deskripsi"
              placeholder=" "
              autoComplete="off"
              value={postData.deskripsi}
              onChange={(e) =>
                setPostData({ ...postData, deskripsi: e.target.value })
              }
            />
            <label className="labelDeskripsi">Deskripsi</label>
            <input
              name="harga"
              className="harga"
              placeholder=" "
              autoComplete="off"
              value={postData.harga}
              onChange={(e) =>
                setPostData({ ...postData, harga: e.target.value })
              }
            />
            <label className="labelHarga">Harga</label>
            <div className="fileInput ">
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  setPostData({ ...postData, selectedFile: base64 })
                }
              />
            </div>
            <button className="submit" type="submit">
              Submit
            </button>
            <button className="clear" type="button" onClick={clear}>
              Clear
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Update;
