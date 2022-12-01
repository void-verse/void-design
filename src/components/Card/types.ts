export type CardPropTypes = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  header?: JSX.Element | string;
  footer?: JSX.Element | string;
  img?: JSX.Element | string;
};
