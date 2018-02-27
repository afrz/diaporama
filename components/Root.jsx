import React from "react";
import "./Root.scss";

import Cube from "./Cube";
import Button from "./Button";
import Card from "./Card";

import CardContainer from "./CardContainer";

const Root = () => {
  return (
    <React.Fragment>
      <div className="flexible">
        <Cube />
        <Cube />
        <Cube />
      </div>
      <div className="flexible column">
        <Button>ADN</Button>
        <Button>Compétences</Button>
        <Button>Equipes</Button>
      </div>
      <CardContainer>
        <Card />
      </CardContainer>
    </React.Fragment>
  );
};

export default Root;
