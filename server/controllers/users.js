import mongoose from 'mongoose';
import UserData from '../models/data-users.js';

export const getUsersData = async (req, res) => {
  try {
    const userData = await UserData.find();
  } catch (error) {
    res.status(409).json({ message: error.message });
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
