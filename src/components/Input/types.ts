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

export type InputTypeTypes = {
  Select: typeof SelectInput;
  Text: typeof TextInput;
  Password: typeof PasswordInput;
};

export const defaultProps = (props: InputPropTypes) => {
  return {
    ...props, // Default props
    className: `void-input`,
  };
};
