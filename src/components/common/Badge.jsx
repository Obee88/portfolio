import classNames from 'classnames';
import React from 'react';
import styles from './Badge.module.scss';

const Badge = ({ text, className, clickable }) => (
  <div
    className={classNames(styles.container, className, {
      [styles.clickable]: clickable,
    })}
  >
    {text}
  </div>
);

export default Badge;