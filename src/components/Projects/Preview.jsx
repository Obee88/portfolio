import React from 'react';
import classNames from 'classnames';
import * as styles from './Preview.module.scss';

const Preview = ({
  url,
  width,
  height,
  title,
  className,
  visible = true,
}) => {
  return (
    <div className={classNames(styles.container, className)}>
      {visible && (
        <div className={styles.frame}>
          <iframe
            className={className}
            scrolling="no"
            title={title}
            src={url}
            height={height}
            width={width}
          />
        </div>
      )}
    </div>
  );
};

export default Preview;