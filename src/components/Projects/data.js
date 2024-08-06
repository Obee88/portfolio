import D from '../common/Detail';

export const workProjects = [
  {
    name: 'Sematext Cloud',
    employer: 'Sematext',
    type: 'Professional assignment',
    role: 'Full Stack Engineer',
    period: 'Jan 2018 - present',
    tags: [
      'JavaScript', 'TypeScript', 'React', 'Redux', 'ES6', 'SCSS',
    ],
    description: (<>
      <D lvl={1}>
        Sematext Cloud is a cloud based solution that joins your infrastructure performance
        monitoring, real user monitoring, transaction tracing, and logs in one dynamic application.&nbsp;
      </D>
      <D lvl={2}>
        It can be used for creating monitoring dashboards, generating reports, searching logs,
        monitoring events and setting alarms, defining correlations or just keeping your eyes on
        your infrastructure performances.&nbsp;
      </D>
      <D lvl={1}>
      </D>
      <D lvl={3}>
        It is a complex components based application. It is designed not to be just an app
        but also a tool. Everything is reusable and everything must be configurable by users. This
        means it gives users a lot of freedom in generating dashboards that perfectly fit their own
        needs.&nbsp;
      </D>
      <D lvl={2}>
        It is built using highly reusable presentational components in combination with HOC
        wrappers for adjusting the view and providing it with data. Redux is used as a central
        storage with selectors designed to maximize the performances.&nbsp;
      </D>
      <D lvl={3}>
        Functionalities like live monitoring or searching and presenting historical data for hundreds
        or thousands of hosts and containers can result in high costs on the backend side. That is why we
        are specially focused on optimising data traffic and reducing redundant backend calls.&nbsp;
      </D>
      <D lvl={2}>
        Efficient code and high performances are equally important as nice design and great user experience.&nbsp;
      </D>
      <D lvl={2}>
        Through different etapes of my employment I worked on several different subproducts. As
        a member of 4 member team I was in charge of implementing Infrastructure Overview Dashboards&nbsp;
      </D>
      <D lvl={3}>
        - a tool for monitoring your servers hierarchy including monitoring their pods, containers, packages,
        and processes.&nbsp;
      </D>
      <D lvl={2}>
        In next etape I was main frontend engineer for Discovery subproduct.&nbsp;
      </D>
      <D lvl={3}>
        It offered user the overview of services and logs discovered on their machines.
        Chalenge was to define a simple and user friendly UI flow that would allow user to discover
        unmonitored services on their machines and to simply start monitoring them in just few simple clicks.&nbsp;
      </D>
      <D lvl={2}>
        I closely cooperated with other engineers on defining the subproduct features. After features were defined
        I would cooperate with designer on creating visual design for this subproduct and finally I was fully responsible
        for implementing the frontend solution.&nbsp;
      </D>
      <D lvl={2}>
        In next etape I became the owner of Fleet subproduct.&nbsp;
      </D>
      <D lvl={3}>
        It offered user the overview and the controll over the fleet of their installed agents.&nbsp;
      </D>
      <D lvl={2}>
        Again I worked together with other engineers on defining features. I covorked with designer on creation of
        visual design and finally implemented frontend solution but this time I was also in charge of managing sprints
        and creating tickets for other team members.
      </D>
    </>),
  },
  {
    name: 'BMW Sensor Analytics Framework',
    employer: 'ComSysto',
    type: 'Professional Assignment',
    role: 'Full Stack Engineer, AWS architect',
    period: 'July 2016 - Jan 2018',
    tags: [
      'AWS', 'CloudFormation', 'Jenkins', 'Spring', 'Java',
    ],
    description: (<>
      <D lvl={1}>
        BMW SAF is a framework for collecting, processing and distributing data from car
        fleets.&nbsp;
      </D>
      <D lvl={2}>
        It uses data from BMW's CARASSO(Car As a Sensor) and Xfcd(Extended Floating Car
        Data) systems as input.&nbsp;
      </D>
      <D lvl={3}>
        A Large amount of collected raw data(~60Gb/ day) is then parsed,
        converted to models and processed at a big scale in machine learning using Spark and
        Neptune technologies. Finally results are aggregated and distributed to various BMW
        internal services or partners like HERE maps.&nbsp;
      </D>
      <D lvl={2}>
        This whole complex zero-downtime BigData
        system with real-time requirements&nbsp;
      </D>
      <D lvl={3}>(&lt;10 seconds from reception, over processing to
        distributing)&nbsp;
      </D>
      <D lvl={2}>
        is based on AWS services.&nbsp;
      </D>
      <D lvl={3}>It is built as a net of Worker-queue segments with
        requirement of zero-downtime and therefore requires a complex blue-green deployment
        process for deployment when updating to a new version of software.&nbsp;
      </D>
      <D lvl={2}>
        I was a remotely working member of a four-man team (two Java developers, full
        stack developer and an intern) that followed Scrum philosophy for planning and
        organisation.&nbsp;
      </D>
      <D lvl={3}>My main role on this project was creating architecture solutions for this system
        together with building and maintaining infrastructure on AWS using CloudFormation scripts
        as a base. Additionally&nbsp;
      </D>
      <D lvl={2}>I contributed to API development using Spring framework in Java
        and tutored an intern who was developing frontend react-application as a dashboard for
        monitoring on this project.
      </D>
    </>),
  },
  {
    name: 'SeeVee',
    employer: 'ComSysto',
    type: 'Professional Assignment',
    role: 'Frontend Developer',
    period: 'Aug 2015 - July 2016',
    tags: [
      'JavaScript', 'ES6', 'Webpack', 'React', 'Redux', 'PhantomJS',
    ],
    description: (<>
      <D lvl={1}>
        This online resume generator is a stateless front end application that helps users to
        create and maintain their CVs.&nbsp;
      </D>
      <D lvl={2}>
        It&nbsp;
      </D>
      <D lvl={3}>
        uses GitHub repository as a storage for JSON formatted CV
        data and then&nbsp;
      </D>
      <D lvl={2}>
        uses CV data to render beautiful CVs from one of our predesigned
        templates.&nbsp;
      </D>
      <D lvl={1}>
        It can be used as a personal CV generator when used in “private mode” or as a
        great tool for maintaining a CV base for all the employees in a company when used in
        “business mode”.&nbsp;
      </D>
      <D lvl={3}>
        Application was first developed using AngularJS framework but part by part it was
        migrated to ReactJS as React was recognized as a better fit in creating solutions for given
        demands. It uses asynchronous HTTP calls to communicate with GitHub API and with our
        external REST service. Whole SeeVee application was built in MVC architecture and is
        completely based on services, reusable front-end components and libraries like bootstrap,
        lodash, moment, async, karma, sass...&nbsp;
      </D>
      <D lvl={2}>
        As a member of a SeeVee-s two man development team I participated and
        contributed in almost all the aspects of this application development process. Team was
        working from remote destinations and was organised following Scrum practice.&nbsp;
      </D>
      <D lvl={3}>It resulted in
        great experience in remote front-end development and learning a lot about popular
        frameworks like AngularJS and React.
      </D>
    </>),
  },
  {
    name: 'MongoSoup',
    employer: 'ComSysto',
    type: 'Professional Assignment',
    role: 'Full Stack Developer',
    tags: [
      'AWS', 'Docker', 'Nginx', 'Python', 'Flask', 'jQuery', 'MongoDB'
    ],
    description: (<>
      <D lvl={1}>
        MongoSoup was the first German MongoDB-as-a-service offering based on the AWS
        infrastructure located in EU.&nbsp;
      </D>
      <D lvl={3}>
        As such it offers full compatibility with German and EU laws
        about data storages. With MongoSoup companies can without any administrative effort get
        directly usable MongoDB instance situated in a cloud.&nbsp;
      </D>
      <D lvl={2}>
        It is highly scalable, ready for
        production and is ideal with its short development times for easy deployment of Big-Data
        applications. As a cloud based service, MongoSoup offers possibility of single instance
        databases on shared hosting servers, but also replica sets and sharding on dedicated
        systems.&nbsp;
      </D>
      <D lvl={3}>
        Key features of this project are: completely German based clusters, high
        performances and availability, SSL-encrypted access to MongoDB clusters, scalability from
        startup to enterprise level Mongosoup system is fully automated and our customers
        database is ready in less than 10 minutes after request is received. It also offers
        Pay-as-you-go pricing with monthly payments without long-term commitments.&nbsp;
      </D>
      <D lvl={2}>
        Customer’s
        web interface application offer functionalities for reviewing and managing existing plans and
        ordering new ones. It provides a full graphical interface for customers to take care of users
        administration, backup scheduling, system monitoring, viewing and editing database
        content.
        As a remotely working member of three man team (Dev-ops, Software developer
        and Designer) I had a great freedom in creating and implementing solutions for our web
        based customers interface.&nbsp;
      </D>
      <D lvl={3}>
        While cooperating with Dev-ops while implementing
        functionalities I also made my first dev-ops steps while learning about docker and AWS
        technologies. My main responsibility was development of the customers web interface and
        MongoDB provisioning system based on web applications.&nbsp;
      </D>
      <D lvl={2}>This role included implementing
        functionalities on both front-end and back-end and creating web services for functionalities
        like ordering, billing, backup, monitoring and provisioning.
      </D>
    </>),
  },
];

export const privateProjects = [
  {
    name: 'Lancer-Mobile',
    role: 'Full-Stack Developer',
    type: 'Private Project',
    tags: [
      'React-Native', 'Expo', 'Python', 'Flask', 'TypeScript', 'Docker',
    ],
    description: () => (
      <>
        <D lvl={1}>Platform for connecting Freelancers in the Production Industry with their potential employers.&nbsp;</D>
        <D lvl={2}>Freelancer registers with information about their skills and keeps their calendar up to date. Based on this information, employers can use our search engine to find Freelancers who meet their skills criteria and are available on selected dates.&nbsp;</D>
        <D lvl={3}>Employers can make queries based on Freelancer sector, profession, skills, location and/or availability.&nbsp;</D>
        <D lvl={3}>Mobile App was developed using React-Native strongly typed with TypeScript.&nbsp; </D>
        <D lvl={2}>Users can use mobile App in two different languages. Currently, English and Croatian languages are supported.  This project resulted in iOS and Android apps that are available for download on the AppStore and GooglePlay platforms in Croatian, Slovenian, Bosnian and Serbian markets.&nbsp;</D>
        <D lvl={3}>It was a one-man project and everything was implemented by me. In order to learn more about React Native, I myself implemented both iOS and Android mobile apps. I also learned how to manage these apps and do periodical updates through App Store Connect and Google Play Console.&nbsp;</D>
        <D lvl={3}>Backend API was implemented using Python Flask and data is persisted in MongoDB. Backend App and database are containerized with Docker, which makes deployment of new versions extremely quick and easy.&nbsp;</D>
        <D lvl={3}>The whole infrastructure is hosted in Linux server and is being monitored with SematextCloud metrics and logs monitoring.&nbsp;</D>
      </>
    ),
  },
  {
    name: 'DeckBuilder',
    role: 'Full Stack (one man project)',
    repository: 'https://github.com/Obee88/DeckBuilder',
    type: 'Private Project',
    tags: [
      'Java', 'Wicket', 'JavaScript', 'MongoDB',
    ],
    description: () => (
      <>
        <D lvl={1}>
          DeckBuilder is a web application for virtual cards gathering based on “Magic The
          Gathering” trading card game.&nbsp;
        </D>
        <D lvl={3}>
          This project has been continuously growing and developing
          during the period of three years. Part by part it growth to a cool web application with a lot
          of interesting functionalities containing thousands lines of Java code.&nbsp;
        </D>
        <D lvl={2}>Since the whole web
          development, deployment, user management and support was made by myself, it gave me
          a great experience in object oriented modeling, building a project architecture, refactoring,
          parsing HTML, crawling the internet for data, development of reusable wicket components.&nbsp;
        </D>
        <D lvl={3}>
          Application is used by internal group of 15 active users who use it frequently on a daily
          basis.
        </D>
      </>
    ),
  },
  {
    name: 'Minesweeper',
    role: 'Frontend Developer',
    type: 'Learning Technologies',
    repository: 'https://github.com/Obee88/minesweeper-react',
    preview: {
      url: 'https://obee88.github.io/minesweeper-react',
      width: 660,
      height: 400,
    },
    tags: [
      'React', 'TypeScript', 'Webpack',
    ],
    description: (showPreview) => (
      <>
        <D lvl={1}>Famous old game this time developed in web technologies</D>
        <D lvl={2}>&nbsp;and available for playing in browser</D>
        <D lvl={1}>.&nbsp;</D>
        <D lvl={3}>It was developed using React.js strongly typed with TypeScript.&nbsp;</D>
        <D lvl={2}>
          Goal was to bring full experience of playing this beloved old game in browser. Therefore original
          design was used and all functionalities were implemented exactly as I remember it from
          Win 3.1.&nbsp;
        </D>
        <D lvl={3}>It was a one man project and everything was implemented by myself.&nbsp;</D>
        <D lvl={3}>Click <button className="link" onClick={() => showPreview()}>here</button> to try it.</D>
      </>
    ),
  },
  {
    name: 'Set',
    role: 'Frontend Developer',
    type: 'Learning Technologies',
    preview: {
      url: ' https://obee88.github.io/set-react?autoStart=true',
      width: 660,
      height: 400,
    },
    repository: 'https://github.com/Obee88/set-react',
    tags: [
      'React', 'TypeScript', 'Redux', 'Webpack',
    ],
    description: (showPreview) => (
      <>
        <D lvl={1}>Another famous board game implemented for playing in browser.&nbsp;</D>
        <D lvl={2}>
          Only available for playing in single player this game is great for mental training.&nbsp;
        </D>
        <D lvl={3}>It was developed using React strongly typed with TypeScript.&nbsp;</D>
        <D lvl={2}>
          For those unfamiliar with rules there is a hint button availale. It displays
          the correct answer and explains what exactly you should be looking for. &nbsp;
        </D>
        <D lvl={3}>Try it. It was a one man project and everything was implemented by myself.&nbsp;</D>
        <D lvl={3}>Click <button className="link" onClick={() => showPreview()}>here</button> to try it.</D>
      </>
    ),
  },
];

const allProjects = [...workProjects, ...privateProjects];
export default allProjects;
