import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const carouselPics = [
  "../images/carousel1.jpg",
  "../images/carousel2.jpg",
  "../images/carousel3.jpg",
];

export const CarouselAds = () => {
  const [activeAd, setActiveAd] = useState(0);

  const picChange = setInterval(() => {
    setActiveAd(activeAd === carouselPics.length - 1 ? 0 : activeAd + 1);
    clearInterval(picChange);
  }, 5000);

  const handleActiveAd = (e) => {
    setActiveAd(parseInt(e.target.value));
  };

  return (
    <div className="carouselAds container">
      <div className="carouselBox">
        <div className="imageBox">
          <img className="adPic" src={carouselPics[activeAd]}></img>
        </div>
        <div className="carouselText">
          <h1>Find Your Next Books Here</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget
            mi vel erat elementum accumsan a ut orci. Donec feugiat facilisis
            efficitur. Phasellus luctus, nunc in vestibulum vulputate, quam
            dolor ultrices risus, eu auctor nibh mi eu nulla.
          </p>
          <Button size="large" variant="contained">
            <Link to="/shop" style={{ textDecoration: "none", color: "white" }}>
              Shop Now
            </Link>
          </Button>
        </div>
      </div>

      <div className="carouselBtn line">
        {carouselPics.map((picture, i) => {
          return (
            <button
              key={i}
              value={i}
              onClick={handleActiveAd}
              style={{
                backgroundColor: activeAd === i ? "rgb(31, 103, 212)" : "grey",
              }}
            ></button>
          );
        })}
      </div>
    </div>
  );
};
