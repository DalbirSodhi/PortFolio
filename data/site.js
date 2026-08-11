export const site = {
  name: 'Dalbir Singh',
  initials: 'DS',
  role: 'Software Developer',
  location: 'British Columbia, Canada',
  availability: 'Open to software opportunities',
  headline: 'I build products from interface to infrastructure.',
  intro:
    'Full-stack software developer with an engineering background, building across mobile, web, backend APIs, cloud infrastructure and applied AI.',

  // Add your real links when ready. Empty values are hidden automatically.
  links: {
    github: '',
    linkedin: '',
    email: '',
    resume: ''
  },

  // Drop your portrait into /public and set this to e.g. "/dalbir.jpg".
  portrait: '',

  disciplines: [
    'Mobile Development',
    'Frontend',
    'Backend APIs',
    'Cloud & DevOps',
    'Applied AI'
  ],

  capabilities: [
    {
      number: '01',
      title: 'Frontend & Mobile',
      text: 'Responsive, state-driven interfaces with reusable components, navigation, API integration, persistence and polished interaction states.',
      tags: ['React Native', 'Expo', 'JavaScript', 'HTML/CSS', 'SwiftUI', 'Flutter']
    },
    {
      number: '02',
      title: 'Backend & Data',
      text: 'REST APIs and service layers with authentication, middleware, validation, data models, caching and predictable response contracts.',
      tags: ['Node.js', 'Express', 'MongoDB', 'Redis', 'JWT', 'bcrypt']
    },
    {
      number: '03',
      title: 'Cloud & Delivery',
      text: 'Hands-on deployment work spanning Linux servers, containers, reverse proxies, process management and cloud-hosted application architecture.',
      tags: ['AWS EC2', 'Docker', 'Apache', 'PM2', 'Vercel', 'Git/GitHub']
    },
    {
      number: '04',
      title: 'Applied AI',
      text: 'Practical AI features with computer vision, structured model outputs, confidence handling, fallback behavior and application-level guardrails.',
      tags: ['OpenAI Vision', 'YOLO', 'Prompt Design', 'Guardrails', 'Validation']
    }
  ],

  projects: [
    {
      slug: 'fixbee',
      visual: 'vision',
      categories: ['Mobile', 'Backend', 'AI'],
      title: 'FixBee',
      subtitle: 'Smart home repair assistant',
      description:
        'A React Native product that analyzes home-repair photos and turns AI output into structured severity, recommendations, DIY guidance and professional-help flows.',
      role: 'Full-stack / AI contributor',
      stack: ['React Native', 'Expo', 'Node.js', 'MongoDB', 'OpenAI Vision', 'YOLO'],
      highlights: [
        'Worked across mobile UI, backend analysis services and AI-response handling.',
        'Added confidence, category and severity guardrails for safer predictable responses.',
        'Connected analysis states to recommendation and emergency UI flows.'
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
      stack: ['React Native', 'Expo Router', 'TheMealDB API', 'FlatList'],
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
      stack: ['React Native', 'Expo Router', 'AsyncStorage', 'CRUD'],
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
      stack: ['Node.js', 'Express', 'JWT', 'bcrypt', 'REST'],
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
      title: 'Cloud Deployment Lab',
      subtitle: 'Containerized Node architecture',
      description:
        'A deployment workflow combining cloud-hosted Node.js services, Docker, Redis, Apache reverse proxying and Linux server operations on AWS EC2.',
      role: 'Backend / cloud developer',
      stack: ['AWS EC2', 'Docker', 'Node.js', 'Redis', 'Apache', 'PM2'],
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
      title: 'SwiftUI Student Directory',
      subtitle: 'Data-driven native iOS UI',
      description:
        'A SwiftUI refactor that replaces repeated hardcoded screens with a Student model, reusable row/detail views and dynamic list rendering.',
      role: 'iOS developer',
      stack: ['Swift', 'SwiftUI', 'Identifiable', 'ForEach'],
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
      stack: ['Flutter', 'Dart', 'StatefulWidget', 'setState', 'Navigator'],
      highlights: [
        'Managed UI updates with setState.',
        'Worked with Stateful and Stateless widget responsibilities.',
        'Implemented screen navigation with push/pop.'
      ]
    }
  ],

  journey: [
    {
      year: 'Now',
      title: 'Web & Mobile App Development',
      place: 'Langara College',
      text: 'Building projects across mobile development, backend APIs, cloud deployment, security and native application development.'
    },
    {
      year: 'Build',
      title: 'Project-driven development',
      place: 'Team + individual work',
      text: 'Git branching, pull requests, Jira-style tickets, reusable components, API contracts, debugging and iterative product delivery.'
    },
    {
      year: 'Foundation',
      title: 'Electrical Engineering',
      place: 'Jammu University',
      text: 'A technical foundation in systems thinking, troubleshooting and engineering problem solving that now carries into software.'
    }
  ]
};
