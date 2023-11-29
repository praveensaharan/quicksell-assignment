import React from "react";
import "./Card.css";

function CardComponent({ title, description, buttonText }) {
  return (
    <div className="custom-card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <button className="btn btn-primary">Feature Request{buttonText}</button>
      </div>
    </div>
  );
}

export default CardComponent;
