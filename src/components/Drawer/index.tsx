import React from "react";
import Divider from "../Divider";
import { DrawerPropTypes } from "./types";

const Drawer = ({
  children,
  className,
  closeIcon,
  footer,
  header,
  isOpen,
  onClose,
  ...defaultHTMLProps
}: DrawerPropTypes) => {
  return (
    <div
      {...defaultHTMLProps}
      className={`void-drawer ${
        isOpen ? "void-drawer-opened" : "void-drawer-closed"
      } ${className ?? ""}`}
    >
      <div className="void-drawer-close-icon" onClick={onClose}>
        {closeIcon ?? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        )}
      </div>
      {header && (
        <header>
          {header}
          <Divider />
        </header>
      )}
      <div className="void-drawer-body">{children}</div>
      {footer && (
        <footer>
          <Divider />
          {footer}
        </footer>
      )}
    </div>
  );
};

export default Drawer;
