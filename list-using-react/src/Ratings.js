import React from "react";
import "./Rating.css";

function Ratings({ rating }) {
  return (
    <div className="rating-card">
      {rating.map((obj, index) => {
        return (
          <div className="rating-column" key={index}>
            <label className="rating-label">{obj.type}</label>
            <br />
            <label className="rating-label">
              <label
                style={{
                  color: "orange",
                  fontSize: "24px",
                  padding: "0px",
                  margin: "0px",
                }}
              >
                {" "}
                &nbsp; *{" "}
              </label>
              {obj.rating}
            </label>
          </div>
        );
      })}
    </div>
  );
}

export default Ratings;
