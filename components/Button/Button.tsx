import React from "react";
import styles from "./Button.module.scss";
import { ButtonProps } from "./Button.props";
import cn from "classnames";
import ArrowIcon from "./arrow.svg";

export default function Button({
  type,
  children,
  className,
  arrow = "none",
  ...props
}: ButtonProps): JSX.Element {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: type == "primary",
        [styles.ghost]: type == "ghost",
      })}
      {...props}
    >
      {children}
      {arrow !== "none" && (
        <span
          className={cn(styles.arrow, {
            [styles.down]: arrow == "down",
          })}
        >
          <ArrowIcon />
        </span>
      )}
    </button>
  );
}
// throw new Error("Props <type> is required! Use types <primary> or <ghost>!");
