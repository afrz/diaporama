import React from "react";
import "./Cube.scss";

const Cube = () => {
  return (
    <section className="cube-container">
      <div id="cube">
        <div className="figure front">FRONT</div>
        <div className="figure back" />
        <div className="figure right" />
        <div className="figure left" />
        <div className="figure top" />
        <div className="figure bottom">BOTTOM</div>
      </div>
    </section>
  );
};

export default Cube;
