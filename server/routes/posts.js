import express from 'express';

import {
  getPost,
  createPost,
  deletePost,
  updatePost,
  clickPost,
} from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPost);
router.post('/', createPost);
router.delete('/:id', deletePost);
router.put('/:id', updatePost);
router.put('/:id/click', clickPost);

export default router;
