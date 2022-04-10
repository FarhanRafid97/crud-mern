import mongoose from 'mongoose';
import UserData from '../models/data-users.js';

export const getUsersData = async (req, res) => {
  try {
    const userData = await UserData.find();
    res.status(200).json(userData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const getUsersDataId = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const userData = await UserData.findById(_id);
    res.status(200).json(userData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const createUser = async (req, res) => {
  const user = req.body;
  const dataUser = new UserData(user);
  try {
    await dataUser.save();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  const { id: _id } = req.params;
  const user = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send(`no post with id id`);
  const dataPost = await UserData.findById(_id);
  const updateUser = await UserData.findByIdAndUpdate(
    _id,
    { ...user, _id },
    { new: true }
  );
  console.log(user);
  res.json(updateUser);
};
