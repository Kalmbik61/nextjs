import React from "react";
import { ParProps } from "./Par.props";
import cn from "classnames";
import styles from "./Par.module.scss";
export default function Par({
  size = "normal",
  children,
  className,
  ...props
}: ParProps): JSX.Element {
  return (
    <p
      className={cn(styles.par, className, {
        [styles.normal]: size == "normal",
        [styles.less]: size == "less",
        [styles.large]: size == "large",
      })}
      {...props}
    >
      {children}
    </p>
  );
}
