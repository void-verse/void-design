import React, { useState } from "react";
import BaseInput from "../base";
import { defaultProps, InputPropTypes } from "../types";
import EyeClosed from "./eye_closed";
import EyeOpen from "./eye_open";

const PasswordInput = (props: InputPropTypes): JSX.Element => {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <BaseInput {...props}>
      <input {...defaultProps(props)} type={visible ? "text" : "password"} />
      <div
        className="void-input-icon"
        onClick={() => setVisible((prev) => !prev)}
      >
        {visible ? <EyeOpen /> : <EyeClosed />}
      </div>
    </BaseInput>
  );
};

export default PasswordInput;
