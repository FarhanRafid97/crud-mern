import React, { useState } from 'react';
import * as api from '../api';
import { stringToNumber } from './function';

export const getPost = () => async (dispatch) => {
  try {
    const { data } = await api.fetctPosts();
    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: 'CREATE', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: 'DELETE', payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch({ type: 'UPDATE', payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const clickPost = (id) => async (dispatch) => {
  try {
    const { data } = await api.clickPost(id);
    dispatch({ type: 'CLICK', payload: data });
  } catch (error) {
    console.log(error);
  }
};
