import classNames from 'classnames';
import { flatMap, includes, uniq, some, isEmpty } from 'lodash';
import React, { useMemo, useState } from 'react';
import Badge from '../common/Badge';
import DetailsSlider from '../common/DetailsSlider';
import Preview from './Preview';
import styles from './ProjectsPanel.module.scss';

const ProjectsPanel = ({ items, className, title }) => {
  const [activeFilters, setActiveFilters] = useState([]);
  const filteredItems = useMemo(
    () => isEmpty(activeFilters) ?
      items :
      items.filter(item => some(activeFilters, af => includes(item.tags, af))),
    [items, activeFilters]
  );
  const tags = useMemo(() => uniq(flatMap(items, 'tags')), [items]);
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
        <div className={styles.tags}>
          {tags.map(tag => (
            <Badge
              className={styles.tag}
              text={tag}
              active={includes(activeFilters, tag)}
              onClick={() => {
                const i = activeFilters.indexOf(tag);
                const nextActiveFilters = i < 0 ? 
                  [...activeFilters, tag] :
                  [...activeFilters.slice(0, i), ...activeFilters.slice(i + 1)]
                setActiveFilters(nextActiveFilters);
              }}
            />
          ))}
        </div>
      </div>
      <div className={styles.projects}>
        {filteredItems.map(({ name, employer, role, description, period, preview = {} }) => (
          <div className={styles.project} key={name}>
            <div className={styles.top}>
              <div className={styles.name}>{name}</div>
              <div className={styles.period}>{period}</div>
            </div>
            <div className={styles.mid}>
              <div className={styles.left}>
                <div className={styles.employer}>
                  <div className={styles.key}>Employer:</div>{employer}
                </div>
                <div className={styles.role}>
                  <div className={styles.key}>Role:</div>{role}
                </div>
              </div>
              <div className={styles.right}>
                {!isEmpty(preview) ? (
                  <Preview
                    className={styles.preview}
                    title={`${name}_preview`}
                    {...preview}
                  />
                ) : null}
              </div>
            </div>
            <div className={styles.description}>{description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPanel;