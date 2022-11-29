import React from "react";
import DateInput from "./date";
import PasswordInput from "./password";
import SelectInput from "./select";
import TextInput from "./text";

export type InputPropTypes = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  disabled?: boolean;
  loading?: boolean;
  placeholder?: string;
  label?: string;
  value?: string;
  name?: string;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (val: string) => any;
};

export type SelectPropTypes = {
  disabled?: boolean;
  loading?: boolean;
  placeholder?: string;
  label?: string;
  value?: string;
  name?: string;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (val: string) => any;
  options?: {
    label: JSX.Element;
    value: string;
  }[];
};

export type InputTypeTypes = {
  Select: typeof SelectInput;
  Text: typeof TextInput;
  Date: typeof DateInput;
  Password: typeof PasswordInput;
};

export const defaultProps = (props: InputPropTypes, className?: string) => {
  return {
    ...props, // Default props
    className: `void-input ${props.loading ? "void-input-loading" : ""} ${
      className || ""
    } ${props.className || ""}`,
    id: props.name,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      props.onChange ? props.onChange(e.target.value) : () => {},
  };
};
