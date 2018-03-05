import React from "react";
import "./Card.scss";

const Card = () => {
  return (
    <div
      className="card dude"
      data-city="lyon paris"
      data-speciality="droit-social"
      data-hover="false"
    >
      <a href="#" className="link">
        <img alt="Alexis Franzosisch" className="photo" />
        <div className="strips">
          <div className="strip strip-top" />
          <div className="strip strip-right" />
          <div className="strip strip-bottom" />
          <div className="strip strip-left" />
        </div>
      </a>
      <div className="dude-infos">
        <div className="text">
          <h3 className="dude-infos-name">
            <span className="name">Alexis</span>
            <span className="surname">Franzosisch</span>
          </h3>
          <h2 className="dude-infos-speciality">DEVELOPER</h2>
        </div>
        <div className="arrow">
          <div className="square" />
        </div>
      </div>
    </div>
  );
};

export default Card;
