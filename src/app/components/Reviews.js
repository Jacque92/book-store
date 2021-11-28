import React from "react";
import { DisplayReview } from "./DisplayReview";

export const Reviews = () => {
  return (
    <div className="reviews container">
      <h2>Our Customers</h2>
      <div className="reviewList">
        <DisplayReview />
      </div>
    </div>
  );
};
