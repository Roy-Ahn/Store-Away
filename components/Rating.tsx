
import React from 'react';
import { StarIcon } from './icons/Icons';

interface RatingProps {
  rating: number;
  reviewCount: number;
}

export const Rating: React.FC<RatingProps> = ({ rating, reviewCount }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center space-x-1">
      <div className="flex">
        {[...Array(fullStars)].map((_, i) => (
          <StarIcon key={`full-${i}`} className="w-5 h-5 text-yellow-400" filled />
        ))}
        {halfStar && <StarIcon className="w-5 h-5 text-yellow-400" filled />}
        {[...Array(emptyStars)].map((_, i) => (
          <StarIcon key={`empty-${i}`} className="w-5 h-5 text-gray-300" />
        ))}
      </div>
      <span className="text-sm text-brand-gray-500">({reviewCount})</span>
    </div>
  );
};
   