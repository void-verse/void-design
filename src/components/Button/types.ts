export type ButtonPropTypes<href = string | undefined> = (href extends undefined
  ? React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >
  : React.DetailedHTMLProps<
      React.AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >) & {
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
