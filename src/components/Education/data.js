import universityLogo from './University_logo.png';

const data = [
  {
    role: 'Bachelor of Computer Science',
    institution: {
      name: 'University of Zagreb',
      location: 'Zagreb, Croatia',
      url: 'http://www.unizg.hr/homepage/',
      Logo: (props) => <img src={universityLogo} alt="University of Zagreb" {...props} />,
    },
    period: '2006 - 2012',
  },
  {
    role: 'Masters of Computer Science',
    institution: {
      name: 'University of Zagreb',
      location: 'Zagreb, Croatia',
      url: 'http://www.unizg.hr/homepage/',
      Logo: (props) => <img src={universityLogo} alt="University of Zagreb" {...props} />,
    },
    period: '2012 - 2015',
    bullets: [
     'Thesis: "Interactive interface for data visualization based on client side web technologies"',
    ],
  },
];

export default data;
