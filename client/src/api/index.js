import axios from 'axios';

const url = 'http://localhost:8000/posts';
export const fetctPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const updatePost = (id, updatePost) =>
  axios.put(`${url}/${id}`, updatePost);
export const clickPost = (id) => axios.put(`${url}/${id}/click`);

const urlUsers = 'http://localhost:8000/users';
export const fetchUsers = () => axios.get(urlUsers);
export const createUser = (newUser) => axios.post(urlUsers, newUser);
export const updateUser = (id, updateUser) =>
  axios.put(`${urlUsers}/${id}`, updateUser);
