import React from "react";
import "./Root.scss";

import Cube from "./Cube";
import Button from "./Button";
import Card from "./Card";

const Root = () => {
  return (
    <React.Fragment>
      <div className="flexible">
        <Cube />
      </div>
      <div className="flexible column">
        <Button>ADN</Button>
        <Button>Compétences</Button>
        <Button>Equipes</Button>
      </div>
      <div className="flexible ">
        <Card />
      </div>
    </React.Fragment>
  );
};

export default Root;
