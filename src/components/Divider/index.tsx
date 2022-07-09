import React from "react";
import { DividerPropTypes } from "./types";

const Divider = ({ children }: DividerPropTypes) => {
  return (
    <div className="void-divider">
      {children ? (
        <>
          <div className="void-divider-line" />
          <div className="void-divider-content">{children}</div>
          <div className="void-divider-line" />
        </>
      ) : (
        <div className="void-divider-line" />
      )}
    </div>
  );
};

export default Divider;
