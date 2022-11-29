import React, { useState } from "react";
import { defaultProps, InputPropTypes } from "./types";

const PasswordInput = (props: InputPropTypes): JSX.Element => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <div className="void-input-wrapper">
      <input {...defaultProps(props)} type={visible ? "text" : "password"} />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        onClick={() => setVisible((prev) => !prev)}
      >
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </div>
  );
};

export default PasswordInput;
