/* ==========================================================================
   CONTENT — edit everything about you here.
   ========================================================================== */

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';
export const RESUME_URL = `${BASE_PATH}/assets/Adarsh_Pradhan_Resume.pdf`;

export const PERSON = {
  name: 'Adarsh Pradhan R',
  initials: 'AP',
  role: 'Frontend and Full-Stack Developer',
  location: 'Bengaluru, India',
  availability: 'Open to frontend & full-stack roles · Bengaluru',
  email: 'adarshpradhan77@gmail.com',
  linkedin: 'https://linkedin.com/in/adarshpradhan02',
  github: 'https://github.com/Adarsh619',
  bio: 'I’m pursuing an MCA while building full-stack and AI-integrated applications: local RAG pipelines, PostgreSQL vector search, REST APIs, data analytics and automated tests. Before moving into development I worked in technical support and IT recruitment, which taught me to troubleshoot fast and communicate clearly with engineers and clients.'
};

export const NAV = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' }
];

export const HERO_WORDS = [
  ['Hi,'], ['I’m'], ['Adarsh.', 'accent'], ['I'], ['build'], ['AI-powered'], ['web'], ['apps.']
];

export const HERO_CHIPS = [
  { label: 'React', pos: 'chip-1' },
  { label: 'Next.js', pos: 'chip-2' },
  { label: 'TypeScript', pos: 'chip-3' },
  { label: 'pgvector', pos: 'chip-4' }
];

export const HERO_QUICK = [
  { label: 'Best project', title: 'Groundwork RAG', target: 'work' },
  { label: 'Stack', title: 'Skills at a glance', target: 'skills' },
  { label: 'Background', title: 'Experience', target: 'experience' },
  { label: 'Documents', title: 'Resume', target: 'resume' },
  { label: 'Hiring?', title: 'Contact me', target: 'contact' }
];

export const STATS = [
  { value: 5, label: 'Projects built' },
  { value: 3, label: 'Industry roles' },
  { value: 384, label: 'Embedding dimensions in Groundwork' },
  { value: 1, label: 'Claude certification' }
];

export const PROJECTS = [
  {
    name: 'Groundwork',
    title: 'RAG Knowledge Assistant',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'pgvector', 'Ollama'],
    bullets: [
      'Local RAG pipeline: private PDF upload, page-aware chunking, 384-dimensional MiniLM embeddings, PostgreSQL storage and cosine-similarity retrieval.',
      'Local Ollama answers with filename and page citations, insufficient-evidence handling, saved conversations and document-scoped chat.',
      'Ownership enforced with session checks and row-level security; automated regression tests; Documents, General AI and Auto modes.'
    ]
  },
  {
    name: 'FinanceFlow',
    title: 'Personal Finance Dashboard',
    stack: ['React', 'TypeScript', 'Vite', 'Recharts', 'pandas'],
    bullets: [
      'Transaction CRUD, budgets, savings goals, cash-flow charts and validated CSV import with duplicate detection.',
      'pandas analytics, Vitest tests, Playwright browser checks and TypeScript REST functions. Cloud integrations pending live verification.'
    ]
  },
  {
    name: 'Aizen Map',
    title: 'Bengaluru Discovery App',
    stack: ['Next.js', 'TypeScript', 'Leaflet'],
    liveUrl: 'https://aizenmap.netlify.app',
    bullets: [
      'Deployed responsive app with linked map and list views, search, filters, browser geolocation, saved favourites and light/dark themes.',
      'Source-linked curated listings, time-aware event visibility, keyboard controls and map-tile failure states.'
    ]
  },
  {
    name: 'PromptLab',
    title: 'AI Prompt Playground',
    stack: ['Next.js', 'React', 'TypeScript', 'Supabase'],
    bullets: [
      'Reusable prompts, model controls and browser-persisted conversations.',
      'Account flows and an authenticated OpenAI route (live AI currently paused).'
    ]
  },
  {
    name: 'Calorie Tracker',
    title: 'Daily Nutrition Log',
    stack: ['React', 'Vite', 'JavaScript', 'localStorage'],
    bullets: [
      'Daily meal logs, entry editing, calorie goals, date navigation, input validation and browser persistence.'
    ]
  }
];

export const SKILLS = {
  Frontend: ['JavaScript', 'TypeScript', 'React.js', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite'],
  'Backend & Data': ['Node.js', 'REST APIs', 'SQL', 'PostgreSQL', 'pgvector', 'Supabase Auth/Storage', 'MySQL'],
  'Applied AI': ['RAG', 'Embeddings', 'Semantic search', 'Prompt engineering', 'Ollama', 'Transformers.js'],
  'Testing & Tools': ['Vitest', 'Playwright', 'Git', 'GitHub', 'VS Code', 'Netlify', 'Leaflet'],
  'AI Dev Tools': ['OpenAI Codex', 'Claude Code', 'Cursor', 'ChatGPT'],
  Also: ['Java', 'Python basics', 'pandas CSV analytics']
};

export const EXPERIENCE = [
  {
    period: 'Jul 2026 – Sep 2026',
    location: 'Bengaluru',
    role: 'IT Recruiter',
    company: 'BlueRose Technologies',
    summary: 'Sourced and screened technical candidates, coordinated interviews and supported onboarding.'
  },
  {
    period: 'Sep 2025 – Jul 2026',
    location: 'Bengaluru',
    role: 'Associate Staffing Specialist',
    company: 'FirstMeridian Global Services',
    summary: 'Managed IT recruitment workflows, including IBM client requirements, using Zoho and SAP Fieldglass.'
  },
  {
    period: 'Mar 2024 – Jan 2025',
    location: 'Bengaluru',
    role: 'CRM / Technical Support',
    company: 'Altruist Technologies Pvt. Ltd.',
    summary: 'Resolved Airtel Black tickets covering troubleshooting, service requests, escalations and billing or refund cases.'
  }
];

export const EDUCATION = [
  { period: '2026 – 2028 (pursuing)', title: 'Master of Computer Applications', org: 'Amity University Online' },
  { period: '2017 – 2021', title: 'B.Tech, Computer Science & Engineering', org: 'Pydah College of Engineering & Technology' }
];

export const CERTIFICATIONS = [
  { period: '2026', title: 'Claude Academy: Claude 101', org: 'Anthropic' }
];

export const MARQUEE_ITEMS = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Supabase', 'pgvector', 'Ollama', 'Playwright', 'Tailwind', 'GSAP'];
