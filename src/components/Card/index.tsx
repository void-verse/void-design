import React from "react";
import { CardPropTypes } from "./types";

const Card = ({
  header,
  footer,
  children,
  img,
  ...defaultHTMLProps
}: CardPropTypes) => {
  return (
    <div className="void-card" {...defaultHTMLProps}>
      {header && <header className="void-card-header">{header}</header>}
      <div className="void-card-img">
        {img ? typeof img === "string" ? <img src={img} /> : img : null}
      </div>
      <div className="void-card-body">{children}</div>
      {footer && <footer className="void-card-footer">{footer}</footer>}
    </div>
  );
};

export default Card;
