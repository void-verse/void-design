import React from "react";
import { InputPropTypes } from "./types";

const BaseInput = (props: InputPropTypes): JSX.Element => {
  return (
    <div className="void-input-wrapper">
      {props.label && (
        <p>
          <label htmlFor={props.name}>{props.label}</label>
        </p>
      )}
      <div className="void-input-container">{props.children}</div>
    </div>
  );
};

export default BaseInput;
