import React from "react";
import "./Card.scss";

const Card = () => {
  return (
    <div className="card dude">
      <a href="#" className="link">
        <span className="hint">Hello you</span>
        <div className="strips">
          <div className="strip strip-top" />
          <div className="strip strip-right" />
          <div className="strip strip-bottom" />
          <div className="strip strip-left" />
        </div>
      </a>
      <div className="slider">
        <div className="hint">
          <h3>Voila!</h3>
          <h4>Blah blah...</h4>
        </div>
      </div>
    </div>
  );
};

export default Card;
