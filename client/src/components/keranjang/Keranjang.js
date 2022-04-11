import React, { useEffect } from 'react';
import './keranjang.css';
import { useSelector, useDispatch } from 'react-redux';
import { stringToNumber } from '../../actions/function';

import { getDataUsers } from '../../actions/usersActions';

const Keranjang = () => {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.users);
  const kerangjangUser = users.filter((user) => user.username === 'farhan');
  const keranajngUser1 = kerangjangUser.map((user, index) => user.keranjang);
  const index = keranajngUser1[0]?.map((user) => user.harga);
  const harga = index?.map((harga) => stringToNumber(harga));
  const totalHaraga = harga?.reduce((a, b) => a + b);

  useEffect(() => {
    console.log(totalHaraga);
  }, []);
  return (
    <>
      <div className="keranjang-section">
        <div class="container-keranajang">
          {keranajngUser1[0]?.map((item) => (
            <div className="checkoutCard">
              <input type="checkbox" className="checkbox" />
              <img src={item.selectedFile} alt="" />
              <ul>
                <li className="namabarang">{item.namaBarang}</li>

                <li className="hargaBarang">Rp.{item.harga}</li>
              </ul>
            </div>
          ))}
          <div className="totalHarga">
            <div>TOTAL HARGA</div>
            <div>Rp {totalHaraga.toLocaleString()}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Keranjang;
