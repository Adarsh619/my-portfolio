/* ==========================================================================
   CONTENT — edit everything about you here.
   Screenshots go in public/projects/ (see public/projects/README.md).
   ========================================================================== */

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';
export const RESUME_URL = `${BASE_PATH}/assets/Adarsh_Pradhan_Resume.pdf`;
/** Prefix a path under /public so it works on GitHub Pages sub-paths. */
export const asset = (path) => `${BASE_PATH}${path}`;

export const PERSON = {
  name: 'Adarsh Pradhan R',
  initials: 'AP',
  role: 'Frontend and Full-Stack Developer',
  location: 'Bengaluru, India',
  availability: 'Open to frontend & full-stack roles · Bengaluru',
  email: 'adarshpradhan77@gmail.com',
  linkedin: 'https://linkedin.com/in/adarshpradhan02',
  github: 'https://github.com/Adarsh619',
  bio: 'I build web apps that are fast, clear and easy to use. Right now I’m doing my MCA and building projects with AI features, like a tool that answers questions from your own PDFs. Before coding full-time, I worked in tech support and recruitment, so I’m good at understanding what people need and explaining things clearly.'
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
  { value: 3, label: 'Work roles' },
  { value: 384, label: 'Vector size in my AI search' },
  { value: 1, label: 'Certification' }
];

/* images: files in public/projects/, first one is the card cover.
   liveUrl / codeUrl: set to null if there is no link. */
export const PROJECTS = [
  {
    slug: 'groundwork',
    name: 'Groundwork',
    title: 'Chat with your own documents',
    tagline: 'A private AI assistant that answers from your PDFs and shows exactly which page each answer came from.',
    year: '2026',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'pgvector', 'Ollama'],
    problem: 'General chatbots can invent answers, and they can’t see private files. People need answers they can check.',
    solution: 'You upload a PDF. The app splits it into pages, finds the passages that match your question, and answers only from them. Every answer cites the file and page. If the document doesn’t contain the answer, the assistant says so instead of guessing.',
    highlights: [
      'Local RAG pipeline: page-aware chunking, 384-dimensional embeddings, PostgreSQL storage and cosine-similarity search',
      'Answers with filename and page citations, plus an “insufficient evidence” response',
      'Saved conversations and document-scoped chat, with Documents, General AI and Auto modes',
      'Row-level security and session checks so each user only sees their own files',
      'Automated regression tests'
    ],
    images: ['/projects/groundwork-1.png', '/projects/groundwork-2.png'],
    liveUrl: null,
    codeUrl: null
  },
  {
    slug: 'financeflow',
    name: 'FinanceFlow',
    title: 'Personal finance dashboard',
    tagline: 'Track spending, budgets and savings goals, with charts built from your own transaction data.',
    year: '2025',
    tags: ['React', 'TypeScript', 'Vite', 'Recharts', 'pandas'],
    problem: 'Bank statements are hard to read, and budgeting apps often need an account login to show anything useful.',
    solution: 'A dashboard that works from a CSV export. It imports transactions, checks each row, skips duplicates, and turns the data into cash-flow charts, budgets and savings goals.',
    highlights: [
      'Transaction add, edit and delete, with budgets and savings goals',
      'Validated CSV import with duplicate detection',
      'Cash-flow charts with Recharts',
      'pandas analytics, Vitest unit tests and Playwright browser checks',
      'TypeScript REST functions. Cloud sync is still being verified.'
    ],
    images: ['/projects/financeflow-1.png'],
    liveUrl: null,
    codeUrl: null
  },
  {
    slug: 'aizen-map',
    name: 'Aizen Map',
    title: 'Discover places in Bengaluru',
    tagline: 'A map and list of cafés, events and places, with search, filters and your live location.',
    year: '2025',
    tags: ['Next.js', 'TypeScript', 'Leaflet'],
    problem: 'Finding something nearby means jumping between maps, listings and event pages that don’t agree with each other.',
    solution: 'One page with a linked map and list. Filter by what you want, see what’s near you, save favourites, and only see events that are still on.',
    highlights: [
      'Linked map and list views with search, filters and browser geolocation',
      'Saved favourites and light/dark themes',
      'Curated listings with source links',
      'Time-aware event visibility',
      'Keyboard controls, plus clear fallback states when map tiles fail'
    ],
    images: ['/projects/aizen-map-1.png'],
    liveUrl: 'https://aizenmap.netlify.app',
    codeUrl: null
  },
  {
    slug: 'promptlab',
    name: 'PromptLab',
    title: 'AI prompt playground',
    tagline: 'Write, reuse and test prompts with model settings and saved conversations.',
    year: '2025',
    tags: ['Next.js', 'React', 'TypeScript', 'Supabase'],
    problem: 'Prompts get lost in chat history, and changing settings means starting over.',
    solution: 'A workspace for reusable prompts, model controls and saved chats, with accounts so work stays put.',
    highlights: [
      'Reusable prompts and model controls',
      'Browser-saved conversations',
      'Account flows with Supabase',
      'Authenticated OpenAI route (live AI is paused for now)'
    ],
    images: ['/projects/promptlab-1.png'],
    liveUrl: null,
    codeUrl: null
  },
  {
    slug: 'calorie-tracker',
    name: 'Calorie Tracker',
    title: 'Daily food and calorie log',
    tagline: 'Log meals, set a daily goal and see progress by date.',
    year: '2024',
    tags: ['React', 'Vite', 'JavaScript', 'localStorage'],
    problem: 'Calorie apps are often cluttered and push accounts before you can try them.',
    solution: 'A simple, fast log that saves in the browser. Add meals, edit them, set a goal and move between days.',
    highlights: [
      'Daily meal logs with editing and date navigation',
      'Calorie goals with input validation',
      'Data kept in the browser, no account needed'
    ],
    images: ['/projects/calorie-tracker-1.png'],
    liveUrl: null,
    codeUrl: null
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
