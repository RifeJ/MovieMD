import React from "react";
import { Star, StarHalf } from "lucide-react";

const StarRating = ({ rating = 0 }) => {
  const numericRating = Number(rating) || 0;
  const roundedRating = Math.round((numericRating / 2) * 2) / 2;

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }, (_, index) => {
        const starValue = index + 1;
        const halfStarValue = index + 0.5;

        return (
          <span key={index}>
            {roundedRating >= starValue ? (
              <Star size={20} color="#eab308" fill="#eab308" />
            ) : roundedRating >= halfStarValue ? (
              <StarHalf size={20} color="#eab308" fill="#eab308" />
            ) : (
              <Star size={20} color="#9ca3af" fill="transparent" />
            )}
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
