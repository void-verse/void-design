import React, { useState } from "react";
import BaseInput from "../base";
import Arrow from "./arrow";
import { SelectPropTypes } from "./types";

const SelectInput = (props: SelectPropTypes): JSX.Element => {
  const [selectedOption, setSelectedOption] = useState("");
  const [optionsOpened, setOptionsOpened] = useState(false);

  return (
    <>
      <BaseInput {...props}>
        <div
          className={`void-input void-input-select void-input-select-${
            optionsOpened ? "opened" : "closed"
          }`}
          onClick={() => setOptionsOpened((prev) => !prev)}
        >
          <p className="void-input-select-value">
            {props?.options?.find((opt) => opt.value === selectedOption)
              ?.label ?? (
              <p className="void-input-select-placeholder">
                {props?.placeholder ?? "Select an option"}
              </p>
            )}
          </p>

          {/* START: Options */}
          <div
            className={`void-options void-options-${
              optionsOpened ? "opened" : "closed"
            }`}
          >
            {props?.options?.map((option) => (
              <div
                key={option?.value}
                className={`void-option void-option-${
                  selectedOption === option.value ? "selected" : "unselected"
                }`}
                onClick={() => {
                  if (props?.onChange) props.onChange(option.value);
                  setSelectedOption(option.value);
                  //   setOptionsOpened((prev) => !prev);
                }}
              >
                {option?.label}
              </div>
            ))}
          </div>
          {/* END: Options */}
        </div>
        <div
          className="void-input-icon"
          onClick={() => setOptionsOpened((prev) => !prev)}
        >
          <Arrow />
        </div>
      </BaseInput>
      {/* <div className="void-input-wrapper">
      {props.label && (
        <p>
          <label htmlFor={props.name}>{props.label}</label>
        </p>
      )}
      <div
        className={`void-input void-input-select void-input-select-${
          optionsOpened ? "opened" : "closed"
        }`}
        onClick={() => setOptionsOpened((prev) => !prev)}
      >
        <p className="void-input-select-value">
          {props?.options?.find((opt) => opt.value === selectedOption)
            ?.label ?? (
            <p className="void-input-select-placeholder">
              {props?.placeholder ?? "Select an option"}
            </p>
          )}
        </p>
        <Arrow />
      </div>
      <div
        className={`void-options void-options-${
          optionsOpened ? "opened" : "closed"
        }`}
      >
        {props?.options?.map((option) => (
          <div
            key={option?.value}
            className={`void-option void-option-${
              selectedOption === option.value ? "selected" : "unselected"
            }`}
            onClick={() => {
              if (props?.onChange) props.onChange(option.value);
              setSelectedOption(option.value);
              setOptionsOpened((prev) => !prev);
            }}
          >
            {option?.label}
          </div>
        ))}
      </div>
    </div> */}
    </>
  );
};

export default SelectInput;
