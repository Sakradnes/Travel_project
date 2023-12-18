// BlogPage.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBlogs } from './BlogList';
import type { RootState } from '../../store/store';

const BlogPage = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state: RootState) => state.blog);

  useEffect(() => {
    dispatch(getAllBlogs());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPage;
