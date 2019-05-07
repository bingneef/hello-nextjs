import React from "react";
import styles from "./bing.module.scss";

function Bing({ title }: Props) {
  return <div className={styles.root}>{title}</div>;
}

interface Props {
  title?: string;
}

Bing.defaultProps = {
  title: "Bing"
};

Bing.propTypes = {};

export default Bing;
