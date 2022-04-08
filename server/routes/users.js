import express from 'express';
import { createUser, getUsersData } from '../controllers/users.js';

export const routerUsers = express.Router();

routerUsers.get('/', getUsersData);
routerUsers.post('/', createUser);
