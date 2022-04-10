import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './detail.css';
import { BsStarHalf, BsStarFill, BsBagCheck } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../actions/posts';
import { FiShoppingCart } from 'react-icons/fi';
import { IoBagCheckOutline } from 'react-icons/io';
import { updateUser } from '../../actions/usersActions';

const Detail = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const users = useSelector((state) => state.users);
  const { id } = useParams();
  const filteredPost = posts.filter((post) => post._id === id);
  const user1 = users[1];
  const recomendedProduk = posts.filter((post) => post._id !== id);

  const keranjangHandler = (e) => {
    e.preventDefault();
    const keranjang = users[0].keranjang;
    keranjang.push(filteredPost[0]);
    console.log(users);
    dispatch(updateUser(users[0]._id, users[0]));
  };

  return (
    <>
      <div className="halamanProduk">
        {filteredPost.map((item, index) => (
          <div className="detail" key={index}>
            <div className="produk">
              <div className="foto">
                <img src={item.selectedFile} alt="" />
              </div>
              <div className="keterangan">
                <div className="title">
                  <span>{item.namaBarang}</span>
                </div>
                <div className="deskripsi">
                  <div className="terjual">
                    <span className="laku">Terjual 100++</span>
                    <span className="rating">
                      <BsStarFill /> <BsStarFill /> <BsStarFill />{' '}
                      <BsStarFill />
                      <BsStarHalf /> (14 Ulasan) - (15 diskusi)
                    </span>
                  </div>
                  <div className="harga">
                    <span>Rp{item.harga}</span>
                  </div>

                  <div className="detailProduk">
                    <ul>
                      <li>Kondisi: Baru</li>
                      <li>Berat: 1 Kilogram</li>
                      <li>
                        Kategori: {item.kategory.map((post) => `#${post}`)}
                      </li>
                    </ul>
                    <h4>Deskripsi</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatum iste sit libero id ipsam possimus quibusdam,
                      vitae odio? A recusandae ullam aliquam similique corporis
                      et dolores deleniti dignissimos id perspiciatis iusto odio
                      eligendi voluptates eveniet modi deserunt, quisquam
                      incidunt hic exercitationem. Est ab temporibus dicta
                      excepturi magni. Reprehenderit, pariatur. Maxime?
                    </p>
                  </div>
                  <div className="produkButton">
                    <button className="buttonShoping">
                      <FiShoppingCart className="shoping" />
                      BUY NOW
                    </button>
                    <button
                      className="buttonShoping"
                      type="button"
                      onClick={keranjangHandler}
                    >
                      <BsBagCheck className="shoping" />
                      CHECKOUT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="rekomendasi ">
          <div className="rekomen">
            <h3>Relevan Produk</h3>
          </div>
          <div className="produkRekomendasi">
            {recomendedProduk.map((item, index) => (
              <div className="card" key={index}>
                <img src={item.selectedFile} alt="" />
                <ul>
                  <li className="kategori">
                    {item.kategory.map((item) => `#${item}`)}
                  </li>
                  <li>{item.namaBarang}</li>
                  <li>{item.deskripsi}</li>
                  <li>Rp.{item.harga}</li>
                </ul>
                <div className="button">
                  <Link
                    to={`../Posts/detail/${item._id}`}
                    className="detailButton"
                  >
                    {' '}
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
        </div>
      </div>
    </>
  );
};
export default Detail;
