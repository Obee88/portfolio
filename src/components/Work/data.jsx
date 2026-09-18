import {ReactComponent as SematextIcon} from './sematext-icon.svg';
import replyLogo from './reply-logo.png';
import gdiLogo from './GDI-logo.png';
import archipeloLogo from './archipelo-logo.png';

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
      'Architecture and AWS infrastructure for a vehicle sensor pipeline moving ~60 GB a day end to end in under ten seconds',
    ],
    keywords: ['JavaScript', 'React', 'Angular', 'Spring', 'MongoDB', 'Docker', 'AWS'],
  },
  {
    period: 'Jan 2018 - Oct 2024',
    institution: {
      name: 'Sematext Group',
      location: 'New York, USA',
      url: 'https://sematext.com/',
      Logo: SematextIcon,
    },
    role: 'Remote Full Stack Engineer',
    bullets: [
      'Working remotely from Zagreb in a worldwide-distributed team',
      'Sole frontend owner of two product areas of the observability platform, working with one designer and one API engineer per area',
      'Built the shared data table and flyout panel that most of the rest of the application was built on',
    ],
    keywords: ['JavaScript', 'TypeScript', 'React', 'Redux', 'SCSS', 'Webpack'],
  },
  {
    period: 'Oct 2024 - Aug 2026',
    institution: {
      name: 'Archipelo',
      location: 'USA (remote)',
      Logo: (props) => <img src={archipeloLogo} alt="Archipelo" {...props} />,
    },
    role: 'Interface Engineer, then App Team Lead',
    bullets: [
      'Led the app team, five engineers owning the web application and the API behind it',
      'Rewrote the application and the API from scratch as AI capability landed in the product',
      'Built the internal software factory: the workflows, specialist agent roles, verification gates and commit-signing policy for running AI coding work through defined stages',
    ],
    keywords: ['TypeScript', 'Svelte', 'AI Agents', 'Claude Code', 'Team Lead'],
  },
];

export default data;
