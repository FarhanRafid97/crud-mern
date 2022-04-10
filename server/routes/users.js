import express from 'express';
import {
  createUser,
  getUsersData,
  updateUser,
  getUsersDataId,
} from '../controllers/users.js';

export const routerUsers = express.Router();

routerUsers.get('/', getUsersData);
// routerUsers.get('/:id', getUsersDataId);
routerUsers.post('/', createUser);
routerUsers.put('/:id', updateUser);
