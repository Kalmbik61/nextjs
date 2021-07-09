import React from "react";
import { HtagProps } from "./HTitle.props";
import styles from "./HTitle.module.scss";
export default function HTitle({ tag, children }: HtagProps): JSX.Element {
  switch (tag) {
    case "h1":
      return <h1 className={styles.h1}>{children}</h1>;
    case "h2":
      return <h2 className={styles.h2}>{children}</h2>;
    case "h3":
      return <h3 className={styles.h3}>{children}</h3>;
    default:
      throw new Error("Props <Tag> is required! Use h1,h2,h3!");
  }
}
