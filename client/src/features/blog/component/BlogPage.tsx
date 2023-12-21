import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../store/store';
import type { Post } from '../type';

function BlogPage(): JSX.Element {
  const { posts, loading, error } = useSelector((state: RootState) => state.blog);

  if (loading) {
    return <p>Загрузка...</p>;
  }

  if (error) {
    return <p>Ошибка: {error}</p>;
  }

  return (
    <div>
      <h1>Посты в блоге</h1>
      <ul>
        {posts.map((post: Post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.urlToImage}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogPage;
