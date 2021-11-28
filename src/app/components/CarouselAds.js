import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import carousel1 from "../../images/carousel1.jpg";
import carousel2 from "../../images/carousel2.png";
import carousel3 from "../../images/carousel3.jpg";

export const CarouselAds = () => {
  const [activeAd, setActiveAd] = useState(carousel1);

  const handleActiveAd = (e) => {
    const activeKey = e.target.value;
    setActiveAd(carouselPics[activeKey]);
  };
  const carouselPics = {
    carousel1: carousel1,
    carousel2: carousel2,
    carousel3: carousel3,
  };

  setTimeout(() => {
    if (activeAd === carousel1) {
      setActiveAd(carousel2);
    } else if (activeAd === carousel2) {
      setActiveAd(carousel3);
    } else {
      setActiveAd(carousel1);
    }
  }, 6000);

  const btnActive = {
    backgroundColor: "red",
  };
  const btnInactive = {
    backgroundColor: "grey",
  };
  return (
    <div className="carouselAds container">
      <div className="carouselBox">
        <div className="imageBox">
          <img className="adPic" src={activeAd}></img>
        </div>
        <div className="carouselText">
          <h1>Find Your Next Books Here</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget
            mi vel erat elementum accumsan a ut orci. Donec feugiat facilisis
            efficitur. Phasellus luctus, nunc in vestibulum vulputate, quam
            dolor ultrices risus, eu auctor nibh mi eu nulla.
          </p>
          <button className="btn">
            <Link to="/shop" style={{ textDecoration: "none", color: "white" }}>
              Shop Now
            </Link>
          </button>
        </div>
      </div>

      <div className="carouselBtn line">
        <button
          style={{
            backgroundColor:
              activeAd === carousel1 ? "rgb(72, 133, 83)" : "grey",
          }}
          value="carousel1"
          onClick={handleActiveAd}
        ></button>
        <button
          style={{
            backgroundColor:
              activeAd === carousel2 ? "rgb(72, 133, 83)" : "grey",
          }}
          value="carousel2"
          onClick={handleActiveAd}
        ></button>
        <button
          style={{
            backgroundColor:
              activeAd === carousel3 ? "rgb(72, 133, 83)" : "grey",
          }}
          value="carousel3"
          onClick={handleActiveAd}
        ></button>
      </div>
    </div>
  );
};
