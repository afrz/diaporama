import React from "react";
import "./Button.scss";

const Button = ({ children }) => {
  return (
    <li className="btn-effect no-active">
      <a>
        {children}
        <span className="line-1" />
        <span className="line-2" />
        <span className="line-3" />
        <span className="line-4" />
      </a>
    </li>
  );
};

export default Button;
