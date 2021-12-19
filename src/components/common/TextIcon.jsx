import React from 'react';
import styles from './TextIcon.module.scss';

const TextIcon = ({ text }) => {
  return (
    <div className={styles.container}>{text}</div>
  );
};

export default TextIcon;
