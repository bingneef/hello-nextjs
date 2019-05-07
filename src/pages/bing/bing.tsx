import React from "react";
import PropTypes from "prop-types";
import styles from "./bing.module.scss";

function Bing({ title }: Props) {
  return <div className={styles.root}>{title}</div>;
}

interface Props {
  title?: String;
}

Bing.defaultProps = {
  title: "Bing"
};

Bing.propTypes = {};

export default Bing;
