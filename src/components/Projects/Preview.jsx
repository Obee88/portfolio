import React, { useState } from 'react';
import classNames from 'classnames';
import {ReactComponent as ExternalLinkIcon} from './external-link.svg';
import * as styles from './Preview.module.scss';

const Preview = ({
  url,
  width,
  height,
  title,
  className,
}) => {
  const [open, setOpen] = useState(true);
  return (
    <div className={classNames(styles.container, className)}>
      <div className={styles.row}>
        <button
          onClick={() => setOpen(o => !o)}
        >
          {`${open ? 'hide' : 'show'} preview`}
        </button>
        <a
          rel="noreferrer"
          href={url}
          target="_blank"
          title="open demo page"
          className={styles.ext}
        >
          <ExternalLinkIcon />
        </a>
      </div>
      {open && (
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