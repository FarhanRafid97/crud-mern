import PostBarang from '../models/postBarang.js';
import mongoose from 'mongoose';

export const getPost = async (req, res) => {
  try {
    const postBarang = await PostBarang.find();
    res.status(200).json(postBarang);
    // res.send('data ada');
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const createPost = async (req, res) => {
  const post = req.body;
  const newBarang = new PostBarang(post);
  try {
    await newBarang.save();
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};
export const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`no post with id id`);
  await PostBarang.findByIdAndRemove(id);
  res.json({ message: 'delete succes' });
};

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send(`no post with id id`);
  const updatedPost = await PostBarang.findByIdAndUpdate(
    _id,
    { ...post, _id },
    { new: true }
  );
  res.json(updatedPost);
};

export const clickPost = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send(`no post with id id`);
  const dataPost = await PostBarang.findById(_id);
  const clickPostUpdate = await PostBarang.findByIdAndUpdate(
    _id,
    {
      click: dataPost.click + 1,
    },
    {
      new: true,
    }
  );
  res.json(clickPostUpdate);
};
