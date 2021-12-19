import React from 'react';
import Divider from '../common/Divider';
import Highlights from '../common/Highlights';
import WorkEducationList from '../common/WorkEducationList';
import {ReactComponent as BriefcaseIcon} from './Briefcase.svg';
import {ReactComponent as FullStackIcon} from './laptop.svg';
import {ReactComponent as ReactIcon} from './logo.svg';
import {ReactComponent as HomeOfficeIcon} from './working-from-home.svg';
import workItems from './data';

const Work = ({ className }) => (
  <>
    <WorkEducationList
      className={className}
      Icon={BriefcaseIcon}
      items={workItems}
      title="Work"
    />
    <Divider />
    <Highlights
      items={[
        {
          Icon: HomeOfficeIcon,
          text: "Remote working engineer since 2012",
          tooltip: 'Remote working engineer',
        },
        {
          Icon: FullStackIcon,
          text: "Experienced in full stack engineering",
          tooltip: 'Full stack engineer',
        },
        {
          Icon: ReactIcon,
          text: "Passion for Frontend developent",
          tooltip: 'React + Redux + Typescript',
        },
      ]}
    />
  </>
);

export default Work;