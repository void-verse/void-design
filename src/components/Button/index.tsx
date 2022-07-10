import React from "react";
import Spinner from "../Spinner";
import { ButtonPropTypes } from "./types";

const Button = ({
  className = "",
  children,
  type = "button",
  theme = "primary",
  structure = "solid",
  size = "medium",
  shape = "rectangle",
  href,
  disabled,
  loading,
  onClick = () => {},
  ...remainingProps
}: ButtonPropTypes): JSX.Element => {
  const ButtonWrapper = ({
    children,
  }: {
    children: JSX.Element;
  }): JSX.Element =>
    href && !loading && !disabled ? (
      <a
        href={href}
        {...(remainingProps as React.DetailedHTMLProps<
          React.AnchorHTMLAttributes<HTMLAnchorElement>,
          HTMLAnchorElement
        >)}
      >
        {children}
      </a>
    ) : (
      children
    );

  const generateClassName = (): string => {
    let name = `${className} void-btn `;
    name += `void-btn-${theme}-${structure} `;
    name += `void-btn-${size} `;
    name += `void-btn-${shape} `;
    name += disabled ? "void-btn-disabled " : "";
    name += loading ? "void-btn-loading " : "";
    return name;
  };

  return (
    <ButtonWrapper>
      <button
        className={`${generateClassName()}`}
        onClick={disabled || loading ? () => {} : onClick}
        type={disabled ? "button" : type}
        {...(!href &&
          (remainingProps as React.DetailedHTMLProps<
            React.ButtonHTMLAttributes<HTMLButtonElement>,
            HTMLButtonElement
          >))}
      >
        {loading && (
          <>
            <Spinner
              theme={structure === "solid" ? "normal" : theme}
              size={size === "large" ? "small" : "tiny"}
            />
            &nbsp; &nbsp;
          </>
        )}
        {children}
      </button>
    </ButtonWrapper>
  );
};

export default Button;
