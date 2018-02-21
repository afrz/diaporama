import React from "react";

const Root = () => {
  return (
    <div
      className="dude"
      data-city="lyon"
      data-speciality="XXXXXXXXXXXXXXXXXXXXXX"
      style={{ height: 203, width: 203 }}
    >
      <div className="dude-infos" style={{ left: 0 + "%" }}>
        <div className="text">
          <h3 className="dude-infos-name">
            <span className="name">XXXXXX</span>
            <span className="surname">XXXXXXXXXXXXXXXXX</span>
          </h3>
          <h2 className="dude-infos-speciality">
            XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
          </h2>
        </div>
        <div className="arrow">
          <div className="square" />
        </div>
      </div>
      <a href="" className="link">
        <img
          src="gallery_XXXX.jpg"
          alt="XXXXXXXXXXXXXXXXXXXXXX"
          className="photo"
        />
        <div className="strips">
          <div className="strip-right" />
        </div>
      </a>
    </div>
  );
};

export default Root;
