import React from "react";
import { InputPropTypes } from "../types";

const BaseInput = (props: InputPropTypes): JSX.Element => {
  return (
    <div className="void-input-layer">
      {props.label && (
        <p className="void-input-label">
          <label htmlFor={props.name}>{props.label}</label>
        </p>
      )}
      <div className="void-input-core">{props.children}</div>
    </div>
  );
};

export default BaseInput;
