import React from "react";
import Spinner from "../Spinner";
import { LoaderPropTypes } from "./types";

const Loader = ({ title = "Loading..." }: LoaderPropTypes): JSX.Element => {
  return (
    <div>
      <Spinner />
      <h1>{title}</h1>
    </div>
  );
};

export default Loader;
