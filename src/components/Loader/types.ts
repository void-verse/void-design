export type LoaderPropTypes = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  title: string;
  description: string;
  content: JSX.Element;
};
