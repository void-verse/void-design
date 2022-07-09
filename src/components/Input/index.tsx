import React from "react";
import DateInput from "./date";
import SelectInput from "./select";
import TextInput from "./text";
import { InputPropTypes, InputTypeTypes } from "./types";

// DateInput;
const Input: React.FC<InputPropTypes> & InputTypeTypes = (
  props
): JSX.Element => <TextInput {...props} />;

Input.Select = SelectInput;
Input.Text = TextInput;
Input.Date = DateInput;

export default Input;
