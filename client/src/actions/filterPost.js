import * as api from '../api';
import { stringToNumber } from './function';

export const getPostPopuler = () => async (dispatch) => {
  try {
    const { data } = await api.fetctPosts();
    const populer = data.sort((a, b) => a.click - b.click);
    dispatch({ type: 'POPULERDATA', payload: populer.reverse() });
  } catch (error) {
    console.log(error.message);
  }
};

export const filterByHarga = () => async (dispatch) => {
  try {
    const { data } = await api.fetctPosts();
    const hargaTermahal = data.sort(
      (a, b) => stringToNumber(a.harga) - stringToNumber(b.harga)
    );

    dispatch({ type: 'FILTERHARGA', payload: hargaTermahal.reverse() });
  } catch (error) {
    console.log(error.message);
  }
};
export const filterByHargaLow = () => async (dispatch) => {
  try {
    const { data } = await api.fetctPosts();
    const hargaTermahal = data.sort(
      (a, b) => stringToNumber(a.harga) - stringToNumber(b.harga)
    );

    dispatch({ type: 'FILTERED_PRICE_LOW', payload: hargaTermahal });
  } catch (error) {
    console.log(error.message);
  }
};
