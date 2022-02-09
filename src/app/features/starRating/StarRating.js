import React from "react";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
const creatArray = (length) => [...Array(length)];

const Star = ({ selected, setSelectedStars }) => (
  <FaStar
    color={selected ? "red" : "grey"}
    // onClick={setSelectedStars}
  />
);

export const StarRating = () => {
  const [selectedStars, setSelectedStars] = useState(4);
  return (
    <div>
      {creatArray(5).map((item, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          setSelectedStars={() => setSelectedStars(i + 1)}
        />
      ))}
    </div>
  );
};
