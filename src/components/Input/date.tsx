import React from "react";
import { defaultProps, InputPropTypes } from "./types";

const DateInput = (props: InputPropTypes): JSX.Element => {
  return <input {...defaultProps(props)} type="date" />;
};

export default DateInput;
