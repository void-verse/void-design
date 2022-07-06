import React from "react";

export type FormPropTypes = {
  className?: string;
  onSubmit?: (values: object) => void;
  children?: JSX.Element;
  style?: React.CSSProperties;
};
