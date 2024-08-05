import classNames from 'classnames';
import { isEmpty, isFunction, isUndefined } from 'lodash';
import React, { useState } from 'react';
import Badge from '../common/Badge';
import DetailsSlider from '../common/DetailsSlider';
import Preview from './Preview';
import {ReactComponent as ExternalLinkIcon} from './external-link.svg';
import {ReactComponent as GitHubIcon} from './github.svg';
import styles from './ProjectsPanel.module.scss';
import Label, { LABEL_TYPES } from '../common/Label';

const ProjectsPanel = ({ items, className, title }) => {
  const [previewMap, setPreviewMap] = useState([]);
  const togglePreviewVisible = (projectName, val) => setPreviewMap((m) => ({
    ...m,
    [projectName]: isUndefined(val)
      ? !m[projectName]
      : val,
  }));
  const isPreviewVisible = (projectName) => !!previewMap[projectName];
  return (
    <div className={classNames(styles.container, className)}>
      <div className={styles.header}>
        <div className={styles.top}>
          <h2 className={styles.title}>{title}</h2>
          <div
            className={styles.slider}
            title="Slide to change details level."
          >
            <DetailsSlider />
          </div>
        </div>
      </div>
      <div className={styles.projects}>
        {items.map(({ tags, name, employer, role, description, period, preview = {}, repository, type }) => (
          <div key={name} className={classNames(styles.project, 'highlight')} >
            <div className={styles.top}>
              <div className={styles.left}>
                <div className={styles.name}>
                  {name}
                </div>
              </div>
              <div className={styles.right}>
                <div className={styles.period}>
                  {!isEmpty(preview) && (
                    <div className={styles.previewActions}>
                      <button
                        onClick={() => togglePreviewVisible(name)}
                      >
                        {isPreviewVisible(name) ? 'Hide' : 'Show'}
                        &nbsp;
                        preview
                      </button>
                      <a
                        rel="noreferrer"
                        href={repository}
                        target="_blank"
                        title="open git repository"
                      >
                        <GitHubIcon className={styles.ghIcon} />
                      </a>
                      <a
                        rel="noreferrer"
                        href={preview.url}
                        target="_blank"
                        title="open demo page"
                      >
                        <ExternalLinkIcon />
                      </a>
                    </div>
                  )}
                  {period}
                </div>
              </div>
            </div>
            <div className={styles.mid}>
              {employer && (
                <div className={styles.employer}>
                  <div className={styles.key}>Employer:</div>{employer}
                </div>
              )}
              <div className={styles.role}>
                <div className={styles.key}>Role:</div>{role}
              </div>
              <div className={styles.role}>
                <div className={styles.key}>Project type:</div>
                <Label
                  type={{
                    'Professional Assignment': LABEL_TYPES.success,
                    'Personal Project': LABEL_TYPES.info,
                    'Learning Technologies': LABEL_TYPES.warning,
                  }[type] || LABEL_TYPES.info}
                >{type}</Label>
              </div>
              <div className={styles.description}>
                {isFunction(description) ? description(() => togglePreviewVisible(name, true)) : description}
              </div>
              {!isEmpty(preview) ? (
                <Preview
                  className={styles.preview}
                  title={`${name}_preview`}
                  visible={isPreviewVisible(name)}
                  {...preview}
                />
              ) : null}
              <div className={styles.tags}>
                {tags.map(tag => (
                  <Badge
                    className={styles.tag}
                    text={tag}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPanel;