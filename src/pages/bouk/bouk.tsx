import React from "react";
import styles from "./bouk.module.scss";

function Bouk({ title }: Props) {
  return <div className={styles.root}>{title}</div>;
}

interface Props {
  title?: string;
}

Bouk.defaultProps = {
  title: "Bouk"
};

Bouk.propTypes = {};

export default Bouk;
