import classNames from 'classnames';
import React from 'react';
import styles from './Navigation.module.scss';

const Navigation = ({ items, active, onClick }) => (
  <div className={styles.navigation}>
    {items.map(({ label, name }) => (
      <div
        key={name}
        className={classNames(styles.item, {
          [styles.active]: active === name
        })}
        onClick={() => onClick(name)}
      >
        {label}
        <div className={styles.underline} />
      </div>
    ))}
  </div>
);

export default Navigation;
