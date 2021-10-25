import classNames from 'classnames';
import { isFunction } from 'lodash';
import React from 'react';
import styles from './Badge.module.scss';

const Badge = ({ text, className, onClick, active}) => (
  <div
    onClick={onClick}
    className={classNames(styles.container, className, {
      [styles.clickable]: isFunction(onClick),
      [styles.active]: active,
    })}
  >
    {text}
  </div>
);

export default Badge;