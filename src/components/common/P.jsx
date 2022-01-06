import React from 'react';
import styles from './P.module.scss';


const P = ({children}) => (
  <span className={styles.P}>{children}</span>
);

export default P;
