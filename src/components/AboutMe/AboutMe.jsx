import classNames from 'classnames';
import React from 'react';
import Highlights from '../common/Highlights';
import {ReactComponent as EyeDetails} from './eye-details.svg';
import {ReactComponent as Independent} from './independent.svg';
import efficient from './efficient.png';
import P from '../common/P';
import styles from './AboutMe.module.scss'
import Divider from '../common/Divider';

const AboutMe = ({ className }) => {
  return (
    <div className={classNames(className, styles.container)}>
      <h1>About Me</h1>
      <div className={styles.text}>
        <p>
          I am 34 year old software engineer with 8 years of remote working experience.
          Ever since my early school days I was in love with algorithms. My passion is
          not only to write code but also to write it efficiently and to optimise it in
          CPU and memory usage.
        </p>
        <p>
          During my career I learned that being remote working engineer does not only mean
          being a good programer. For past five years I worked closely with designers to
          design and develop a beautiful user experiences but also with product teams to
          create sustainable product roadmaps. Beside implementing new features and fixing bugs I
          also participated in code reviews with peers and managers to ensure that each increment
          adheres to original vision as described in the user story. When working in the company I
          am strongly motivated to understand the business side, our users, their requirements, and to
          deliver results. I have passion for continued learning and sharing my knowledge to others.
          I love to pick up new technologies and skills but I also enjoy sharing them in form of mentoring
          less experienced team members.
        </p>
        <p>
          When it comes to architectural, product, design or process decisions I collaborate with strong
          judgement and an attention to details. When discussing new capabilities, my first instinct is to
          think of the user story rather than the feature set. I think in terms of making the most common
          interactions effortless, rather than making anything possible.
        </p>
        <p>
          I am very independent, adaptable and self-directed. In my day to day work I require no other person
          for identifying things to work on and am capable of solving my own problems. I think of myself as
          a intelligent and fast learning person. Even though I tend to strongly stick to ideas that I think are good,
          I learned that getting wedded to ideas is not always best way to go. I also learned to throw prototypes
          away when something isn’t working or isn't showing expected results. I Care about writing clean,
          well-documented code and appreciate static typing. I also care about browser performance and 
          like to use my knowledge in algorithms to ensure things are fast.
        </p>
        <p>
          I hope to join a team with established strong engineering culture. I am comfortable working with
          cross-functional and cross-cultural team and I belive that bringing my experience and knowledge of
          best practices can contribute to its growth. I am used to work remotely and my happiness at work
          comes from human relationships, growth opportunities, and a team mindset.
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