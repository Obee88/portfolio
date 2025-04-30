import classNames from 'classnames';
import React from 'react';
import Highlights from '../common/Highlights';
import {ReactComponent as EyeDetails} from './eye-details.svg';
import {ReactComponent as Independent} from './independent.svg';
import efficient from './efficient.png';
import P from '../common/P';
import styles from './AboutMe.module.scss'
import Divider from '../common/Divider';
import moment from 'moment';

const AboutMe = ({ className }) => {
  const myBirthYear = 1987;
  const myCareerStartYear = 2013;
  const myAge = moment().year() - myBirthYear;
  const myCareerYears = moment().year() - myCareerStartYear;
  return (
    <div className={classNames(className, styles.container)}>
      <h1>About Me</h1>
      <div className={styles.text}>
        <p>
          I am {myAge} year-old software engineer with {myCareerYears} years of remote working experience.
          Ever since my early school days, I was in love with algorithms. My passion is
          not only to write code but also to write it efficiently and optimize it for CPU and memory usage.
        </p>
        <p>
          During my career, I have learned that being a remote working engineer does not only mean being a
          good programmer. For the past five years, I have worked closely with designers to design and develop
          beautiful user experiences, and with product teams to create sustainable product roadmaps. Besides 
          implementing new features and fixing bugs, I also participated in code reviews with peers and managers 
          to ensure that each increment adheres to the original vision as described in the user story. When working 
          in a company, I am strongly motivated to understand the business side, our users, their requirements, 
          and to deliver results. I have a passion for continued learning and sharing my knowledge with others. 
          I love to pick up new technologies and skills, but I also enjoy mentoring less experienced team members.
        </p>
        <p>
          When it comes to architectural, product, design, or process decisions, I collaborate with strong judgment 
          and attention to detail. When discussing new capabilities, my first instinct is to think of the user story 
          rather than the feature set. I prioritize making the most common interactions effortless, rather than making 
          anything possible.
        </p>
        <p>
          I am very independent, adaptable, and self-directed. In my day-to-day work, I require no other person to identify 
          tasks and am capable of solving my own problems. I think of myself as an intelligent and fast-learning person. Even 
          though I tend to strongly stick to ideas that I think are good, I have learned that getting wedded to ideas is not 
          {'always the best way to go. I also learned to discard prototypes when something isn\'t working or isn\'t showing '}
          expected results. I care about writing clean, well-documented code and appreciate static typing. I also care about 
          browser performance and like to use my knowledge in algorithms to ensure things are fast.
        </p>
        <p>
          I hope to join a team with an established strong engineering culture. I am comfortable working with cross-functional 
          and cross-cultural teams, and I believe that bringing my experience and knowledge of best practices can contribute to 
          its growth. I am used to working remotely, and my happiness at work comes from human relationships, growth opportunities, 
          and a team mindset.
        </p>
      </div>
      <Divider />
      <Highlights
        items={[
          {
            Icon: Independent,
            text: (
              <span>
                <P>Independent</P> 
              </span>
            ),
            tooltip: 'Independent in my day to day assignments.',
          },
          {
            Icon: EyeDetails,
            text: (
              <span>
                 <P>Eye for details</P>
              </span>
            ),
            tooltip: 'Developing beautiful UI.',
          },
          {
            Icon: () => <img alt="efficient" src={efficient} width={72} height={72} />,
            text: (
              <span>
                <P>Efficient</P>
              </span>
            ),
            tooltip: 'Fast and reliable.',
          },
        ]}
      />
    </div>
  );
}

export default AboutMe;