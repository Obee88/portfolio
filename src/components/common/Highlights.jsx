import React from 'react';
import classNames from 'classnames';
import styles from './Highlights.module.scss';

const Highlights = ({ items }) => {
  return (
    <div className={styles.container}>
      {items.map(({ text, Icon, tooltip }) => (
        <div className={classNames(styles.item, 'highlight')}>
          <Icon
            className={styles.icon}
            title={tooltip}
          />
          <div className={styles.text}>{text}</div>
        </div>
      ))}
    </div>
  );
};

export default Highlights;
