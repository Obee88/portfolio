import React from 'react';
import WorkEducationList from '../common/WorkEducationList';
import {ReactComponent as BriefcaseIcon} from './Briefcase.svg';
import workItems from './data';
import styles from './Work.module.scss';

const Work = ({ className }) => (
  <WorkEducationList
    className={className}
    Icon={BriefcaseIcon}
    items={workItems}
    title="Work"
  />
);

export default Work;