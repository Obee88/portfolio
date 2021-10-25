import React from 'react';
import EducationIcon from './EducationIcon';
import educationItems from './data';
import WorkEducationList from '../common/WorkEducationList';

const Education = ({ className }) => (
  <WorkEducationList
    Icon={EducationIcon}
    items={educationItems}
    className={className}
    title="Education"
  />
);

export default Education;
