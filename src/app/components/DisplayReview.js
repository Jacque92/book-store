import React from "react";
import ava from "../../images/ava.jpg";
export const DisplayReview = () => {
  return (
    <div className="displayReview">
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
        ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
        molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero
        eros et accumsan et iusto odio dignissim qui blandit praesent luptatum
        zzril delenit augue duis dolore te feugait nulla facilisi.
      </p>
      <div className="avatar">
        <div className="avatarBox">
          <img src={ava} alt="avatar" style={{ width: "100%" }}></img>
        </div>
        <h4>John Smith</h4>
      </div>
    </div>
  );
};
