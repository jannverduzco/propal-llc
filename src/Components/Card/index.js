import React from "react";
import "./style.css";

function Card({title, imageUrl, body}) {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={imageUrl} alt="" />
      </div>
      <div className="card-content">
        <div className="card-title">
          <h4>{title}</h4>
        </div>
        <div className="card-body">{body}</div>
      </div>
    </div>
  );
}

export default Card;
