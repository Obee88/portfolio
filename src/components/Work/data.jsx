import {ReactComponent as SematextIcon} from './sematext-icon.svg';
import replyLogo from './reply-logo.png';
import gdiLogo from './GDI-logo.png';

const data = [
  {
    period: 'Oct 2011 - Dec 2012',
    institution: {
      name: 'GisData',
      location: 'Zagreb, Croatia',
      Logo: (props) => <img src={gdiLogo} alt="GDI" {...props} />,
    },
    role: 'Software Engineer Intern',
    bullets: [
      'Implementing geoinformatic software in various web applications',
    ],
    keywords: ['C#', '.Net', 'Silverlight', 'JavaScript', 'Arc-GIS', 'MySQL'],
  },
  {
    period: 'Jan 2013 - Jan 2018',
    institution: {
      name: 'ComSysto Gmbh',
      location: 'Munich, Germany',
      url: 'https://www.comsystoreply.de/',
      Logo: (props) => <img src={replyLogo} alt="comsysto-reply" {...props} />,
    },
    role: 'Remote Full Stack Software Engineer',
    bullets: [
      'Working remotely from Zagreb in Germany-based team',
      'Frontend, backend and devops roles',
    ],
    keywords: ['JavaScript', 'React', 'Angular', 'Spring', 'MongoDB', 'Docker', 'AWS'],
  },
  {
    period: 'Jan 2018 - present',
    institution: {
      name: 'Sematext Group',
      location: 'New York, USA',
      url: 'https://sematext.com/',
      Logo: SematextIcon,
    },
    role: 'Remote Full Stack Engineer',
    bullets: [
      'Working remotely from Zagreb in Worldwide-distributed team',
      'Full Stack role',
    ],
    keywords: ['JavaScript', 'React', 'Redux', 'ES6', 'SCSS'],
  },
];

export default data;