import React, { useState } from "react";
import { SelectPropTypes } from "./types";

const SelectInput = (props: SelectPropTypes): JSX.Element => {
  const [selectedOption, setSelectedOption] = useState("");
  const [optionsOpened, setOptionsOpened] = useState(false);

  return (
    <div className="void-input-wrapper">
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
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
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
    </div>
  );
};

export default SelectInput;
