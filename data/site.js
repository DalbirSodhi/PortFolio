export const site = {
  name: 'Dalbir Singh',
  initials: 'DS',
  role: 'Software Developer',
  location: 'British Columbia, Canada',
  availability: 'Open to software opportunities',
  headline: 'I build products from interface to infrastructure.',
  intro:
    'Full-stack software developer with an engineering background, building across mobile, web, backend APIs, system design, cloud infrastructure and applied AI.',

  links: {
    github: 'https://github.com/DalbirSodhi',
    linkedin: 'https://www.linkedin.com/in/dalbir-singh-tech',
    email: '',
    resume: '',
    source: 'https://github.com/DalbirSodhi/Portfolio'
  },

  portrait: '/Dalbir.jpg',

  disciplines: [
    'Frontend & Mobile',
    'Backend APIs',
    'System Design',
    'Cloud & DevOps',
    'Applied AI'
  ],

  capabilities: [
    {
      title: 'Frontend & Mobile',
      text:
        'Responsive, state-driven interfaces with reusable components, navigation, API integration, persistence and polished interaction states.',
      tags: [
        'React Native',
        'Expo',
        'JavaScript',
        'HTML/CSS',
        'SwiftUI',
        'Flutter'
      ]
    },
    {
      title: 'Backend & Data',
      text:
        'REST APIs and service layers with authentication, middleware, validation, data models, caching and predictable response contracts.',
      tags: [
        'Node.js',
        'Express',
        'MongoDB',
        'Firebase',
        'Redis',
        'JWT',
        'bcrypt'
      ]
    },
    {
      title: 'System Design & Architecture',
      text:
        'Designing application flows across clients, APIs, data stores and infrastructure with clear service boundaries, authentication flows and failure handling.',
      tags: [
        'System Design',
        'REST Architecture',
        'MVC',
        'Layered Design',
        'Data Flow',
        'API Contracts'
      ]
    },
    {
      title: 'Cloud & Delivery',
      text:
        'Hands-on deployment work spanning Linux servers, containers, reverse proxies, process management and cloud-hosted application architecture.',
      tags: [
        'AWS EC2',
        'Docker',
        'Apache',
        'PM2',
        'Vercel',
        'Git/GitHub'
      ]
    },
    {
      title: 'Applied AI',
      text:
        'Practical AI features with computer vision, structured model outputs, confidence handling, fallback behavior and application-level guardrails.',
      tags: [
        'OpenAI Vision',
        'YOLO',
        'Prompt Design',
        'Guardrails',
        'Validation'
      ]
    }
  ],

  projects: [
    {
      slug: 'rentique',
      visual: 'marketplace',
      categories: ['Web', 'Backend'],
      title: 'Rentique',
      subtitle: 'Peer-to-peer fashion rental marketplace',
      description:
        'A peer-to-peer fashion marketplace built around Firebase authentication, MVC-oriented client architecture and live user-to-user messaging.',
      role: 'Frontend / full-stack contributor',
      stack: [
        'JavaScript ES6+',
        'CSS3',
        'Firebase Auth',
        'MVC Architecture',
        'Live Chat',
        'Firestore Database'
      ],
      link: 'https://github.com/DalbirSodhi',
      linkLabel: 'View contribution',
      highlights: [
        'MVC-structured client architecture',
        'Authentication, onboarding and profile flows',
        'Live user-to-user marketplace chat'
      ]
    },

    {
      slug: 'shelfsafe',
      visual: 'inventory',
      categories: ['Web', 'Backend', 'AI'],
      title: 'ShelfSafe',
      subtitle: 'Intelligent inventory & expiry management',
      description:
        'An intelligent inventory platform combining voice control, camera barcode capture, protected workflows and expiry management.',
      role: 'Full-stack contributor',
      stack: [
        'React',
        'Node.js',
        'MongoDB',
        'JWT',
        'Deepgram',
        'Groq',
        'Camera Barcode',
        'NodeMailer'
      ],
      link: 'https://github.com/DalbirSodhi',
      linkLabel: 'View contribution',
      highlights: [
        'Voice control with Deepgram + Groq',
        'Camera barcode scanning for product lookup',
        'Protected inventory and expiry workflows'
      ]
    },

    {
      slug: 'fixbee',
      visual: 'vision',
      categories: ['Mobile', 'Backend', 'AI'],
      title: 'FixBee',
      subtitle: 'AI-assisted smart home repair platform',
      description:
        'A React Native repair assistant combining OpenAI vision analysis, YOLO object detection and structured safety guardrails.',
      role: 'Full-stack / AI contributor',
      stack: [
        'React Native',
        'Redis',
        'Node.js',
        'MongoDB',
        'OpenAI Vision',
        'YOLO'
      ],
      link: 'https://github.com/DalbirSodhi',
      linkLabel: 'View contribution',
      highlights: [
        'OpenAI multimodal issue analysis',
        'YOLO-based object detection pipeline',
        'Guardrails, severity logic and Cache Optimisation'
      ]
    },

    {
      slug: 'meal-explorer',
      visual: 'meals',
      categories: ['Mobile', 'API'],
      title: 'Meal Explorer',
      subtitle: 'API-powered food discovery',
      description:
        'A multi-screen React Native application for discovering meals by category, fetching remote data and navigating into dynamic detail views.',
      role: 'Mobile developer',
      stack: [
        'React Native',
        'Expo Router',
        'TheMealDB API',
        'FlatList'
      ],
      link: 'https://github.com/DalbirSodhi/Meal-Explorer',
      linkLabel: 'View repository',
      highlights: [
        'Built category → list → detail navigation with route parameters.',
        'Used reusable components, loading states and remote API data.',
        'Rendered scalable result lists with FlatList.'
      ]
    },

    {
      slug: 'mealmate',
      visual: 'planner',
      categories: ['Mobile', 'Data'],
      title: 'MealMate',
      subtitle: 'Local-first meal planner',
      description:
        'A CRUD-focused mobile application for creating, editing, filtering and managing meal plans with persistent on-device storage.',
      role: 'Mobile developer',
      stack: [
        'React Native',
        'Expo Router',
        'AsyncStorage',
        'CRUD'
      ],
      link: 'https://github.com/DalbirSodhi/MealMate',
      linkLabel: 'View repository',
      highlights: [
        'Separated storage operations from UI logic.',
        'Implemented add, edit, delete and detail flows.',
        'Persisted user-created meals locally with AsyncStorage.'
      ]
    },

    {
      slug: 'auth-api',
      visual: 'auth',
      categories: ['Backend', 'Security'],
      title: 'Authentication API',
      subtitle: 'JWT + bcrypt protected routes',
      description:
        'An Express authentication service demonstrating credential verification, password hashing, signed tokens, bearer authentication and protected endpoints.',
      role: 'Backend developer',
      stack: [
        'Node.js',
        'Express',
        'JWT',
        'bcrypt',
        'REST'
      ],
      link: 'https://github.com/DalbirSodhi/My-Projects',
      linkLabel: 'View GitHub projects',
      highlights: [
        'Implemented login and protected-profile request flow.',
        'Verified passwords with bcrypt instead of plain-text storage.',
        'Used middleware to validate Authorization bearer tokens.'
      ]
    },

    {
      slug: 'cloud-deployment',
      visual: 'cloud',
      categories: ['Backend', 'Cloud'],
      title: 'Cloud Deployment',
      subtitle: 'Containerized Node architecture',
      description:
        'A deployment workflow combining cloud-hosted Node.js services, Docker, Redis, Apache reverse proxying and Linux server operations on AWS EC2.',
      role: 'Backend / cloud developer',
      stack: [
        'AWS EC2',
        'Docker',
        'Node.js',
        'Redis',
        'Apache',
        'PM2'
      ],
      link: 'https://github.com/DalbirSodhi/My-Projects',
      linkLabel: 'View GitHub projects',
      highlights: [
        'Configured Node services on an EC2 Linux environment.',
        'Worked with Docker Compose and a containerized Redis service.',
        'Set up Apache reverse-proxy and process-management concepts.'
      ]
    },

    {
      slug: 'swiftui-students',
      visual: 'swift',
      categories: ['Mobile', 'iOS'],
      title: 'SwiftUI Directory',
      subtitle: 'Data-driven native iOS UI',
      description:
        'A SwiftUI refactor that replaces repeated hardcoded screens with a Student model, reusable row/detail views and dynamic list rendering.',
      role: 'iOS developer',
      stack: [
        'Swift',
        'SwiftUI',
        'Identifiable',
        'ForEach'
      ],
      link: 'https://github.com/DalbirSodhi/My-Projects',
      linkLabel: 'View GitHub projects',
      highlights: [
        'Created a reusable Student data model.',
        'Rendered rows dynamically with ForEach.',
        'Passed selected model data into reusable detail views.'
      ]
    },

    {
      slug: 'flutter-mood',
      visual: 'mood',
      categories: ['Mobile', 'Flutter'],
      title: 'Flutter Mood Tracker',
      subtitle: 'Stateful mobile interaction',
      description:
        'A Flutter learning application focused on widget composition, state updates, navigation and the relationship between Stateful and Stateless UI.',
      role: 'Flutter developer',
      stack: [
        'Flutter',
        'Dart',
        'StatefulWidget',
        'setState',
        'Navigator'
      ],
      link: 'https://github.com/DalbirSodhi/My-Projects',
      linkLabel: 'View GitHub projects',
      highlights: [
        'Managed UI updates with setState.',
        'Worked with Stateful and Stateless widget responsibilities.',
        'Implemented screen navigation with push/pop.'
      ]
    }
  ],

  githubProjects: [
    {
      name: 'Pocket-Mate',
      description:
        'Additional JavaScript project from my public GitHub work.',
      href: 'https://github.com/DalbirSodhi/Pocket-Mate'
    },
    {
      name: 'UNIT-TEST-',
      description:
        'Course project focused on software testing and JavaScript development practice.',
      href: 'https://github.com/DalbirSodhi/UNIT-TEST-'
    },
    {
      name: 'My-Projects',
      description:
        'A broader archive of projects and exercises completed during college.',
      href: 'https://github.com/DalbirSodhi/My-Projects'
    },
    {
      name: 'interviewPrep',
      description:
        'A public repository used for technical interview preparation.',
      href: 'https://github.com/DalbirSodhi/interviewPrep'
    }
  ],

  journey: [
    {
      year: 'Now',
      title: 'Web & Mobile App Development',
      place: 'Langara College',
      text:
        'Building projects across mobile development, backend APIs, cloud deployment, security, system design and native application development.'
    },
    {
      year: 'Build',
      title: 'Project-driven development',
      place: 'Team + individual work',
      text:
        'Git branching, pull requests, Jira-style tickets, reusable components, API contracts, debugging and iterative product delivery.'
    },
    {
      year: 'Foundation',
      title: 'Electrical Engineering',
      place: 'Jammu University',
      text:
        'A technical foundation in systems thinking, troubleshooting and engineering problem solving that now carries into software.'
    }
  ]
};