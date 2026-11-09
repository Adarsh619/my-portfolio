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
  bio: 'I build web apps that are fast, clear and easy to use. Right now I’m a Full-Stack Developer Intern at Nexvia Technologies, where I built and deployed a Multi-Tenant SaaS Project Management Platform (TaskFlow). I’m also doing my MCA and building projects with AI features, like a tool that answers questions from your own PDFs. Before coding full-time, I worked in tech support and recruitment, so I’m good at understanding what people need and explaining things clearly.'
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
  ['Hi,'], ['I’m'], ['Adarsh.', 'accent'], ['I'], ['build']
];

export const HERO_ROTATE = ['RAG apps.', 'SaaS platforms.', 'React UIs.', 'full-stack apps.', 'websites.', 'dashboards.'];

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
  { value: 7, label: 'Projects built' },
  { value: 4, label: 'Work roles' },
  { value: 384, label: 'Vector size in my AI search' },
  { value: 2, label: 'Certifications' }
];

/* images: files in public/projects/, first one is the card cover.
   liveUrl / codeUrl: set to null if there is no link. */
export const PROJECTS = [
  {
    slug: 'taskflow',
    name: 'Multi-Tenant SaaS Project Management Platform',
    title: 'TaskFlow: a Jira-style workspace for every company',
    tagline: 'A Jira-style workspace where every company gets its own boards, sprints and billing, kept fully separate from every other company.',
    year: 'Internship · Live',
    tags: ['Django', 'React', 'PostgreSQL', 'Celery', 'Redis', 'Stripe', 'Docker'],
    problem: 'Teams need one place to plan and track work. A SaaS tool also has to keep each company’s data completely separate, give each person only the access their role allows, and charge for plans without double billing.',
    solution: 'My first internship project at Nexvia Technologies. Each company signs up and gets its own workspace with projects, drag-and-drop Kanban boards, sprints, custom workflows, an audit log, webhooks and Stripe subscription billing. Every request is checked against the company it belongs to, so one company can’t reach another’s data, even by guessing IDs. Try it with the demo login shown on the sign-in page.',
    highlights: [
      'Shared-schema multi-tenancy: every query is scoped to the workspace and every linked ID is validated against it',
      'Four roles per workspace (viewer, member, admin, owner), with pages that explain why an action isn’t allowed',
      'Drag-and-drop Kanban with optimistic updates, custom workflows whose allowed transitions are enforced by the API, and sprints',
      'Stripe Checkout and Customer Portal with signed webhooks that are safe against duplicate or late events, plus plan limits',
      'Celery and Redis jobs for HMAC-signed webhooks with retries and an SSRF guard, email reminders and weekly reports',
      'Append-only audit log with field-level diffs and CSV export',
      '185 backend tests at 96% coverage and 62 frontend tests. The CI/CD pipeline smoke-tests the full Docker stack, publishes images and deploys every tested push to Render'
    ],
    images: ['/projects/taskflow-1.png', '/projects/taskflow-2.png'],
    liveUrl: 'https://taskflow-fs04.onrender.com',
    codeUrl: 'https://github.com/Adarsh619/Rout_Adarsh_Pradhan_Capstone_Projects/tree/main/FS-04'
  },
  {
    slug: 'groundwork',
    name: 'Groundwork',
    title: 'Chat with your own documents',
    tagline: 'A private AI assistant that answers from your PDFs and shows exactly which page each answer came from.',
    year: 'AI app',
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
    codeUrl: 'https://github.com/Adarsh619/RAG-Knowledge-Assistant'
  },
  {
    slug: 'financeflow',
    name: 'FinanceFlow',
    title: 'Personal finance dashboard',
    tagline: 'Track spending, budgets and savings goals, with charts built from your own transaction data.',
    year: 'Dashboard',
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
    slug: 'portfolio',
    name: 'Developer Portfolio',
    title: 'This animated 3D portfolio',
    tagline: 'The site you’re on: scroll-driven animation, a 3D hero and a quick-find menu, deployed automatically.',
    year: 'Portfolio',
    tags: ['Next.js 15', 'React 19', 'GSAP', 'Lenis', 'Motion', 'Three.js'],
    problem: 'A CV on paper doesn’t show how you build. A portfolio should let a recruiter see the work and find what they need in seconds.',
    solution: 'A static Next.js site with smooth scroll-driven animation, a 3D hero, light and dark modes, and a quick-find menu so visitors can jump straight to a project, the resume or contact details.',
    highlights: [
      'Next.js App Router, exported as a static site and deployed to GitHub Pages through a GitHub Actions workflow (Netlify config included)',
      'GSAP ScrollTrigger and Lenis smooth scrolling, Motion layout transitions, a React Three Fiber 3D hero orb and a custom canvas particle background',
      'Ctrl/Cmd+K quick navigation and an embedded resume viewer with PDF download',
      'One data file drives all projects, skills and experience'
    ],
    images: ['/projects/portfolio-1.png'],
    liveUrl: 'https://adarsh619.github.io/my-portfolio/',
    codeUrl: 'https://github.com/Adarsh619/my-portfolio'
  },
  {
    slug: 'aizen-map',
    name: 'Aizen Map',
    title: 'Discover places in Bengaluru',
    tagline: 'A linked map and list of cafés, food, malls and screenings across Bengaluru, with search, filters and your live location.',
    year: 'Maps · Live',
    tags: ['Next.js', 'TypeScript', 'Leaflet', 'Tailwind CSS', 'Netlify'],
    problem: 'Finding something nearby means jumping between maps, listings and event pages that don’t agree with each other.',
    solution: 'One page with a linked map and list. Pick All, Tonight or Explore, filter by category, neighbourhood or date, see what’s near you, save favourites, and only see events that are still on. Every listing links to its source, and it’s live on Netlify.',
    highlights: [
      'Linked Leaflet map and feed: selecting a pin or a card opens the same listing',
      'Search by place, category, neighbourhood or alias, with suggestions, category and date filters, and opt-in “Near me” geolocation',
      '61 curated picks across 20+ neighbourhoods, each with its source link and Google Maps directions for driving, transit or walking',
      'Time-aware events checked in Asia/Kolkata time: past events disappear on their own, even across midnight',
      'Favourites and the light/dark choice are saved in the browser, so there’s no account to create',
      'Responsive layout with an icon sidebar on desktop and a drawer plus feed/map switch on phones',
      'Keyboard controls, reduced-motion support, and clear fallback states when map tiles fail. No ratings are invented'
    ],
    images: ['/projects/aizen-map-1.png', '/projects/aizen-map-2.jpg', '/projects/aizen-map-3.jpg'],
    liveUrl: 'https://aizenmap.netlify.app',
    codeUrl: 'https://github.com/Adarsh619/Development-projects/tree/main/aizen-map'
  },
  {
    slug: 'promptlab',
    name: 'PromptLab',
    title: 'AI prompt playground',
    tagline: 'Write, reuse and test prompts with model settings and saved conversations.',
    year: 'AI tool',
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
    year: 'Utility',
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
  Frontend: ['JavaScript', 'TypeScript', 'React.js', 'Next.js (App Router)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite'],
  'Animation & 3D': ['GSAP + ScrollTrigger', 'Lenis smooth scroll', 'Motion', 'Three.js', 'React Three Fiber', 'Canvas API'],
  'Backend & Data': ['Node.js', 'Django', 'Django REST Framework', 'REST APIs', 'SQL', 'PostgreSQL', 'pgvector', 'Redis', 'Celery', 'Stripe Billing', 'Supabase Auth/Storage', 'MySQL'],
  'Applied AI': ['RAG', 'Embeddings', 'Semantic search', 'Prompt engineering', 'Ollama', 'Transformers.js'],
  'Testing & Tools': ['Vitest', 'Playwright', 'pytest', 'Docker', 'Docker Compose', 'nginx', 'Git', 'GitHub', 'GitHub Actions', 'GitHub Pages', 'Netlify', 'Render', 'VS Code', 'Leaflet'],
  'AI Dev Tools': ['OpenAI Codex', 'Claude Code', 'Cursor', 'ChatGPT'],
  Also: ['Java', 'Python', 'pandas CSV analytics']
};

export const EXPERIENCE = [
  {
    period: 'Oct 2026 – Present',
    location: 'Bengaluru',
    role: 'Full-Stack Developer Intern',
    company: 'Nexvia Technologies',
    summary: 'Building full-stack features end to end. Shipped a Multi-Tenant SaaS Project Management Platform (TaskFlow) with Django, React, Celery and Stripe billing, with CI/CD and a live deployment.'
  },
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
  { period: '2026', title: 'Claude Academy: Claude Code 101', org: 'Anthropic' },
  { period: '2026', title: 'Claude Academy: Claude 101', org: 'Anthropic' }
];

export const MARQUEE_ITEMS = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Django', 'Supabase', 'pgvector', 'Ollama', 'Docker', 'Playwright', 'Tailwind', 'GSAP', 'Three.js'];
