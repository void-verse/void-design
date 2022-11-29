import React from "react";
import DateInput from "./date";
import PasswordInput from "./password";
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
Input.Password = PasswordInput;

export default Input;
