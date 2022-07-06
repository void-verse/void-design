import React from "react";
import DateInput from "./date";
import TextInput from "./text";
import { InputPropTypes, InputTypeTypes } from "./types";

// DateInput;
const Input: React.FC<InputPropTypes> & InputTypeTypes = (
  props
): JSX.Element => <TextInput {...props} />;

Input.Text = TextInput;
Input.Date = DateInput;

export default Input;
