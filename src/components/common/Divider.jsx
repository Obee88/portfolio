import React from 'react';
import styles from './Divider.module.scss';

const Divider = ({ id }) => {
  return (
    <div
      id={id}
      data-type="divider"
      className={styles.divider}
    />
  );
};

export default Divider;
