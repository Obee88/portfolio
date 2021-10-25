import classNames from 'classnames';
import React from 'react';
import styles from './Info.module.scss';

const Info = ({ className }) => (
  <div className={classNames(styles.container, className)}>
    <div className={styles.info}>
      <h1>Hello, I'm Davor.{'\n'}</h1>
      <p>
        I am a Full Stack Engineer but my passion is Frontend development.</p>
    </div>
    <div className={styles.picture}>
    </div>
  </div>
);

export default Info;
