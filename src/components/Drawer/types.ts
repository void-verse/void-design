export type DrawerPropTypes = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  closeIcon?: JSX.Element;
  footer?: JSX.Element;
  header?: JSX.Element;
  isOpen?: boolean;
  onClose?: () => any;
};
