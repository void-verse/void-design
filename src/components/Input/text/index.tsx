import React from "react";
import BaseInput from "../base";
import { defaultProps, InputPropTypes } from "../types";

const TextInput = (props: InputPropTypes): JSX.Element => {
  return (
    <BaseInput {...props}>
      <input {...defaultProps(props)} type="text" />
    </BaseInput>
  );
};

export default TextInput;
