import React from "react";
import "./Card.css";

const Card = (props) => (
  <div className="card">
    <div className="img-container">
      <img
        src={props.src}
      />
    </div>
    <div className="content">
    </div>
  </div>
);

export default Card;
