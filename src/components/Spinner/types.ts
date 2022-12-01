export type SpinnerPropTypes = React.DetailedHTMLProps<
  React.SVGProps<SVGSVGElement>,
  HTMLOrSVGElement
> & {
  size?: "large" | "medium" | "small" | "tiny";
  theme?: "normal" | "primary" | "secondary" | "success" | "error" | "warning";
};
