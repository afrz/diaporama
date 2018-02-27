import React from "react";

const style = {
  width: 600,
  height: 600,
  border: "1px solid gray"
};

const CardContainer = ({ children }) => {
  return (
    <div style={style} id="dude-container">
      {children}
    </div>
  );
};

export default CardContainer;
