import React from "react";
import PropTypes from "prop-types";
import styles from "./bouk.module.scss";

function Bouk ({ title }: Props) {
  return <div className={styles.root}>{title}</div>;
};

interface Props {
  title?: String;
}

Bouk.defaultProps = {
  title: "Bouk"
};

Bouk.propTypes = {};

export default Bouk;