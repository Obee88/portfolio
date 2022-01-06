import React from 'react';
import Divider from '../common/Divider';
import Highlights from '../common/Highlights';
import WorkEducationList from '../common/WorkEducationList';
import {ReactComponent as BriefcaseIcon} from './Briefcase.svg';
import {ReactComponent as FullStackIcon} from './laptop.svg';
import {ReactComponent as ReactIcon} from './logo.svg';
import {ReactComponent as HomeOfficeIcon} from './working-from-home.svg';
import workItems from './data';
import TextIcon from '../common/TextIcon';
import P from '../common/P';

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
          text: (
            <span>
              <P>8 years</P> of remote working experience
            </span>
          ),
          tooltip: 'Remote working engineer',
        },
        {
          Icon: FullStackIcon,
          text: (
            <span>
              Experienced in <P>full stack</P> engineering
            </span>
          ),
          tooltip: 'Full stack engineer',
        },
        {
          Icon: ReactIcon,
          text: (
            <span>
              Passion for <P>Frontend developent</P>
            </span>
          ),
          tooltip: 'React + Redux + Typescript',
        },
        // {
        //   Icon: () => <TextIcon text="8y"/>,
        //   text: "8 years of experience in web development",
        //   tooltip: 'React + Redux + Typescript',
        // },
      ]}
    />
  </>
);

export default Work;