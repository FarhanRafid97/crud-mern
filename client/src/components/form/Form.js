import React, { useEffect, useState } from 'react';
import './form.css';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/posts';

const Form = () => {
  const [postData, setPostData] = useState({
    namaBarang: '',
    kategory: '',
    deskripsi: '',
    harga: '',
    selectedFile: '',
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(postData));
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
  useEffect(() => {
    console.log('redener');
  }, [handleSubmit]);
  return (
    <>
      <div className="form">
        <form action="" onSubmit={handleSubmit}>
          <div className="style-form">
            <h3>FORM </h3>
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

export default Form;
