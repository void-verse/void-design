import React from "react";
import Spinner from "../Spinner";
import { LoaderPropTypes } from "./types";

const Loader = ({
  title = "Loading...",
  ...defaultHTMLProps
}: LoaderPropTypes): JSX.Element => {
  return (
    <div {...defaultHTMLProps}>
      <Spinner />
      <h1>{title}</h1>
    </div>
  );
};

export default Loader;
