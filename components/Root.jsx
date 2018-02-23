import React from "react";
import "./Root.scss";

import Cube from "./Cube";

const Root = () => {
  return (
    <div className="flexible">
      <Cube />
      <Cube />
    </div>
  );
};

export default Root;
