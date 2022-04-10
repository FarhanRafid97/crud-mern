import * as api from '../api/index';

export const getDataUsers = () => async (dispatch) => {
  try {
    const { data } = await api.fetchUsers();
    dispatch({ type: 'FETCH_ALL_USERS', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createUser = (user) => async (dispatch) => {
  try {
    const { data } = await api.createUser(user);
    dispatch({ type: 'ADD', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateUser = (id, user) => async (dispatch) => {
  try {
    const { data } = await api.updateUser(id, user);
    dispatch({ type: 'UPDATE_USER', payload: data });
  } catch (error) {
    console.log(error);
  }
};
