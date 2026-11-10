import { useEffect, useState } from 'react';
import profilePhoto from '../asset/new profile.png';
import aiProjectImage from '../asset/Admin Signal ai.png';
import aiGalleryImage from '../asset/Signal-AI-09-30-2026_11_21_PM.png';
import archiveProjectImage from '../asset/admin document archive.png';
import archiveUserImage from '../asset/user document archive.png';
import grogolArchiveImage from '../asset/document archive.png';
import mailhostingArchitectureImage from '../asset/mailhosting arsitektur.png';
import outlookProjectImage from '../asset/outlook.PNG';
import emailBackupReport from '../asset/Report_Backup_Email_Outlook_02_September_2026 (1).pdf';
import companyProfileImage from '../asset/company profile.PNG';
import hrisApiImage from '../asset/hris api.PNG';
import portfolioWebsiteImage from '../asset/personal portofolio website.PNG';
import zouthernShopfrontImage from '../asset/Zouthern Hemisphere Shopfront.png';

const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Stack', href: '/stack' },
  { label: 'Experience', href: '/experience' },
  { label: 'Contact', href: '/contact' },
];

const projects = [
  {
    slug: 'document-archive',
    title: 'Document Archive Management System',
    category: 'Development',
    categoryLabel: 'Full-Stack Development',
    description: 'A web app for organizing administrative records across departments, with search, filters, and simple record management.',
    role: 'Full-Stack Development',
    image: archiveProjectImage,
    gallery: [archiveUserImage],
    technologies: ['React.js', 'Vite', 'Node.js', 'Express.js', 'PostgreSQL'],
    tools: ['Git', 'GitHub', 'VS Code', 'npm', 'REST API', 'Vercel', 'Supabase'],
    overview: 'A shared place for staff to file, find, and manage administrative documents.',
    context: 'Staff work across different departments, so records needed a clear home and a consistent way to find them.',
    problem: 'Files are harder to manage when every department follows a different structure. Search and routine updates also need to be straightforward.',
    approach: 'I kept the interface and API separate, with PostgreSQL storing document details. That makes each part easier to maintain and leaves room for dedicated file storage later.',
    architecture: ['React interface, built with Vite', 'Node.js and Express API', 'PostgreSQL for document records and metadata', 'A separate layer for future file storage'],
    responsibilities: ['Organizing records by department and category', 'Sign-in and record management', 'Searching and filtering the archive'],
    challenges: ['Keeping navigation clear as categories grow', 'Leaving room to expand the data model without adding unnecessary complexity'],
    learning: 'I learned that a useful archive depends as much on how its records are organized as on the interface people use to find them.',
    github: 'https://github.com/gilsngprmns/dokumen-arsip',
    live: null,
  },
  {
    slug: 'grogol-selatan-document-archive',
    title: 'Document Archive Management System – Kelurahan Grogol Selatan',
    subtitle: 'Kerja Praktik',
    category: 'Development',
    categoryLabel: 'Full-Stack Development',
    organization: 'Kelurahan Grogol Selatan',
    description: 'A document archive for day-to-day administrative work at Kelurahan Grogol Selatan.',
    role: 'Full-Stack Development · Practical Work',
    image: grogolArchiveImage,
    technologies: ['Laravel', 'Vue.js', 'PHP', 'JavaScript', 'MySQL', 'HTML', 'CSS'],
    tools: ['Laragon', 'Cloudflare Tunnel', 'Composer', 'npm', 'Git', 'GitHub', 'VS Code', 'phpMyAdmin', 'Laravel Artisan', 'REST API'],
    overview: 'A web-based document archiving system built for administrative file management at Kelurahan Grogol Selatan.',
    context: 'The application centralizes daily document archiving activities and organizes files by categories and administrative needs.',
    problem: 'Administrative documents need a structured way to upload, organize, find, filter, and manage records.',
    approach: 'I built the backend with Laravel and the frontend with Vue.js, using MySQL for structured records. Laragon supported local development, while Cloudflare Tunnel exposed the locally hosted application externally without conventional deployment.',
    architecture: ['Vue.js frontend', 'Laravel backend and REST API', 'MySQL database', 'Laragon local development environment', 'Cloudflare Tunnel for external access'],
    responsibilities: ['Document upload and management', 'Document categories', 'Search and filtering', 'Authentication and user management', 'CRUD operations and administrative dashboard', 'External access via Cloudflare Tunnel'],
    github: 'https://github.com/gilsngprmns/sistem-arsip-dokumen',
    live: null,
  },
  {
    slug: 'ai-knowledge-base',
    title: 'AI Knowledge Base / Conversational AI Assistant',
    category: 'AI',
    categoryLabel: 'AI Integration / Full Stack',
    description: 'A chat assistant for IT and music discussions, built from an early experiment with retrieval-augmented generation.',
    role: 'Full-Stack Development & AI Integration',
    image: aiProjectImage,
    gallery: [aiGalleryImage],
    technologies: ['Node.js', 'Express.js', 'React.js', 'PostgreSQL', 'Supabase', 'Google Gemini API'],
    tools: ['Git', 'GitHub', 'VS Code', 'pnpm', 'REST API', 'Postman', 'Google GenAI SDK', 'Vercel'],
    deployment: 'Vercel',
    isLive: true,
    live: 'https://signal-ai-assistan.vercel.app/',
    overview: 'A full-stack conversational AI application that started as a Retrieval-Augmented Generation knowledge base and grew into a domain-focused assistant for IT and music discussions.',
    context: 'This was my first hands-on AI project, built to explore API integration, conversational context, prompt engineering, and persisted knowledge.',
    problem: 'The assistant needed contextual information and conversation state beyond a one-off prompt, with separate user and administrative experiences.',
    approach: 'I integrated Google Gemini into a React client and Express backend, persisted application data with PostgreSQL and Supabase, and added admin controls for contextual labels and knowledge expansion.',
    geminiIntegration: 'Google Gemini powers the conversational responses. Context and labels help keep the assistant focused on IT and music-related discussions.',
    backendDetail: 'The Express service sits between the browser and Gemini. That gives the application a place to handle requests without exposing provider credentials in the frontend.',
    databaseDetail: 'Supabase was used for application data and authentication, keeping account and knowledge-related data outside the browser session.',
    performanceDetail: 'I focused on keeping the request path straightforward and making wait states clear. I still want to measure response time more systematically as the project grows.',
    architecture: ['React.js interface with separate user and admin experiences', 'Node.js and Express.js API', 'Google Gemini API through the Google GenAI SDK', 'PostgreSQL persistence with Supabase', 'Vercel deployment'],
    responsibilities: ['Conversational AI and RAG exploration', 'Context management and prompt engineering', 'Admin controls for contextual labels and knowledge', 'Database persistence and performance work'],
    challenges: ['Handling API and deployment configuration together', 'Keeping the request and data flow understandable'],
    learning: 'I learned that the prompt is only one piece of an AI feature. Backend flow, stored context, configuration, and what happens when a request fails matter just as much.',
    github: 'https://github.com/gilsngprmns/signal-ai-assistant',
  },
  {
    slug: 'sosmed-musician',
    title: 'SOSMED MUSICIAN',
    category: 'Development',
    categoryLabel: 'Mobile / Social Platform',
    description: 'A social platform concept where independent musicians can share work and find a community.',
    role: 'Full-Stack Development',
    technologies: ['NestJS', 'React Native', 'Expo Router', 'PostgreSQL', 'Prisma', 'TypeScript'],
    tools: ['pnpm Workspace', 'Node.js', 'Git', 'GitHub', 'VS Code', 'Prisma ORM', 'Expo', 'REST API', 'Figma'],
    overview: 'A social platform concept designed around independent musicians and emerging artists.',
    context: 'The platform combines music discovery with a community-driven experience inspired by SoundCloud, MySpace, and Bandcamp.',
    problem: 'Independent artists need a place to present their work, connect with other musicians, and build an audience.',
    approach: 'I designed the foundation as a mobile-first application with a monorepo architecture, a dedicated backend API, and a cross-platform client.',
    architecture: ['NestJS backend API', 'React Native cross-platform client', 'Expo Router navigation', 'PostgreSQL data with Prisma ORM', 'pnpm workspace monorepo'],
    responsibilities: ['Customizable artist profiles', 'Music upload and discovery', 'Comments and ratings', 'Artist interactions and audience building'],
    github: null,
    live: null,
  },
  {
    slug: 'hris',
    title: 'HRIS – Human Resources Information System',
    category: 'Development',
    categoryLabel: 'Full-Stack Development',
    description: 'An HR system for employee records, attendance, leave, payroll, and performance reviews.',
    role: 'Full-Stack Development',
    image: hrisApiImage,
    technologies: ['Go', 'Gin', 'GORM', 'PostgreSQL', 'React.js', 'Vite'],
    tools: ['Git', 'GitHub', 'VS Code', 'REST API', 'JWT Authentication', 'PostgreSQL', 'GORM'],
    overview: 'A Human Resources Information System that centralizes employee administration and HR operations.',
    context: 'The application brings employee records and HR workflows into one system with role-specific dashboards.',
    problem: 'Administrators, HR staff, managers, and employees need distinct access to employee and operational information.',
    approach: 'The backend follows a Handler → Service → Repository → Database architecture to separate API handling, business logic, and data access.',
    architecture: ['Go and Gin API', 'Handler → Service → Repository layers', 'GORM data access', 'PostgreSQL database', 'React.js and Vite frontend'],
    responsibilities: ['Employee management', 'Attendance and leave requests', 'Payroll and performance management', 'Authentication and role-based authorization', 'Administrative dashboards'],
    github: 'https://github.com/gilsngprmns/HRIS-SYSTEM-GOLANG-',
    live: null,
  },
  {
    slug: 'zouthern-merchandise-store',
    title: 'Zouthern Hemisphere – Official Merchandise Store',
    category: 'Development',
    categoryLabel: 'E-commerce Development',
    description: 'An online shop for Zouthern Hemisphere, with product, stock, and order management.',
    role: 'Full-Stack Web Development',
    image: zouthernShopfrontImage,
    technologies: ['PHP', 'MySQL', 'Bootstrap 5', 'HTML', 'CSS', 'JavaScript'],
    tools: ['MySQLi', 'AJAX', 'PHP Session', 'Font Awesome', 'Iconify', 'Git', 'VS Code'],
    overview: 'An official merchandise store for the independent brand Zouthern Hemisphere.',
    context: 'The site combines customer-facing shopping with an administration dashboard for products, inventory, categories, and orders.',
    problem: 'Customers need a clear path from product discovery to checkout while administrators manage stock and fulfillment data.',
    approach: 'I built the store around product catalogs, product details, cart and checkout flows, and centralized administration.',
    architecture: ['Product catalog and detail pages', 'Shopping cart and checkout', 'Size selection and payment options', 'Authentication and order management', 'Admin product, category, stock, and order controls'],
    responsibilities: ['Customer shopping experience', 'Product and inventory management', 'Cart and checkout functionality', 'Administrative order management'],
    github: 'https://github.com/gilsngprmns/zouthern-website',
    live: null,
  },
  {
    slug: 'email-migration',
    title: 'Email Archiving & Migration Infrastructure',
    category: 'Infrastructure',
    categoryLabel: 'IT Infrastructure & Mail Systems',
    organization: 'PT Veddira & Artha',
    description: 'Email archiving and migration work covering Outlook, scheduled backups, DNS, and mail-server access.',
    role: 'Email Migration & IT Infrastructure',
    image: outlookProjectImage,
    technologies: ['Microsoft Outlook', 'cPanel', 'PowerShell', 'PST Archiving', 'MailStore', 'Synology NAS', 'SMTP', 'IMAP', 'DNS', 'SPF', 'DKIM', 'DMARC', 'Virtual Machines', 'Mail Server', 'Networking'],
    tools: ['Windows Task Scheduler', 'Remote Desktop', 'cPanel', 'Mail Hosting Control Panel', 'Google Workspace', 'VirtualBox', 'Windows', 'Linux Server Concepts', 'Command Line Tools', 'DNS Testing Tools', 'Mail Server Testing Tools'],
    overview: 'An email archiving and migration workflow paired with an isolated lab for testing mail-server, networking, and deployment scenarios.',
    context: 'The work combines local email archives, centralized storage, scheduled backups, and virtualized infrastructure experiments without affecting production systems.',
    problem: 'Historical email, limited hosting storage, mailbox delivery, secondary backups, and infrastructure testing needed to be handled without disrupting production mail.',
    approach: 'I designed and tested periodic PST archive creation, scheduled synchronization, centralized server storage, and secondary Synology NAS backup. Remote Desktop provided server access for cPanel and DNS configuration; PowerShell and Windows Task Scheduler handled recurring backup and archive tasks. A VirtualBox lab supported mail-server and network experiments.',
    architecture: ['Microsoft Outlook PST archives and MailStore', 'cPanel and DNS configuration through Remote Desktop', 'PowerShell automation scheduled with Windows Task Scheduler', 'Centralized server storage with secondary Synology NAS backup', 'VirtualBox lab for mail-server and networking tests'],
    existingSetup: 'Company email depended on hosted mail storage while historical messages needed to remain available outside the hosting mailbox.',
    migrationPlan: 'The plan covered archive creation, scheduled synchronization, centralized storage, a secondary NAS copy, and an isolated virtual lab for safe infrastructure testing.',
    emailTesting: 'SMTP/IMAP configuration, DNS records, SPF, DKIM, DMARC, MX records, deliverability, and mail-server migration considerations were tested or troubleshot.',
    emailSolution: 'The workflow uses Outlook PST archives and MailStore with scheduled synchronization to centralized storage and a secondary Synology NAS backup.',
    emailDiagram: ['Hosted Mailbox', 'Outlook PST / MailStore', 'Scheduled Sync', 'Central Storage', 'Synology NAS Backup'],
    responsibilities: ['PST archive planning', 'MailStore and centralized archive workflow', 'PowerShell backup and archiving with Task Scheduler', 'Remote Desktop server access', 'cPanel, DNS, SMTP/IMAP, and deliverability troubleshooting', 'Synology NAS backup and virtualized mail-server testing'],
    challenges: ['Keeping mail access stable during configuration changes', 'Preserving historical email while planning a practical archive', 'Testing delivery and mailbox access across providers'],
    learning: 'This work showed me how small configuration details affect real operations. A migration plan also needs a clear backup and recovery path, not only a way to move mail.',
    github: null,
    live: null,
  },
  {
    slug: 'company-profile',
    title: 'ARMADA Digital Company Profile',
    category: 'Development',
    categoryLabel: 'Web Design / Brand Implementation',
    description: 'A responsive company profile concept presenting ARMADA’s logistics services and visual identity.',
    role: 'Company Profile Website',
    image: companyProfileImage,
    technologies: ['HTML/CSS Concepts', 'Responsive Design'],
    tools: ['Figma', 'Framer', 'UI/UX', 'Interactive Prototyping'],
    overview: 'A digital company profile concept for ARMADA, presenting freight forwarding, land transportation, customs clearance, warehousing, shipping agency, and cargo operations.',
    context: 'The interface carries ARMADA’s corporate visual identity across the company’s service sections.',
    problem: 'The service range needed a clear and consistent structure that communicates credibility across desktop and mobile layouts.',
    approach: 'I designed the visual concept around content hierarchy, responsive layouts, and consistent brand implementation.',
    architecture: ['Company introduction', 'Freight forwarding and transportation services', 'Customs clearance and warehousing', 'Shipping agency and cargo operations'],
    responsibilities: ['Corporate website design', 'Responsive layout and UI/UX', 'Brand implementation and content structure', 'Interactive elements'],
    github: null,
    live: null,
  },
  {
    slug: 'personal-portfolio',
    title: 'Personal Portfolio Website',
    category: 'Development',
    categoryLabel: 'Web Development / Visual Design',
    description: 'A portfolio for my software, infrastructure, and design projects.',
    role: 'Design & Development',
    image: portfolioWebsiteImage,
    technologies: ['React.js', 'Vite', 'JavaScript', 'HTML', 'CSS'],
    tools: ['Git', 'GitHub', 'VS Code', 'Figma', 'Motion / Animation Libraries', 'Vercel'],
    overview: 'A personal portfolio website for presenting development, AI, infrastructure, system analysis, and design projects.',
    context: 'The site was designed to feel personal and editorial rather than relying on a generic portfolio template.',
    problem: 'Projects across several technical disciplines needed to be presented with a cohesive identity across desktop and mobile.',
    approach: 'I built a responsive portfolio with a consistent visual style, restrained motion, and reusable project pages.',
    architecture: ['React application with Vite', 'Responsive layouts for desktop and mobile', 'Reusable project and technology components', 'Project routing and detail pages'],
    responsibilities: ['Visual identity and typography', 'Responsive frontend development', 'Project showcase and detail content', 'Motion and technology logo treatments'],
    github: 'https://github.com/gilsngprmns/portofolio-website',
    live: null,
  },
];

const primaryTechnologies = [
  { name: 'JavaScript', slug: 'javascript', color: 'F7DF1E', state: 'Using' },
  { name: 'TypeScript', slug: 'typescript', color: '3178C6', state: 'Using' },
  { name: 'React', slug: 'react', color: '61DAFB', state: 'Using' },
  { name: 'Node.js', slug: 'nodedotjs', color: '5FA04E', state: 'Using' },
  { name: 'Express.js', slug: 'express', color: '181717', state: 'Using' },
  { name: 'PostgreSQL', slug: 'postgresql', color: '4169E1', state: 'Using' },
  { name: 'Supabase', slug: 'supabase', color: '3FCF8E', state: 'Using' },
  { name: 'Vite', slug: 'vite', color: '646CFF', state: 'Using' },
  { name: 'Git', slug: 'git', color: 'F05032', state: 'Using' },
  { name: 'GitHub', slug: 'github', color: '181717', state: 'Using' },
  { name: 'Gemini API', slug: 'googlegemini', color: '8E75B2', state: 'Using' },
];

const technologyColors = {
  'React.js': ['react', '61DAFB'],
  'Vue.js': ['vuedotjs', '4FC08D'],
  'Google Gemini API': ['googlegemini', '8E75B2'],
  Go: ['go', '00ADD8'],
  'Expo Router': ['expo', '1C1C1E'],
  'Bootstrap 5': ['bootstrap', '7952B3'],
  HTML: ['html5', 'E34F26'],
  CSS: ['css3', '1572B6'],
  Vercel: ['vercel', '000000'],
  'Microsoft Outlook': ['outlook-local', '0078D4'],
  'Synology NAS': ['synology', 'B5B5B6'],
  'Windows Task Scheduler': ['windows-local', '0078D4'],
  'Remote Desktop': ['windows-local', '0078D4'],
  HTML5: ['html5', 'E34F26'],
  CSS3: ['css3', '1572B6'],
  TypeScript: ['typescript', '3178C6'],
  Bootstrap: ['bootstrap', '7952B3'],
  NestJS: ['nestjs', 'E0234E'],
  PHP: ['php', '777BB4'],
  Laravel: ['laravel', 'FF2D20'],
  MySQL: ['mysql', '4479A1'],
  Prisma: ['prisma', '2D3748'],
  'React Native': ['react', '61DAFB'],
  Expo: ['expo', '1C1C1E'],
  Figma: ['figma', 'F24E1E'],
  Framer: ['framer', '0055FF'],
  'VS Code': ['visualstudiocode', '007ACC'],
  Outlook: ['outlook-local', '0078D4'],
  cPanel: ['cpanel', 'FF6C2C'],
  PowerShell: ['powershell-local', '012456'],
};

const stackGroups = [
  { label: 'Frontend', names: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Vite', 'Bootstrap'] },
  { label: 'Backend', names: ['Node.js', 'Express.js', 'NestJS', 'PHP', 'Laravel'] },
  { label: 'Database', names: ['PostgreSQL', 'MySQL', 'Supabase', 'Prisma'] },
  { label: 'Mobile', names: ['React Native', 'Expo'] },
  { label: 'AI', names: ['Gemini API'] },
  { label: 'Development Tools', names: ['Git', 'GitHub', 'VS Code'] },
  { label: 'Design', names: ['Figma', 'Framer'] },
];

function getStackTechnology(name) {
  const currentTechnology = primaryTechnologies.find((technology) => technology.name === name);
  if (currentTechnology) return currentTechnology;
  const [slug, color] = technologyColors[name];
  return { name, slug, color, state: 'Worked With' };
}

const experience = [
  { organization: 'PT Armada Logistik', title: 'IT Intern', detail: 'Helped with email and day-to-day IT tasks, worked on the company profile, and tested applications for issues.' },
  { organization: 'Academic & independent projects', title: 'Software development', detail: 'Built applications and system prototypes across full-stack development, AI integration, and infrastructure.' },
];

function normalizePath(path) {
  if (path.length > 1 && path.endsWith('/')) return path.slice(0, -1);
  return path;
}

function AppLink({ href, navigate, className = '', children, ...props }) {
  return (
    <a
      href={href}
      className={className}
      onClick={(event) => {
        if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        navigate(href);
      }}
      {...props}
    >
      {children}
    </a>
  );
}

function PageHeading({ eyebrow, title, description }) {
  return (
    <header className="page-heading" data-reveal>
      <div className="portfolio-container page-heading__inner">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {description && <p className="page-description">{description}</p>}
      </div>
    </header>
  );
}

function ProjectCard({ project, navigate, compact = false, editorial = false }) {
  const infrastructureClass = project.category === 'Infrastructure' ? ' project-card--infrastructure' : '';
  return (
    <article data-reveal className={`project-card${compact ? ' project-card--compact' : ' project-card--wide'}${infrastructureClass}${editorial ? ' project-card--editorial' : ''}`}>
      <AppLink href={`/projects/${project.slug}`} navigate={navigate} className="project-card__image-link" aria-label={`Open ${project.title}`}>
        {project.image ? (
          <img className="project-card__image" src={project.image} alt={`${project.title} project preview`} loading="lazy" decoding="async" />
        ) : (
          <div className="project-card__image project-card__image--empty"><span>Project screenshot unavailable</span></div>
        )}
        {project.isLive && <span className="project-card__live">Live</span>}
      </AppLink>
      <div className="project-card__body">
        <p className="project-card__category">{project.categoryLabel}</p>
        <h2><AppLink href={`/projects/${project.slug}`} navigate={navigate}>{project.title}</AppLink></h2>
        <p>{project.description}</p>
        <div className="project-card__actions">
          <AppLink href={`/projects/${project.slug}`} navigate={navigate} className="text-link">
            {project.category === 'Infrastructure' ? 'View case study' : 'View project'}
          </AppLink>
          {project.live && <a className="text-link" href={project.live} target="_blank" rel="noreferrer">Live site</a>}
          {project.github && <a className="text-link" href={project.github} target="_blank" rel="noreferrer">GitHub</a>}
        </div>
      </div>
    </article>
  );
}

function TechLogo({ technology }) {
  const [imageFailed, setImageFailed] = useState(false);
  return (
    <div className={`tech-logo${technology.slug === 'linkedin' ? ' tech-logo--linkedin' : ''}`} aria-hidden="true">
      {technology.slug === 'linkedin' ? (
        <svg viewBox="0 0 24 24" focusable="false">
          <rect x="1" y="1" width="22" height="22" rx="4" />
          <text x="12" y="17" fill="#F1EFE8" fontFamily="DM Sans, sans-serif" fontSize="12" fontWeight="700" textAnchor="middle">in</text>
        </svg>
      ) : technology.slug === 'outlook-local' ? (
        <svg viewBox="0 0 32 32" focusable="false">
          <rect x="4" y="4" width="26" height="24" rx="3" fill="#0078D4" />
          <path d="M7 10l10 8 10-8v14H7z" fill="#F7FBFF" />
          <path d="M7 10l10 8 10-8" fill="none" stroke="#0078D4" strokeWidth="1.8" />
          <rect x="2" y="9" width="13" height="14" rx="2" fill="#005A9E" />
          <text x="8.5" y="19" fill="#FFFFFF" fontFamily="DM Sans, sans-serif" fontSize="9" fontWeight="700" textAnchor="middle">O</text>
        </svg>
      ) : technology.slug === 'powershell-local' ? (
        <svg viewBox="0 0 32 32" focusable="false">
          <rect x="2" y="3" width="28" height="26" rx="3" fill="#012456" />
          <path d="M8 9l7 7-7 7M17 22h7" fill="none" stroke="#FFFFFF" strokeLinecap="square" strokeWidth="2.2" />
        </svg>
      ) : technology.slug === 'windows-local' ? (
        <svg viewBox="0 0 32 32" focusable="false">
          <path d="M3 7l11-1.5v9.3H3z" fill="#F25022" />
          <path d="M16 5.3L29 3.5v11.3H16z" fill="#7FBA00" />
          <path d="M3 16.8h11v9.4L3 24.7z" fill="#00A4EF" />
          <path d="M16 16.8h13v11.7L16 26.7z" fill="#FFB900" />
        </svg>
      ) : imageFailed ? (
        <span className="tech-logo__fallback">{technology.name.slice(0, 2)}</span>
      ) : (
        <img src={`https://cdn.simpleicons.org/${technology.slug}/${technology.color}`} alt="" loading="lazy" onError={() => setImageFailed(true)} />
      )}
    </div>
  );
}

function TechCard({ technology, bubble = false }) {
  return (
    <article className={`tech-card${bubble ? ' tech-card--bubble' : ''}`}>
      <TechLogo technology={technology} />
      <div className="tech-card__copy">
        <strong>{technology.name}</strong>
      </div>
    </article>
  );
}

function HomePage({ navigate }) {
  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="home-hero__copy">
          <p className="eyebrow">Information Systems student / Jakarta, Indonesia</p>
          <h1 className="hero-wordmark">
            <span>Gilang</span>
            <span className="hero-wordmark__outline">Permana</span>
          </h1>
          <h2>I like making software that makes everyday work easier.</h2>
          <p className="home-hero__paragraph">I&apos;m Gilang, an Information Systems student in Jakarta. I build web applications and keep learning how the systems behind them fit together.</p>
          <div className="action-row">
            <AppLink href="/projects" navigate={navigate} className="button button--primary">See my work</AppLink>
            <AppLink href="/about" navigate={navigate} className="button button--secondary">A little about me</AppLink>
          </div>
        </div>
        <div className="home-hero__visual">
          <img className="home-portrait" src={profilePhoto} alt="Gilang Riski Permana" width="1024" height="1536" fetchpriority="high" decoding="async" />
        </div>
      </section>

      <section className="home-section portfolio-container" data-reveal>
        <div className="section-heading-row">
          <div><p className="eyebrow">Selected work</p><h2>A few things I&apos;ve been working on.</h2></div>
          <p>From organizing documents to exploring AI, each project has taught me something different.</p>
        </div>
        <div className="project-editorial">
          {projects.slice(0, 3).map((project) => <ProjectCard key={project.slug} project={project} navigate={navigate} editorial />)}
        </div>
        <AppLink href="/projects" navigate={navigate} className="section-more">All projects</AppLink>
      </section>

      <section className="home-about portfolio-container" data-reveal>
        <div><p className="eyebrow">About</p><h2>I like seeing how the pieces fit together.</h2></div>
        <div><p>I move between interfaces, APIs, databases, and deployment. I enjoy figuring out how the decisions behind a product affect the people who use it.</p><AppLink href="/about" navigate={navigate} className="text-link">More about me</AppLink></div>
      </section>

      <section className="home-cta portfolio-container" data-reveal>
        <p className="eyebrow">Contact</p>
        <h2>Have something useful to build?</h2>
        <p>I&apos;m open to internships, collaborations, and practical software projects. Tell me a little about what you have in mind.</p>
        <AppLink href="/contact" navigate={navigate} className="button button--primary">Contact me</AppLink>
      </section>
    </main>
  );
}

function ProjectsPage({ navigate }) {
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'Development', 'AI', 'Infrastructure'];
  const filteredProjects = projects.filter((project) => filter === 'All' || project.category === filter);
  return (
    <main className="page-content">
      <PageHeading eyebrow="Projects" title="A mix of projects and practical work." description="From web apps to infrastructure, here are projects I’ve worked on and a few things I learned along the way." />
      <div className="portfolio-container page-content__body">
        <div className="filter-row" role="group" aria-label="Filter projects">
          {filters.map((item) => <button key={item} type="button" className={`filter-button${filter === item ? ' is-active' : ''}`} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}</button>)}
        </div>
        <div className="project-grid project-grid--listing">
          {filteredProjects.length ? filteredProjects.map((project) => <ProjectCard key={project.slug} project={project} navigate={navigate} editorial />) : <p className="empty-state">No projects in this category yet.</p>}
        </div>
      </div>
    </main>
  );
}

function ProjectDetailPage({ project, navigate }) {
  const isArchive = project.slug === 'document-archive';
  const isAiProject = project.slug === 'ai-knowledge-base';
  const isEmailProject = project.slug === 'email-migration';
  return (
    <main className="page-content case-study">
      <header className="case-study__hero">
        <div className="portfolio-container case-study__hero-inner">
          <AppLink href="/projects" navigate={navigate} className="back-link">All projects</AppLink>
          <p className="eyebrow">{project.categoryLabel}</p>
          <h1>{project.title}</h1>
          {project.subtitle && <p className="case-study__subtitle">{project.subtitle}</p>}
          {project.organization && <p className="case-study__organization">{project.organization}</p>}
          {project.technologies.length > 0 && <p className="case-study__stack"><span>Built with</span> {project.technologies.slice(0, 5).join(' · ')}</p>}
        </div>
      </header>
      {project.image && !isEmailProject && <figure className="case-study__cover portfolio-container" id="case-cover"><img src={project.image} alt={`${project.title} screenshot`} width="1366" height="768" /></figure>}
      <div className="portfolio-container case-study__content">
        {isArchive && <>
          <section><h2>What it does</h2><p className="case-study__lead">{project.overview}</p></section>
          <section><h2>What needed to change</h2><p>{project.problem}</p></section>
          <section><h2>How I built it</h2><p>{project.approach}</p></section>
          <section>          <h2>Under the hood</h2><ol className="architecture-list">{project.architecture.map((item) => <li key={item}>{item}</li>)}</ol></section>
          <section><h2>What it handles</h2><ul className="simple-list">{project.responsibilities.map((item) => <li key={item}>{item}</li>)}</ul></section>
          <section><h2>What I learned</h2><p>{project.learning}</p></section>
          <div className="case-gallery">{project.gallery.map((image) => <figure key={image}><img src={image} alt="Document archive user dashboard" /><figcaption>User dashboard</figcaption></figure>)}</div>
        </>}
        {isAiProject && <>
          <section><h2>Overview</h2><p className="case-study__lead">{project.overview}</p></section>
          <section><h2>Why I Built It</h2><p>{project.context}</p></section>
          <section><h2>Architecture</h2><ol className="architecture-list">{project.architecture.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}</ol></section>
          <section><h2>Gemini Integration</h2><p>{project.geminiIntegration}</p></section>
          <section className="case-study__two-col"><div><h2>Backend</h2><p>{project.backendDetail}</p></div><div><h2>Database</h2><p>{project.databaseDetail}</p></div></section>
          <section><h2>Deployment</h2><p>The app was deployed to {project.deployment}. Deployment configuration was part of the project work, alongside the application and database setup.</p></section>
          <section className="case-study__two-col"><div><h2>Challenges</h2><ul className="simple-list">{project.challenges.map((item) => <li key={item}>{item}</li>)}</ul></div><div><h2>Performance Improvements</h2><p>{project.performanceDetail}</p></div></section>
          <section><h2>What I Learned</h2><p>{project.learning}</p></section>
          <section><h2>Gallery</h2><div className="case-gallery">{project.gallery.map((image, index) => <figure key={image}><img src={image} alt={`AI Knowledge Base screenshot ${index + 2}`} /><figcaption>AI Knowledge Base · screenshot {index + 2}</figcaption></figure>)}</div><a href="#case-cover" className="text-link">Back to main screenshot</a></section>
        </>}
        {isEmailProject && <>
          <section><h2>Context</h2><p>{project.context}</p></section>
          <section><h2>Existing Setup</h2><p>{project.existingSetup}</p></section>
          <section><h2>Migration Plan</h2><p>{project.migrationPlan}</p></section>
          <section><h2>Email Providers</h2><p>{project.organization} used cPanel with domain-hosted mailboxes as part of the mail setup.</p><figure className="mailhosting-figure"><img src={mailhostingArchitectureImage} alt="Mailhosting architecture diagram" /><figcaption>Mailhosting architecture</figcaption></figure></section>
          <section><h2>Server Access</h2><p>Remote Desktop was used to access the mail server for cPanel and DNS configuration.</p></section>
          <section><h2>SMTP / IMAP</h2><p>Mailbox configuration and delivery were checked over SMTP and IMAP during the migration work.</p></section>
          <section><h2>Outlook & PST Archive</h2><p>Outlook PST files provided a way to keep historical email available on user laptops while planning longer-term storage.</p></section>
          <section><h2>Backup Workflow</h2><p>{project.approach}</p><ol className="email-flow">{project.emailDiagram.map((step) => <li key={step}><span className="email-flow__node">{step}</span></li>)}</ol></section>
          <section><h2>Automated Backup &amp; Archiving</h2><p>PowerShell scripts and Windows Task Scheduler handled recurring Outlook backup and email archiving to server storage.</p></section>
          <section><h2>Backup Report</h2><a className="text-link" href={emailBackupReport} target="_blank" rel="noreferrer">Open email backup report (PDF)</a></section>
          <section><h2>Testing</h2><p>{project.emailTesting}</p></section>
          <section><h2>Problems Encountered</h2><ul className="simple-list">{project.challenges.map((item) => <li key={item}>{item}</li>)}</ul></section>
          <section><h2>Solution</h2><p>{project.emailSolution}</p></section>
          <section><h2>What I Learned</h2><p>{project.learning}</p></section>
        </>}
        {!isArchive && !isAiProject && !isEmailProject && <>
          <section><h2>Overview</h2><p className="case-study__lead">{project.overview}</p></section>
          <section className="case-study__two-col"><div><h2>Context</h2><p>{project.context}</p></div><div><h2>What needed to be clear</h2><p>{project.problem}</p></div></section>
          <section><h2>Approach</h2><p>{project.approach}</p></section>
          <section><h2>Page structure</h2><ol className="architecture-list">{project.architecture.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}</ol></section>
          <section><h2>What I focused on</h2><ul className="simple-list">{project.responsibilities.map((item) => <li key={item}>{item}</li>)}</ul></section>
          {(project.challenges?.length > 0 || project.learning) && <section className="case-study__two-col">{project.challenges?.length > 0 && <div><h2>Challenges</h2><ul className="simple-list">{project.challenges.map((item) => <li key={item}>{item}</li>)}</ul></div>}{project.learning && <div><h2>What I learned</h2><p>{project.learning}</p></div>}</section>}
        </>}
        {(project.github || project.live) && <section className="case-study__links"><h2>Project links</h2>{project.github && <a href={project.github} target="_blank" rel="noreferrer" className="text-link">View the source on GitHub</a>}{project.live && <a href={project.live} target="_blank" rel="noreferrer" className="text-link">Open the live project</a>}</section>}
      </div>
    </main>
  );
}

function AboutPage() {
  return (
    <main className="page-content">
      <PageHeading eyebrow="About" title="A bit about how I work." />
      <div className="portfolio-container page-content__body">
        <div className="about-layout">
          <div className="editorial-copy">
            <p>I&apos;m Gilang Riski Permana, an Information Systems student at Universitas Indraprasta PGRI.</p>
            <p>I started with web development, then got curious about what happens behind the screen: APIs, databases, deployment, servers, and the systems people rely on at work.</p>
            <p>Most of what I know comes from building things, getting stuck, and figuring out why a solution works. I&apos;m still strengthening my programming fundamentals and learning more about backend systems and infrastructure.</p>
          </div>
          <aside className="about-focus">
            <img className="about-focus__portrait" src={profilePhoto} alt="Gilang Riski Permana" width="1024" height="1536" loading="lazy" decoding="async" />
            <div><p className="eyebrow">Currently learning</p><strong>Backend development and how to keep the parts of a system working well together.</strong></div>
          </aside>
        </div>
      </div>
    </main>
  );
}

function StackPage() {
  return (
    <main className="page-content">
      <PageHeading eyebrow="Stack" title="Tools I’ve used along the way." description="A selection of tools from projects, coursework, and hands-on work. I’m still learning, and some are more familiar than others." />
      <div className="portfolio-container page-content__body">
        {stackGroups.map((category) => <section className="stack-section" key={category.label}><div className="section-heading-row"><h2>{category.label}</h2></div><div className="tech-grid">{category.names.map((name) => <TechCard key={name} technology={getStackTechnology(name)} />)}</div></section>)}
        <p className="stack-note">Gemini API: I use Google Gemini through its API; I didn&apos;t develop or train the model.</p>
      </div>
    </main>
  );
}

function ExperiencePage() {
  return (
    <main className="page-content">
      <PageHeading eyebrow="Experience" title="Work beyond the code." description="A little of what I’ve done in IT, alongside the software projects I’ve worked on." />
      <div className="portfolio-container page-content__body">
        <ol className="experience-list">{experience.map((item, index) => <li key={item.title} data-reveal><span className="experience-list__number">0{index + 1}</span><div><p className="experience-list__organization">{item.organization}</p><h2>{item.title}</h2><p>{item.detail}</p></div><span className="experience-list__line" /></li>)}</ol>
      </div>
    </main>
  );
}

function ContactPage() {
  const links = [
    { label: 'Email', detail: 'The best way to reach me', href: 'mailto:gilangriskik@gmail.com', value: 'gilangriskik@gmail.com', external: false },
    { label: 'LinkedIn', detail: 'My professional profile', href: 'https://www.linkedin.com/in/gilang-riski-permana', value: 'Gilang Riski Permana', external: true },
    { label: 'GitHub', detail: 'Code and current projects', href: 'https://github.com/gilsngprmns', value: 'github.com/gilsngprmns', external: true },
  ];
  return (
    <main className="page-content contact-page">
      <PageHeading eyebrow="Contact" title="Let’s talk about what you’re building." description="I’m open to internships, collaborations, and practical software projects. A short email is a good place to start." />
      <div className="portfolio-container page-content__body">
        <div className="contact-list">{links.map((link) => <a key={link.label} href={link.href} target={link.external ? '_blank' : undefined} rel={link.external ? 'noreferrer' : undefined}><div className="contact-list__label"><span className="contact-list__label-copy">{link.label}<small>{link.detail}</small></span></div><span className="contact-list__value">{link.value}</span></a>)}</div>
      </div>
    </main>
  );
}

function NotFoundPage({ navigate }) {
  return <main className="page-content"><PageHeading eyebrow="404" title="This page isn’t here." description="The address may have changed, or the page may not exist." /><div className="portfolio-container page-content__body"><AppLink href="/" navigate={navigate} className="text-link">Back home</AppLink></div></main>;
}

function PageContent({ path, navigate }) {
  if (path === '/') return <HomePage navigate={navigate} />;
  if (path === '/projects') return <ProjectsPage navigate={navigate} />;
  if (path === '/about') return <AboutPage />;
  if (path === '/stack') return <StackPage />;
  if (path === '/experience') return <ExperiencePage />;
  if (path === '/contact') return <ContactPage />;
  const projectMatch = path.match(/^\/projects\/([^/]+)$/);
  if (projectMatch) {
    const project = projects.find((item) => item.slug === projectMatch[1]);
    return project ? <ProjectDetailPage project={project} navigate={navigate} /> : <NotFoundPage navigate={navigate} />;
  }
  return <NotFoundPage navigate={navigate} />;
}

export default function PortfolioApp() {
  const [path, setPath] = useState(() => normalizePath(window.location.pathname));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onPopState = () => setPath(normalizePath(window.location.pathname));
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('popstate', onPopState);
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('popstate', onPopState);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return undefined;
    document.documentElement.classList.add('motion-ready');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -36px 0px' });
    document.querySelectorAll('[data-reveal]').forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [path]);

  useEffect(() => {
    document.title = path === '/' ? 'Gilang Riski Permana | Portfolio' : `${path.split('/').filter(Boolean).at(-1)?.replaceAll('-', ' ') || 'Portfolio'} | Gilang Riski Permana`;
  }, [path]);

  const navigate = (href) => {
    const nextPath = normalizePath(href);
    if (nextPath === path) {
      setMobileMenuOpen(false);
      return;
    }
    window.history.pushState({}, '', nextPath);
    setPath(nextPath);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  return (
    <div className="portfolio-site">
      <header className="site-nav">
        <div className="portfolio-container site-nav__inner">
          <AppLink href="/" navigate={navigate} className="site-nav__brand" aria-label="Gilang Riski Permana, home">GP<span aria-hidden="true">.</span></AppLink>
          <nav id="main-navigation" className={`site-nav__links${mobileMenuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
            {navigation.map((item) => {
              const isActive = path === item.href || (item.href === '/projects' && path.startsWith('/projects/'));
              return <AppLink key={item.href} href={item.href} navigate={navigate} className={`site-nav__link${isActive ? ' is-active' : ''}`} aria-current={isActive ? 'page' : undefined}>{item.label}</AppLink>;
            })}
          </nav>
          <AppLink href="/contact" navigate={navigate} className="site-nav__cta">Let&apos;s Talk</AppLink>
          <button type="button" className={`site-nav__menu${mobileMenuOpen ? ' is-open' : ''}`} aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'} aria-controls="main-navigation" aria-expanded={mobileMenuOpen} onClick={() => setMobileMenuOpen((open) => !open)}><span /><span /></button>
        </div>
      </header>
      <div key={path} className="route-view"><PageContent path={path} navigate={navigate} /></div>
      <footer className="site-footer">
        <div className="portfolio-container site-footer__main">
          <div className="site-footer__identity">
            <strong>Gilang Riski Permana</strong>
            <p>Information Systems student.</p>
            <span>Jakarta, Indonesia</span>
          </div>
          <nav className="site-footer__nav" aria-label="Footer navigation">
            <p className="site-footer__label">Explore</p>
            <div className="site-footer__nav-links">
              {navigation.map((item) => <AppLink key={item.href} href={item.href} navigate={navigate}>{item.label}</AppLink>)}
            </div>
          </nav>
          <div className="site-footer__connect">
            <p className="site-footer__label">Get in touch</p>
            <a className="site-footer__email" href="mailto:gilangriskik@gmail.com"><span>gilangriskik@gmail.com</span></a>
            <div className="site-footer__social">
              <a href="https://www.linkedin.com/in/gilang-riski-permana" target="_blank" rel="noreferrer"><span>LinkedIn</span></a>
              <a href="https://github.com/gilsngprmns" target="_blank" rel="noreferrer"><span>GitHub</span></a>
            </div>
          </div>
        </div>
        <div className="portfolio-container site-footer__bottom"><span>© {new Date().getFullYear()} Gilang Riski Permana</span></div>
      </footer>
    </div>
  );
}
