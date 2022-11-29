import { InputPropTypes } from "../types";

export type SelectPropTypes = InputPropTypes & {
  options?: {
    label: JSX.Element;
    value: string;
  }[];
};
