import classNames from 'classnames';
import React from 'react';
import Badge from './Badge';
import styles from './WorkEducationList.module.scss';

const WorkEducationList = ({ Icon, items, className, title }) => (
  <div className={classNames(styles.container, className)}>
    <div className={styles.side}>
      <div className={styles.content}>
        <Icon />
        <div className={styles.title}>{title}</div>
      </div>
    </div>
    <div className={styles.items}>
      {items.map(({ bullets = [], institution, role, period, keywords = [] }) => (
        <div className={styles.item}>
          <div className={styles.head}>
            <div className={styles.left}>
              <div className={styles.logo}>
                <institution.Logo />
              </div>
              <div className={styles.details}>
                <div className={styles.name}>
                  {institution.url ?
                    (
                      <a href={institution.url}>{institution.name}</a>
                    ) : (
                      <span>{institution.name}</span>
                    )
                  }
                </div>
                <div className={styles.location}>
                  {institution.location}
                </div>
              </div>
            </div>
            <div className={styles.right}>
              <div styleName={styles.period}>{period}</div>
            </div>
          </div>
          <div className={styles.body}>
            <div className={styles.indent}>
            </div>
            <div className={styles.content}>
              <div className={styles.role}>{role}</div>
              <ul className={styles.bullets}>
                {bullets.map(bullet => (
                  <li>{bullet}</li>
                ))}
              </ul>
              <div className={styles.keywords}>
                {keywords.map((keyword) => (
                  <div className={styles.keyword}>
                    <Badge text={keyword} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default WorkEducationList;