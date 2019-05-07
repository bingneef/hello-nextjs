import React from "react";
import styles from "./sping.module.scss";

function Sping({ title }: Props) {
  return <div className={styles.root}>{title}</div>;
}

interface Props {
  title?: string;
}

Sping.defaultProps = {
  title: "Sping"
};

Sping.propTypes = {};

export default Sping;
