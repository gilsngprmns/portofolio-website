import { useEffect, useRef, useState } from 'react';
import profilePhoto from '../asset/new profile.png';
import paperTextureVideo from '../asset/bg video.mp4';
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
    subtitle: 'Administrative Document Archiving',
    category: 'Development',
    categoryLabel: 'Full-Stack Development',
    description: 'A web-based archive for administrative use in a local government office, organizing digital documents across departments with centralized search, filters, and record management.',
    role: 'Full-Stack Development',
    image: archiveProjectImage,
    gallery: [archiveUserImage],
    technologies: ['React.js', 'Vite', 'Node.js', 'Express.js', 'PostgreSQL'],
    tools: ['Git', 'GitHub', 'VS Code', 'npm', 'REST API', 'Vercel', 'Supabase'],
    overview: 'A web-based document archiving system for administrative use in a local government office.',
    context: 'The system organizes digital documents across multiple organizational sections through a centralized interface.',
    problem: 'Archived records need consistent departmental structure and practical tools for searching, filtering, and maintenance.',
    approach: 'I designed the frontend and backend as separate parts so the interface, API, database, and future document storage can be maintained independently.',
    architecture: ['React.js and Vite frontend', 'Node.js and Express.js API', 'PostgreSQL records and metadata', 'Separate layers for future document storage'],
    responsibilities: ['Document categorization and archive management', 'Authentication and CRUD operations', 'Search, filtering, and departmental access'],
    challenges: ['Keeping the category structure easy to navigate', 'Making the data model flexible without overcomplicating the workflow'],
    learning: 'This project made me think more about how people actually retrieve information. A useful archive depends on its data structure just as much as its interface.',
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
    description: 'A web-based document archiving system for managing administrative files in a structured, centralized workflow.',
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
    description: 'A full-stack conversational AI assistant that began as a RAG knowledge base and evolved into a domain-focused assistant for IT and music discussions.',
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
    description: 'A mobile-first social platform foundation for independent musicians and emerging artists, combining music discovery with community features.',
    role: 'Full-Stack Development',
    technologies: ['NestJS', 'React Native', 'Expo Router', 'PostgreSQL', 'Prisma', 'TypeScript'],
    tools: ['pnpm Workspace', 'Node.js', 'Git', 'GitHub', 'VS Code', 'Prisma ORM', 'Expo', 'REST API', 'Figma'],
    overview: 'A social platform concept designed around independent musicians and emerging artists.',
    context: 'The platform combines music discovery with a community-driven experience inspired by SoundCloud, MySpace, and Bandcamp.',
    problem: 'Independent artists need a place to present their work, connect with other musicians, and build an audience.',
    approach: 'I designed the foundation as a mobile-first application with a monorepo architecture, a dedicated backend API, and a cross-platform client.',
    architecture: ['NestJS backend API', 'React Native cross-platform client', 'Expo Router navigation', 'PostgreSQL data with Prisma ORM', 'pnpm workspace monorepo'],
    responsibilities: ['Customizable artist profiles', 'Music upload and discovery', 'Comments and ratings', 'Artist interactions and audience building'],
    github: 'https://github.com/gilsngprmns/HRIS-SYSTEM-GOLANG-',
    live: null,
  },
  {
    slug: 'hris',
    title: 'HRIS – Human Resources Information System',
    category: 'Development',
    categoryLabel: 'Full-Stack Development',
    description: 'An HR system for centralized employee administration, attendance, leave requests, payroll, and performance management.',
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
    description: 'An e-commerce website for an independent merchandise brand, with customer shopping flows and centralized product and order administration.',
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
    description: 'Email archiving and migration using Outlook, cPanel, DNS configuration, scheduled PowerShell backup, and Remote Desktop access to the mail server.',
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
    description: 'Designed and developed the visual concept for a responsive company profile for a logistics company, presenting its services through ARMADA’s visual identity.',
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
    description: 'A responsive portfolio presenting software development, AI, infrastructure, system analysis, and design work in one cohesive visual identity.',
    role: 'Design & Development',
    image: portfolioWebsiteImage,
    technologies: ['React.js', 'Vite', 'JavaScript', 'HTML', 'CSS'],
    tools: ['Git', 'GitHub', 'VS Code', 'Figma', 'Motion / Animation Libraries', 'Vercel'],
    overview: 'A personal portfolio website for presenting development, AI, infrastructure, system analysis, and design projects.',
    context: 'The site was designed to feel personal and editorial rather than relying on a generic portfolio template.',
    problem: 'Projects across several technical disciplines needed to be presented with a cohesive identity across desktop and mobile.',
    approach: 'I built a responsive interface with custom typography, paper texture, technology logos, motion interactions, and reusable project showcases.',
    architecture: ['React application with Vite', 'Responsive layouts for desktop and mobile', 'Reusable project and technology components', 'Project routing and detail pages'],
    responsibilities: ['Visual identity and typography', 'Responsive frontend development', 'Project showcase and detail content', 'Motion and technology logo treatments'],
    github: null,
    live: null,
  },
];

const primaryTechnologies = [
  { name: 'JavaScript', slug: 'javascript', color: 'F7DF1E', state: 'Using' },
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

function getProjectLogoTechnology(name) {
  const currentTechnology = primaryTechnologies.find((technology) => technology.name === name);
  if (currentTechnology) return currentTechnology;
  const color = technologyColors[name];
  return color ? { name, slug: color[0], color: color[1], state: 'Worked With' } : null;
}

const experience = [
  { title: 'IT Support & Infrastructure', detail: 'Supporting everyday technical needs involving hardware, software, networks, email, and internal users.' },
  { title: 'Email Systems', detail: 'Working with SMTP, IMAP, hosting configuration, mailbox testing, and deliverability troubleshooting.' },
  { title: 'Email Migration', detail: 'Planning and testing mailbox migrations while keeping historical email accessible.' },
  { title: 'Backup Architecture', detail: 'Working on archive and backup workflows between user laptops, Outlook PST files, internal servers, and company storage.' },
  { title: 'System Documentation', detail: 'Documenting technical processes, workflows, and system requirements so they are easier to understand and maintain.' },
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
    <header className="page-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      {description && <p className="page-description">{description}</p>}
    </header>
  );
}

function ProjectCard({ project, navigate, compact = false }) {
  const infrastructureClass = project.category === 'Infrastructure' ? ' project-card--infrastructure' : '';
  const projectTechnologyNames = [...new Set([...(project.technologies ?? []), ...(project.tools ?? [])])];
  const logoTechnologies = projectTechnologyNames.map(getProjectLogoTechnology).filter(Boolean).slice(0, 6);
  return (
    <article className={`project-card${compact ? ' project-card--compact' : ' project-card--wide'}${infrastructureClass}`}>
      <AppLink href={`/projects/${project.slug}`} navigate={navigate} className="project-card__image-link" aria-label={`Open ${project.title}`}>
        {project.image ? (
          <img className="project-card__image" src={project.image} alt={`${project.title} interface`} loading="lazy" />
        ) : (
          <div className="project-card__image project-card__image--empty"><span>{project.category === 'Infrastructure' ? 'Mail systems / Archive / Backup' : `${project.title} / Overview / Services`}</span></div>
        )}
        {project.isLive && <span className="project-card__live">Live</span>}
      </AppLink>
      <div className="project-card__body">
        <p className="project-card__category">{project.categoryLabel}</p>
        <h2><AppLink href={`/projects/${project.slug}`} navigate={navigate}>{project.title}</AppLink></h2>
        <p>{project.description}</p>
        {logoTechnologies.length > 0 && <div className="project-tech-logos" role="img" aria-label={`Technologies and tools: ${projectTechnologyNames.join(', ')}`}>
          {logoTechnologies.map((technology) => <TechLogo key={technology.name} technology={technology} />)}
        </div>}
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
          <text x="12" y="17" fill="#F1EFE8" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="700" textAnchor="middle">in</text>
        </svg>
      ) : technology.slug === 'outlook-local' ? (
        <svg viewBox="0 0 32 32" focusable="false">
          <rect x="4" y="4" width="26" height="24" rx="3" fill="#0078D4" />
          <path d="M7 10l10 8 10-8v14H7z" fill="#F7FBFF" />
          <path d="M7 10l10 8 10-8" fill="none" stroke="#0078D4" strokeWidth="1.8" />
          <rect x="2" y="9" width="13" height="14" rx="2" fill="#005A9E" />
          <text x="8.5" y="19" fill="#FFFFFF" fontFamily="Inter, sans-serif" fontSize="9" fontWeight="700" textAnchor="middle">O</text>
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
        <small>{technology.state}</small>
      </div>
    </article>
  );
}

function ToolsStrip() {
  return (
    <section className="tools-strip portfolio-container" aria-label="Tools and technologies">
      <div className="tools-marquee" role="region" aria-label="Technologies I use">
        <div className="tools-marquee__track">
          {[0, 1].map((copy) => (
            <div className="tools-marquee__group" key={copy} aria-hidden={copy === 1}>
              {primaryTechnologies.map((technology) => (
                <div className="tool-item" key={technology.name}>
                  <TechLogo technology={technology} />
                  <span>{technology.name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomePage({ navigate }) {
  return (
    <main className="home-page">
      <section className="home-hero portfolio-container">
        <div className="home-hero__copy">
          <p className="eyebrow">Information Systems student / Jakarta, Indonesia</p>
          <h1 className="hero-wordmark">
            <span>Gilang</span>
            <span>Permana</span>
          </h1>
          <h2>I build systems that are useful, clear, and genuinely made for the people using them.</h2>
          <p className="home-hero__paragraph">I’m Gilang, a final-year Information Systems student focused on product thinking, backend development, AI integration, and infrastructure. I like building interfaces that make technical systems easier to understand.</p>
          <div className="action-row">
            <AppLink href="/projects" navigate={navigate} className="button button--primary">View selected work</AppLink>
            <AppLink href="/about" navigate={navigate} className="button button--secondary">About me</AppLink>
          </div>
        </div>
        <div className="home-hero__visual">
          <img className="home-portrait" src={profilePhoto} alt="Gilang Riski Permana" />
        </div>
      </section>

      <ToolsStrip />

      <section className="home-section portfolio-container">
        <div className="section-heading-row">
          <div><p className="eyebrow">Selected work</p><h2>Projects that reflect how I think.</h2></div>
          <p>Small systems, backend work, infrastructure problems, and experiments that taught me something useful.</p>
        </div>
        <div className="project-grid project-grid--home">
          {projects.slice(0, 3).map((project) => <ProjectCard key={project.slug} project={project} navigate={navigate} compact />)}
        </div>
        <AppLink href="/projects" navigate={navigate} className="section-more">See all projects</AppLink>
      </section>

      <section className="home-about portfolio-container">
        <div><p className="eyebrow">About</p><h2>I like seeing how the pieces connect: interface, backend, data, and real user needs.</h2></div>
        <div><p>Frontend, backend, databases, deployment, and infrastructure all matter to me because they shape how a system actually works for people.</p><AppLink href="/about" navigate={navigate} className="text-link">Read more</AppLink></div>
      </section>

      <section className="home-cta portfolio-container">
        <p className="eyebrow">Contact</p>
        <h2>Open to work, ideas, and good conversations.</h2>
        <p>I’m happy to talk about building products, learning more about systems, internships, or practical opportunities to work on something real.</p>
        <AppLink href="/contact" navigate={navigate} className="button button--primary">Get in touch</AppLink>
      </section>
    </main>
  );
}

function ProjectsPage({ navigate }) {
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'Development', 'AI', 'Infrastructure'];
  const filteredProjects = projects.filter((project) => filter === 'All' || project.category === filter);
  return (
    <main className="page-content portfolio-container">
      <PageHeading eyebrow="Projects" title="Things I’ve built, explored, and worked on." description="Some are development projects, some are infrastructure work, and some are experiments that helped me understand technology better." />
      <div className="filter-row" role="group" aria-label="Filter projects">
        {filters.map((item) => <button key={item} type="button" className={`filter-button${filter === item ? ' is-active' : ''}`} onClick={() => setFilter(item)}>{item}</button>)}
      </div>
      <div className="project-grid project-grid--listing">
        {filteredProjects.length ? filteredProjects.map((project) => <ProjectCard key={project.slug} project={project} navigate={navigate} />) : <p className="empty-state">No projects in this category yet.</p>}
      </div>
    </main>
  );
}

function ProjectDetailPage({ project, navigate }) {
  const isArchive = project.slug === 'document-archive';
  const isAiProject = project.slug === 'ai-knowledge-base';
  const isEmailProject = project.slug === 'email-migration';
  return (
    <main className="page-content portfolio-container case-study">
      <AppLink href="/projects" navigate={navigate} className="back-link">All projects</AppLink>
      <header className="case-study__hero">
        <p className="eyebrow">{project.categoryLabel}</p>
        <h1>{project.title}</h1>
        {project.subtitle && <p className="case-study__subtitle">{project.subtitle}</p>}
        <p className="case-study__role">{project.organization ? `${project.organization} · ` : ''}{project.role}</p>
        {project.deployment && <p className="case-study__role">Deployment: {project.deployment}</p>}
        {project.technologies.length > 0 && <div className="tag-list">{project.technologies.map((technology) => <span key={technology} className="tag">{technology}</span>)}</div>}
        {project.tools?.length > 0 && <section className="case-study__tools"><p className="eyebrow">Tools &amp; Technologies</p><div className="tag-list">{project.tools.map((tool) => <span key={tool} className="tag">{tool}</span>)}</div></section>}
        {project.image && !isEmailProject && <figure className="case-study__cover" id="case-cover"><img src={project.image} alt={`${project.title} screenshot`} /><figcaption>Project screenshot</figcaption></figure>}
      </header>
      <div className="case-study__content">
        {isArchive && <>
          <section><h2>Overview</h2><p className="case-study__lead">{project.overview}</p></section>
          <section className="case-study__two-col"><div><h2>Context</h2><p>{project.context}</p></div><div><h2>Problem</h2><p>{project.problem}</p></div></section>
          <section><h2>Approach</h2><p>{project.approach}</p></section>
          <section><h2>Architecture</h2><ol className="architecture-list">{project.architecture.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}</ol></section>
          <section><h2>Features</h2><ul className="simple-list">{project.responsibilities.map((item) => <li key={item}>{item}</li>)}</ul></section>
          <section className="case-study__two-col"><div><h2>Challenges</h2><ul className="simple-list">{project.challenges.map((item) => <li key={item}>{item}</li>)}</ul></div><div><h2>What I Learned</h2><p>{project.learning}</p></div></section>
          <section><h2>Gallery</h2><div className="case-gallery">{project.gallery.map((image) => <figure key={image}><img src={image} alt="Document archive user dashboard" /><figcaption>User dashboard</figcaption></figure>)}</div></section>
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
        {(project.github || project.live) && <section className="case-study__links"><h2>Links</h2>{project.github && <a href={project.github} target="_blank" rel="noreferrer" className="text-link">GitHub</a>}{project.live && <a href={project.live} target="_blank" rel="noreferrer" className="text-link">Live site</a>}</section>}
      </div>
    </main>
  );
}

function AboutPage() {
  return (
    <main className="page-content portfolio-container">
      <PageHeading eyebrow="About" title="I’m interested in how technology fits together." />
      <div className="about-layout">
        <div className="editorial-copy">
          <p>I&apos;m Gilang Riski Permana, a final-year Information Systems student at Universitas Indraprasta PGRI.</p>
          <p>I started by working on web applications, but over time I became more interested in what happens outside the interface too — databases, APIs, deployment, servers, email systems, backups, and how technology supports actual work.</p>
          <p>Most of my learning comes from building things, getting stuck, fixing problems, and then understanding why the solution worked.</p>
          <p>Right now I&apos;m focusing on improving my programming fundamentals, backend development, system design, AI integration, and infrastructure knowledge.</p>
          <p className="editorial-copy__closing">Still learning. Still building.</p>
        </div>
        <aside className="about-focus">
          <img className="about-focus__portrait" src={profilePhoto} alt="Gilang Riski Permana" loading="lazy" />
          <div><p className="eyebrow">Current focus</p><strong>Backend development, system design, and understanding how each part fits together.</strong></div>
        </aside>
      </div>
      <section className="interests-section"><p className="eyebrow">What keeps me curious</p><div className="interest-list">{['Software Development', 'Backend Systems', 'Artificial Intelligence', 'Infrastructure', 'System Design', 'Music & Technology'].map((interest, index) => <div key={interest}><span>0{index + 1}</span>{interest}</div>)}</div></section>
    </main>
  );
}

function StackPage() {
  return (
    <main className="page-content portfolio-container">
      <PageHeading eyebrow="Stack" title="Tools I’ve worked with." description="Technologies I’ve used across personal projects, university work, experiments, and practical technical work. These labels describe experience, not expertise levels." />
      {stackGroups.map((category) => <section className="stack-section" key={category.label}><div className="section-heading-row"><h2>{category.label}</h2></div><div className="tech-grid">{category.names.map((name) => <TechCard key={name} technology={getStackTechnology(name)} />)}</div></section>)}
      <p className="stack-note">Gemini API: I use Google Gemini through its API; I didn&apos;t develop or train the model.</p>
    </main>
  );
}

function ExperiencePage() {
  return (
    <main className="page-content portfolio-container">
      <PageHeading eyebrow="Experience" title="Some of my work happens outside the code editor." description="I’ve also worked with infrastructure, email systems, troubleshooting, backup planning, and the technical side of day-to-day business operations." />
      <ol className="experience-list">{experience.map((item, index) => <li key={item.title}><span className="experience-list__number">0{index + 1}</span><div><h2>{item.title}</h2><p>{item.detail}</p></div><span className="experience-list__line" /></li>)}</ol>
    </main>
  );
}

function ContactPage() {
  const links = [
    { label: 'Email', detail: 'Send me a message', href: 'mailto:gilangriskik@gmail.com', value: 'gilangriskik@gmail.com', icon: { name: 'Gmail', slug: 'gmail', color: 'EA4335' }, external: false },
    { label: 'LinkedIn', detail: 'Connect with me', href: 'https://www.linkedin.com/in/gilang-riski-permana', value: 'Gilang Riski Permana', icon: { name: 'LinkedIn', slug: 'linkedin', color: '0A66C2' }, external: true },
    { label: 'GitHub', detail: 'See what I’m building', href: 'https://github.com/gilsngprmns', value: 'github.com/gilsngprmns', icon: { name: 'GitHub', slug: 'github', color: '181717' }, external: true },
  ];
  return (
    <main className="page-content portfolio-container contact-page">
      <PageHeading eyebrow="Contact" title="Let’s talk." description="If you want to talk about technology, a project, an internship, or an opportunity to work together, feel free to reach out." />
      <div className="contact-list">{links.map((link) => <a key={link.label} href={link.href} target={link.external ? '_blank' : undefined} rel={link.external ? 'noreferrer' : undefined}><div className="contact-list__label"><TechLogo technology={link.icon} /><span className="contact-list__label-copy">{link.label}<small>{link.detail}</small></span></div><span className="contact-list__value">{link.value}</span></a>)}</div>
    </main>
  );
}

function NotFoundPage({ navigate }) {
  return <main className="page-content portfolio-container"><PageHeading eyebrow="404" title="This page isn’t here." description="The address may have changed, or the page may not exist." /><AppLink href="/" navigate={navigate} className="text-link">Back home</AppLink></main>;
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const paperVideoRef = useRef(null);

  useEffect(() => {
    const onPopState = () => setPath(normalizePath(window.location.pathname));
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('popstate', onPopState);
    window.addEventListener('scroll', onScroll);
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('popstate', onPopState);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  useEffect(() => {
    const video = paperVideoRef.current;
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const syncPlayback = () => {
      if (motionPreference.matches) {
        video.pause();
        return;
      }
      video.play().catch(() => {});
    };

    syncPlayback();
    motionPreference.addEventListener('change', syncPlayback);
    return () => motionPreference.removeEventListener('change', syncPlayback);
  }, []);

  useEffect(() => {
    document.title = path === '/' ? 'Gilang Riski Permana — Portfolio' : `${path.split('/').filter(Boolean).at(-1)?.replaceAll('-', ' ') || 'Portfolio'} — Gilang Riski Permana`;
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
      <video ref={paperVideoRef} className="paper-texture-video" src={paperTextureVideo} muted loop playsInline preload="metadata" aria-hidden="true" tabIndex={-1} />
      <header className={`site-nav${isScrolled ? ' site-nav--scrolled' : ''}`}>
        <div className="portfolio-container site-nav__inner">
          <nav className={`site-nav__links${mobileMenuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
            {navigation.map((item) => <AppLink key={item.href} href={item.href} navigate={navigate} className={`site-nav__link${path === item.href || (item.href === '/projects' && path.startsWith('/projects/')) ? ' is-active' : ''}`}>{item.label}</AppLink>)}
          </nav>
          <AppLink href="/contact" navigate={navigate} className="site-nav__cta">Let&apos;s Talk</AppLink>
          <button type="button" className={`site-nav__menu${mobileMenuOpen ? ' is-open' : ''}`} aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={mobileMenuOpen} onClick={() => setMobileMenuOpen((open) => !open)}><span /><span /></button>
        </div>
      </header>
      <div key={path} className="route-view"><PageContent path={path} navigate={navigate} /></div>
      <footer className="site-footer">
        <div className="portfolio-container site-footer__main">
          <div className="site-footer__identity">
            <strong>Gilang Riski Permana</strong>
            <p>Information Systems · Developer · IT</p>
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
            <a className="site-footer__email" href="mailto:gilangriskik@gmail.com"><TechLogo technology={{ name: 'Gmail', slug: 'gmail', color: '000000' }} /><span>gilangriskik@gmail.com</span></a>
            <div className="site-footer__social">
              <a href="https://www.linkedin.com/in/gilang-riski-permana" target="_blank" rel="noreferrer"><TechLogo technology={{ name: 'LinkedIn', slug: 'linkedin', color: '000000' }} /><span>LinkedIn</span></a>
              <a href="https://github.com/gilsngprmns" target="_blank" rel="noreferrer"><TechLogo technology={{ name: 'GitHub', slug: 'github', color: '000000' }} /><span>GitHub</span></a>
            </div>
          </div>
        </div>
        <div className="portfolio-container site-footer__bottom"><span>Built while learning.</span><span>© {new Date().getFullYear()}</span></div>
      </footer>
    </div>
  );
}
