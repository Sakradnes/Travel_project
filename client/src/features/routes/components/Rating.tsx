import React from 'react';

interface StarRatingProps {
  rating: number;
  maxStars?: number; // Добавляем опциональный параметр для максимального количества звезд
}

function StarRating({ rating, maxStars = 5 }: StarRatingProps): JSX.Element {
  let fullStars = Math.floor(rating);


  const stars = [];

  while (maxStars) {
    if (fullStars) {
      stars.push(
        <span key="full" className="text-yellow-500">
          ★
        </span>,
      );
    } else {
      stars.push(
        <span key="half" style={{ opacity: '0.2' }} className="text-current">
          ★
        </span>,
      );
    }
    maxStars -= 1;
    fullStars -= 1;
  }

  return <div>{stars}</div>;
}

export default StarRating;
