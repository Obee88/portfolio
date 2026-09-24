import {ReactComponent as SematextIcon} from './sematext-icon.svg';
import replyLogo from './reply-logo.png';
import gdiLogo from './GDI-logo.png';
import archipeloLogo from './archipelo-logo.png';

const data = [
  {
    period: 'Sep 2011 - Mar 2012',
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
    period: 'Jul 2013 - Dec 2017',
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
    period: 'Jan 2018 - Sep 2024',
    institution: {
      name: 'Sematext Group',
      location: 'New York, USA',
      url: 'https://sematext.com/',
      Logo: SematextIcon,
    },
    role: 'Remote Full Stack Engineer',
    bullets: [
      'Working remotely from Zagreb in a team spread across Europe and the US',
      'Owned two product areas of the observability platform, infrastructure monitoring and agent fleet management, working directly with design and API engineering',
      'Built the shared data table and flyout panel, adopted across more than half of the application\'s modules',
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
    role: 'App Team Lead',
    bullets: [
      'Working remotely from Zagreb in a team spread across Europe and the US',
      'Led the app team, five engineers owning the web application and the API behind it',
      'Rewrote the application and the API from scratch as AI capability landed in the product',
      'Built the internal software factory: the workflows, specialist agent roles, verification gates and knowledge model for running AI coding work through defined stages',
    ],
    keywords: ['TypeScript', 'Svelte', 'AI Agents', 'Claude Code', 'Team Lead'],
  },
];

export default data;
