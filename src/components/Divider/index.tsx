import React from "react";
import { DividerPropTypes } from "./types";

const Divider = ({
  children,
  className = "",
  ...defaultHTMLProps
}: DividerPropTypes) => {
  return (
    <div className={`${className} void-divider`} {...defaultHTMLProps}>
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
