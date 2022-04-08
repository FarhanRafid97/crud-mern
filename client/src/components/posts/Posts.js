import React, { useEffect } from 'react';
import Post from './post/Post';
import './posts.css';

const Posts = () => {
  return (
    <div className="posts">
      <h3>POST</h3>
      <Post />
    </div>
  );
};

export default Posts;
