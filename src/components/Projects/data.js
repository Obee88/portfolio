import D from '../common/Detail';

export const workProjects = [
  {
    name: 'Developer Security Platform, web app and API',
    employer: 'Archipelo',
    type: 'Professional Assignment',
    role: 'Interface Engineer, then App Team Lead',
    period: 'Oct 2024 - Aug 2026',
    tags: [
      'TypeScript', 'React', 'AI Agents', 'Claude Code', 'Team Lead',
    ],
    description: (<>
      <D lvl={1}>
        A developer security platform, where I led the app team: five engineers owning the
        web application and the API behind it.&nbsp;
      </D>
      <D lvl={2}>
        I joined as an interface engineer while the company was still in stealth and moved
        into leading the team, which meant owning the product surface end to end rather than
        a slice of it.&nbsp;
      </D>
      <D lvl={2}>
        We rewrote the application and the API from scratch as AI capability landed in the
        product. The code we replaced carried leftovers from the company's earlier changes of
        direction, and it was in the way of what the product was becoming.&nbsp;
      </D>
      <D lvl={1}>
        I also built the company's software factory, the system for running AI coding work
        through defined stages rather than ad hoc prompting.&nbsp;
      </D>
      <D lvl={2}>
        It attaches to a repository read-only and adds nothing to it. Six workflows, from
        turning a requirement into a specification through implementation, verification,
        review and release. Eighteen specialist roles with non-overlapping authority, so the
        agent that builds something is never the one that signs it off.&nbsp;
      </D>
      <D lvl={3}>
        The rules that carry it are simple and strict: no implementation without a
        specification, no merge without verification, and an acceptance criterion with no
        covering test is a gap rather than a pass. Verification produces an evidence artifact
        tied to a revision, reviewable by someone who was not there for the run. Agents open
        pull requests and never merge; branch protection, not the tooling, is the real
        control.&nbsp;
      </D>
      <D lvl={3}>
        I took the question of how agents should authenticate to GitHub to a company decision:
        five options with their trade-offs, ending in engineer-scoped tokens, commit signing
        verified against GitHub itself rather than assumed from local configuration, and
        sensitive CI paths routed to named human review.&nbsp;
      </D>
      <D lvl={2}>
        I built it in five weeks and ran my own ticket work through it.&nbsp;
      </D>
    </>),
  },
  {
    name: 'Sematext Cloud',
    employer: 'Sematext',
    type: 'Professional Assignment',
    role: 'Full Stack Engineer',
    period: 'Jan 2018 - Oct 2024',
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
      <D lvl={1}>
        The part I am proudest of is the two shared components the rest of the application was
        built on: the data table and the flyout panel.&nbsp;
      </D>
      <D lvl={2}>
        The table is a base component plus composable wrappers, so each module takes only the
        behaviour it needs, sorting, filtering, selection, inline editing, expandable rows,
        column widths remembered per user. Rendering is virtualised, because these tables list
        thousands of hosts and containers. A typed column library turns a new table into
        configuration rather than implementation.&nbsp;
      </D>
      <D lvl={2}>
        The flyout is a panel with its own router. It renders existing pages inside itself and
        moves between them without losing the page underneath, which is what makes pivoting
        around infrastructure work: pod to host to processes to logs, with the original list
        still there.&nbsp;
      </D>
      <D lvl={3}>
        Its navigation history is encoded per query parameter into the URL, so the path you
        took through it is bookmarkable and shareable, browser back steps through it, and the
        whole thing survives a reload. Nested history inside a URL is a genuinely interesting
        problem and the solution turned out to be small.&nbsp;
      </D>
      <D lvl={2}>
        Both ended up adopted across most of the application, by modules other people owned.
        That is the result I would point at: not how much of it there is, but what other teams
        chose to build on.&nbsp;
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
    name: 'LIPA',
    role: 'Everything (one man project)',
    type: 'Private Project',
    period: 'Apr 2026 - present',
    tags: [
      'TypeScript', 'React', 'Node.js', 'Fastify', 'Python', 'Document AI',
      'PostgreSQL', 'Prisma', 'Redis', 'React Native', 'Docker',
    ],
    description: () => (
      <>
        <D lvl={1}>
          LIPA turns a photograph of an invoice into structured, validated data that Croatian
          bookkeeping software can actually accept.&nbsp;
        </D>
        <D lvl={2}>
          You point a phone at an invoice; what comes back is a proposal you confirm rather
          than a form you fill in. It is built for Croatian rules from the ground up, OIB
          validation, PDV handling and the e-Racun electronic invoice standard, and exports to
          e-Racun XML and JSON.&nbsp;
        </D>
        <D lvl={3}>
          It is aimed at small businesses, bookkeeping firms and freelancers who do their own
          books, which in Croatia is a lot of people and a lot of manual typing.&nbsp;
        </D>
        <D lvl={2}>
          It is a cloud platform rather than a script: multi-tenant organisations, token-based
          authentication, a job queue, object storage, subscription and bank-transfer billing,
          a mobile capture app, an admin dashboard, and a container deployment behind a reverse
          proxy with automatic certificates.&nbsp;
        </D>
        <D lvl={3}>
          Eight modules, deliberately isolated from each other: a Node and Fastify API in
          TypeScript, a React and Vite web app, a Python worker for the document AI pipeline, a
          shared Prisma schema over PostgreSQL, a standalone admin app, a React Native capture
          app, a framework-free shared package holding the invoice contract and its validation,
          and the infrastructure configuration.&nbsp;
        </D>
        <D lvl={1}>
          The interesting part is not the AI call. It is everything after it.&nbsp;
        </D>
        <D lvl={2}>
          Document AI gives you fields and confidence scores. It does not give you a correct
          invoice: totals that do not add up, VAT split across rates that has to be inferred,
          deposits and return fees that belong in one place and appear in another.&nbsp;
        </D>
        <D lvl={3}>
          So between the raw read and something a bookkeeper can confirm sits a staged
          derivation pipeline of about twenty-five steps. A consistency check on the read that
          proposes repairs, provisional totals, detection of what basis the line items are
          stated on, assignment of amounts to VAT brackets through a search that only commits
          when the answer is unique, splitting of return fees, a derivation fixpoint, a
          validation pass, and finally a ranking that tells a human which three fields are
          worth their attention instead of forty that are not.&nbsp;
        </D>
        <D lvl={2}>
          Alongside it I built a playground: an internal tool that runs a single stage in
          isolation, diffs two proposals field by field, and exports any run as a regression
          fixture.&nbsp;
        </D>
        <D lvl={3}>
          That tool is the reason the pipeline can keep changing. A probabilistic system that
          nobody can inspect stage by stage gets frozen the moment it works, because no one can
          tell what a change broke. Being able to replay a real invoice through one stage and
          see exactly what moved is what makes it safe to keep improving.&nbsp;
        </D>
        <D lvl={3}>
          Currently running on staging, ahead of launch.&nbsp;
        </D>
      </>
    ),
  },
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
