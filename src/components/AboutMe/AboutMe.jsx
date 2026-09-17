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
          I am {myAge} years old and I have been a software engineer for {myCareerYears} years,
          all of them remote. Croatian, working the whole time with teams somewhere else, first
          in Munich and then in New York. That is not a recent arrangement I adapted to; it is
          the only way I have ever worked.
        </p>
        <p>
          What I am good at is owning a product surface and the shared pieces underneath it.
          At Sematext I was the only frontend engineer on two product areas for years, working
          directly with one designer and one API engineer, and the components I built there
          ended up being used by most of the rest of the application. I care about that kind of
          result more than about how much code there is, because it is a statement about what
          other people chose to build on.
        </p>
        <p>
          Most recently I led a small team owning a web application and its API, and built the
          system we used to run AI coding work through defined stages rather than ad hoc
          prompting. I have spent enough time on that to have an actual opinion about it: the
          useful question is not whether an agent can write the code, it is what stops bad work
          from reaching the branch. Tests, review gates and evidence you can check afterwards
          still do that job, and nothing about AI changes it.
        </p>
        <p>
          I am independent and self-directed. Nobody needs to hand me tasks, and I would rather
          solve a problem than escalate it. I care about writing clean, documented code, I
          prefer static typing, and I use what I know about algorithms to keep things fast,
          because performance is a feature and slowness is a bug that nobody files.
        </p>
        <p>
          When it comes to architecture, product or process decisions, my first instinct is to
          think about the user story rather than the feature set, and to make the common path
          effortless rather than making everything possible. I enjoy mentoring less experienced
          engineers, and I am comfortable in cross-functional and cross-cultural teams. What I
          am looking for is a team with a real engineering culture, where I can stay hands-on.
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