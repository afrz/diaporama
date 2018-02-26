import React from "react";
import "./Button.scss";

const Button = () => {
  return (
    <nav id="menu">
      <ul>
        <li className="no-active">
          <a className="link-green">
            Notre ADN
            <span className="line-1" />
            <span className="line-2" />
            <span className="line-3" />
            <span className="line-4" />
          </a>
        </li>
        <li className="no-active">
          <a className="link-brown">
            Notre équipe
            <span className="line-1" />
            <span className="line-2" />
            <span className="line-3" />
            <span className="line-4" />
          </a>
        </li>
        <li className="active">
          <a className="link-blue">
            Nos compétences
            <span className="line-1" />
            <span className="line-2" />
            <span className="line-3" />
            <span className="line-4" />
          </a>
        </li>
        <li className="no-active">
          <a className="link-green">
            Nos actus
            <span className="line-1" />
            <span className="line-2" />
            <span className="line-3" />
            <span className="line-4" />
          </a>
        </li>
        <li className="no-active">
          <a className="link-mustard">
            Infos pratiques
            <span className="line-1" />
            <span className="line-2" />
            <span className="line-3" />
            <span className="line-4" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Button;
