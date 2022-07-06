export type ButtonPropTypes = {
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  children?: JSX.Element;
  type?: "button" | "submit" | "reset";
  theme?: "primary" | "secondary" | "success" | "error" | "warning";
  structure?: "solid" | "liquid" | "gas";
  size?: "large" | "medium" | "small";
  shape?: "rectangle" | "rounded";
  href?: string;
  onClick?: () => any;
};
