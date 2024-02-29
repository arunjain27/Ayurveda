import React, { useState } from "react";
import Star from "./Star";
const Review = () => {
  const [currentRating, setCurrentRating] = useState(0);

  const handleClick = (starNumber) => {
    setCurrentRating(starNumber);
  };
  return (
    <main>
      <div>
        {[1, 2, 3, 4, 5].map((starNumber) => (
          <Star
            key={starNumber}
            isSelected={starNumber <= currentRating}
            onClickStar={() => handleClick(starNumber)}
          />
        ))}
      </div>
    </main>
  );
};

export default Review;
