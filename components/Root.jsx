import React from "react";
import "./Root.scss";

import { Button } from "./Button";
import { Card } from "./Card";
import { Cube } from "./Cube";

const Root = () => {
  return (
    <React.Fragment>
      <div className="flexible">
        <Cube />
      </div>
      <div className="flexible column">
        <Button>Documentation</Button>
        <Button>Tech</Button>
        <Button>Team</Button>
        <Button>About</Button>
      </div>
      <div className="flexible">
        <Card />
      </div>
    </React.Fragment>
  );
};

export default Root;
