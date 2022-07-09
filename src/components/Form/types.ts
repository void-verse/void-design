import React from "react";

export type FormPropTypes = React.DetailedHTMLProps<
  React.FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
> & {
  className?: string;
  onSubmit?: (values: object) => void;
  children?: JSX.Element;
  style?: React.CSSProperties;
};
