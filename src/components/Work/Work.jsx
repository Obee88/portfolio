import React from 'react';
import WorkEducationList from '../common/WorkEducationList';
import {ReactComponent as BriefcaseIcon} from './Briefcase.svg';
import workItems from './data';

const Work = ({ className }) => (
  <WorkEducationList
    className={className}
    Icon={BriefcaseIcon}
    items={workItems}
    title="Work"
  />
);

export default Work;