import classNames from 'classnames';
import React from 'react';
import moment from 'moment';
import styles from './Info.module.scss';

const Info = ({ className }) => (
  <div className={classNames(styles.container, className)}>
    <div className={styles.info}>
      <h1>Hello, I'm Davor.{'\n'}</h1>
      <p>
        Full Stack Engineer, {moment().diff('2013-01-01', 'years', false)} years, all of it remote. <br />
        I build web applications and the APIs behind them, and lately <br />
        the systems teams use to build software with AI.
      </p>
    </div>
    <div className={styles.picture}>
    </div>
  </div>
);

export default Info;
