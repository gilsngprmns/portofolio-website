import { useEffect, useState } from 'react';
import profilePhoto from '../asset/profile.png';
import aiProjectImage from '../asset/Admin Signal ai.png';
import aiGalleryImage from '../asset/Signal-AI-09-30-2026_11_21_PM.png';
import archiveProjectImage from '../asset/document archive.png';
import mailhostingArchitectureImage from '../asset/mailhosting arsitektur.png';
import companyProfileImage from '../asset/company profile.PNG';

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
    title: 'Document Archive System',
    subtitle: 'Web-based Document Management System',
    category: 'Development',
    categoryLabel: 'Full-Stack Development',
    description: 'A web-based document management system built to organize files by section and category with structured archiving and secure access.',
    role: 'Full-Stack Development',
    image: archiveProjectImage,
    technologies: ['React', 'Node.js', 'Express.js', 'PostgreSQL'],
    overview: 'This project started as a document archiving system for managing files based on sections and categories.',
    context: 'The system is intended to make company documents easier to organize and retrieve.',
    problem: 'Documents need a consistent structure so users can find the right file later, not only upload it once.',
    approach: 'I structured the app around the way people browse records: by department, category, and document. The frontend, API, and database each have a clear role.',
    architecture: ['React interface', 'Node.js and Express API', 'PostgreSQL records and metadata'],
    responsibilities: ['Department-based organization', 'Authentication and access flow', 'Document listing and archive structure'],
    challenges: ['Keeping the category structure easy to navigate', 'Making the data model flexible without overcomplicating the workflow'],
    learning: 'This project made me think more about how people actually retrieve information. A useful archive depends on its data structure just as much as its interface.',
    github: 'https://github.com/gilsngprmns/dokumen-arsip',
    live: null,
  },
  {
    slug: 'ai-knowledge-base',
    title: 'AI Knowledge Base',
    category: 'AI',
    categoryLabel: 'AI Integration / Full Stack',
    description: 'An experiment with conversational AI using the Gemini API, combined with backend services, authentication, database management, and deployment.',
    role: 'Full-Stack Development & AI Integration',
    image: aiProjectImage,
    gallery: [aiGalleryImage],
    technologies: ['React', 'Vite', 'Node.js', 'Express.js', 'Supabase', 'Gemini API'],
    deployment: 'Vercel',
    isLive: true,
    live: 'https://signal-ai-assistan.vercel.app/',
    overview: 'A web application exploring how conversational AI can work as part of a larger product, with a frontend, backend, database, authentication, and deployment workflow.',
    context: 'This was my first project where I wanted to connect an AI API to a complete application rather than test prompts on their own.',
    problem: 'An AI response is only one part of the experience. The request flow, user context, data, and failure cases also need to make sense.',
    approach: 'I connected a React and Vite frontend to an Express backend, integrated the Gemini API, and used Supabase for cloud data and authentication.',
    geminiIntegration: 'The most interesting part was not just getting Gemini to respond. The request also needed to fit into the application flow, with useful loading and error states around an external API call.',
    backendDetail: 'The Express service sits between the browser and Gemini. That gives the application a place to handle requests without exposing provider credentials in the frontend.',
    databaseDetail: 'Supabase was used for application data and authentication, keeping account and knowledge-related data outside the browser session.',
    performanceDetail: 'I focused on keeping the request path straightforward and making wait states clear. I still want to measure response time more systematically as the project grows.',
    architecture: ['React and Vite interface', 'Express API for application requests', 'Gemini API for generated responses', 'Supabase for data and authentication', 'Vercel deployment'],
    responsibilities: ['AI API integration', 'Frontend and backend flow', 'Database and authentication setup', 'Deployment and troubleshooting'],
    challenges: ['Handling API and deployment configuration together', 'Keeping the request and data flow understandable'],
    learning: 'I learned that the prompt is only one piece of an AI feature. Backend flow, stored context, configuration, and what happens when a request fails matter just as much.',
    github: 'https://github.com/gilsngprmns/signal-ai-assistant',
  },
  {
    slug: 'email-migration',
    title: 'Corporate Email Migration & Backup Architecture',
    category: 'Infrastructure',
    categoryLabel: 'IT Infrastructure',
    organization: 'PT Veddira & Artha',
    description: 'Email migration, archive planning, provider configuration, and backup workflow work for PT Veddira & Artha.',
    role: 'IT Infrastructure & Email Migration',
    image: mailhostingArchitectureImage,
    technologies: ['Jakhoster', 'Aksimaya', 'SMTP', 'IMAP', 'Outlook PST'],
    overview: 'Practical work on corporate email migration and archival planning, with an emphasis on keeping historical email accessible and reducing reliance on hosting storage.',
    context: 'The company needed to migrate mailboxes while retaining access to older messages and making backup responsibilities clearer.',
    problem: 'Email configuration, historical archives, and backups across user laptops and internal storage had to work together without disrupting daily use.',
    approach: 'I helped with provider configuration, mailbox testing, Outlook data handling, and planning a backup flow between user devices and internal server storage.',
    architecture: ['Jakhoster and Aksimaya provider setup', 'SMTP and IMAP mailbox configuration', 'Outlook PST archive on user laptops', 'Internal server archive and backup planning'],
    existingSetup: 'Mailboxes were managed through hosted providers, while older messages also needed to remain available to users in Outlook.',
    migrationPlan: 'The work involved checking mailbox access and provider settings, planning the transition, and making sure the historical archive had a place in the workflow.',
    emailTesting: 'Mailbox access, sending and receiving, SMTP / IMAP settings, and deliverability were checked as part of the configuration work.',
    emailSolution: 'The resulting plan connected provider mailboxes to Outlook, retained historical mail as PST archives on user laptops, and included internal server and backup storage planning.',
    emailDiagram: ['Email Provider', 'Mailbox', 'Outlook', 'PST Archive', 'User Laptop', 'Internal Server', 'Backup Storage'],
    responsibilities: ['Email migration and mailbox testing', 'SMTP / IMAP configuration', 'Deliverability checks', 'Archive planning and Outlook PST handling', 'Laptop and internal server backup workflow'],
    challenges: ['Keeping mail access stable during configuration changes', 'Preserving historical email while planning a practical archive', 'Testing delivery and mailbox access across providers'],
    learning: 'This work showed me how small configuration details affect real operations. A migration plan also needs a clear backup and recovery path, not only a way to move mail.',
    github: null,
    live: null,
  },
  {
    slug: 'company-profile',
    title: 'Company Profile',
    category: 'Development',
    categoryLabel: 'Web Development',
    description: 'A company website that introduces the organization, outlines its services, and helps visitors find the right contact information.',
    role: 'Company Profile Website',
    image: companyProfileImage,
    technologies: [],
    overview: 'A company profile website that presents the organization and its services in a clear, easy-to-browse format.',
    context: 'The site gives the company a dedicated place to introduce its work and share useful information with visitors.',
    problem: 'Visitors need to understand what the company does and where to go next without searching through unrelated content.',
    approach: 'The content is organized around the company introduction, its services, and contact information.',
    architecture: ['Company introduction', 'Services overview', 'Contact information'],
    responsibilities: ['Page structure and content hierarchy', 'Clear paths to company information'],
    challenges: ['Keeping the information easy to scan', 'Making the presentation work across screen sizes'],
    learning: 'A company profile has to make the important information easy to find. Clear content structure matters as much as the visual design.',
    github: null,
    live: null,
  },
];

const primaryTechnologies = [
  { name: 'JavaScript', slug: 'javascript', color: 'F7DF1E', state: 'Using' },
  { name: 'React', slug: 'react', color: '61DAFB', state: 'Using' },
  { name: 'Node.js', slug: 'nodedotjs', color: '5FA04E', state: 'Using' },
  { name: 'Express.js', slug: 'express', color: 'FFFFFF', state: 'Using' },
  { name: 'PostgreSQL', slug: 'postgresql', color: '4169E1', state: 'Using' },
  { name: 'Supabase', slug: 'supabase', color: '3FCF8E', state: 'Using' },
  { name: 'Vite', slug: 'vite', color: '646CFF', state: 'Using' },
  { name: 'Git', slug: 'git', color: 'F05032', state: 'Using' },
  { name: 'GitHub', slug: 'github', color: 'FFFFFF', state: 'Using' },
  { name: 'Gemini API', slug: 'googlegemini', color: '8E75B2', state: 'Using' },
];

const technologyColors = {
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
  Expo: ['expo', 'FFFFFF'],
  Figma: ['figma', 'F24E1E'],
  Framer: ['framer', '0055FF'],
  'VS Code': ['visualstudiocode', '007ACC'],
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

function Arrow() {
  return <span aria-hidden="true" className="portfolio-arrow">→</span>;
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
  return (
    <article className={`project-card${compact ? ' project-card--compact' : ' project-card--wide'}${infrastructureClass}`}>
      <AppLink href={`/projects/${project.slug}`} navigate={navigate} className="project-card__image-link" aria-label={`Open ${project.title}`}>
        {project.image ? (
          <img className="project-card__image" src={project.image} alt={`${project.title} interface`} loading="lazy" />
        ) : (
          <div className="project-card__image project-card__image--empty"><span>{project.category === 'Infrastructure' ? 'Mail systems / Archive / Backup' : `${project.title} / Overview / Services`}</span></div>
        )}
        {project.isLive && <span className="project-card__live">Live</span>}
        <span className="project-card__image-arrow"><Arrow /></span>
      </AppLink>
      <div className="project-card__body">
        <p className="project-card__category">{project.categoryLabel}</p>
        <h2><AppLink href={`/projects/${project.slug}`} navigate={navigate}>{project.title}</AppLink></h2>
        <p>{project.description}</p>
        <div className="tag-list">
          {project.technologies.slice(0, 4).map((technology) => <span className="tag" key={technology}>{technology}</span>)}
        </div>
        <div className="project-card__actions">
          <AppLink href={`/projects/${project.slug}`} navigate={navigate} className="text-link">
            {project.category === 'Infrastructure' ? 'View case study' : 'View project'} <Arrow />
          </AppLink>
          {project.live && <a className="text-link" href={project.live} target="_blank" rel="noreferrer">Live site ↗</a>}
          {project.github && <a className="text-link" href={project.github} target="_blank" rel="noreferrer">GitHub ↗</a>}
        </div>
      </div>
    </article>
  );
}

function TechLogo({ technology }) {
  const [imageFailed, setImageFailed] = useState(false);
  return (
    <div className="tech-logo" aria-hidden="true">
      {imageFailed ? (
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

function HomePage({ navigate }) {
  return (
    <main className="home-page">
      <section className="home-hero portfolio-container">
        <div className="home-hero__copy">
          <p className="eyebrow">Final-year Information Systems Student</p>
          <h1><span>Gilang Riski</span><span>Permana</span></h1>
          <h2>I build web apps, explore AI, and like understanding the systems behind the interface.</h2>
          <p className="home-hero__paragraph">Final-year Information Systems student at Universitas Indraprasta PGRI. I learn by building, troubleshooting, and figuring things out.</p>
          <div className="action-row">
            <AppLink href="/projects" navigate={navigate} className="button button--primary">View My Work <Arrow /></AppLink>
            <AppLink href="/about" navigate={navigate} className="button button--text">More About Me</AppLink>
          </div>
          <div className="status-line"><span className="status-open"><i />Open to opportunities</span><span>Jakarta, Indonesia</span></div>
        </div>
        <div className="home-hero__visual">
          <div className="home-portrait-frame">
            <img className="home-portrait" src={profilePhoto} alt="Gilang Riski Permana" />
          </div>
        </div>
      </section>

      <section className="home-section portfolio-container">
        <div className="section-heading-row">
          <div><p className="eyebrow">Featured work</p><h2>Some of the things I&apos;ve worked on.</h2></div>
          <p>A few projects that show the kind of things I&apos;ve been working on.</p>
        </div>
        <div className="project-grid project-grid--home">
          {projects.slice(0, 3).map((project) => <ProjectCard key={project.slug} project={project} navigate={navigate} compact />)}
        </div>
        <AppLink href="/projects" navigate={navigate} className="section-more">See all projects <Arrow /></AppLink>
      </section>

      <section className="home-section portfolio-container">
        <div className="section-heading-row">
          <div><p className="eyebrow">Tech preview</p><h2>Tools I use.</h2></div>
          <AppLink href="/stack" navigate={navigate} className="section-more">See my full stack <Arrow /></AppLink>
        </div>
        <div className="tech-marquee" role="region" aria-label="Technologies I use">
          <div className="tech-marquee__track">
            {[0, 1].map((copy) => (
              <div className="tech-marquee__group" key={copy} aria-hidden={copy === 1}>
                {primaryTechnologies.map((technology) => <TechCard key={technology.name} technology={technology} bubble />)}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-about portfolio-container">
        <div><p className="eyebrow">About</p><h2>I like understanding how the parts of technology connect together.</h2></div>
        <div><p>Frontend, backend, databases, deployment, infrastructure, and how people actually use the system are all interesting to me.</p><AppLink href="/about" navigate={navigate} className="text-link">Read more about me <Arrow /></AppLink></div>
      </section>

      <section className="home-cta portfolio-container">
        <p className="eyebrow">Contact</p>
        <h2>Want to talk about something interesting?</h2>
        <p>I&apos;m open to conversations about development, technology, projects, internships, and opportunities to learn.</p>
        <AppLink href="/contact" navigate={navigate} className="button button--primary">Get in touch <Arrow /></AppLink>
      </section>
    </main>
  );
}

function ProjectsPage({ navigate }) {
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'Development', 'AI', 'Infrastructure', 'Design'];
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
      <AppLink href="/projects" navigate={navigate} className="back-link"><span aria-hidden="true">←</span> All projects</AppLink>
      <header className="case-study__hero">
        <p className="eyebrow">{project.categoryLabel}</p>
        <h1>{project.title}</h1>
        {project.subtitle && <p className="case-study__subtitle">{project.subtitle}</p>}
        <p className="case-study__role">{project.organization ? `${project.organization} · ` : ''}{project.role}</p>
        {project.deployment && <p className="case-study__role">Deployment: {project.deployment}</p>}
        <div className="tag-list">{project.technologies.map((technology) => <span key={technology} className="tag">{technology}</span>)}</div>
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
          <section><h2>Gallery</h2><a href="#case-cover" className="text-link">View document archive screenshot <Arrow /></a></section>
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
          <section><h2>Gallery</h2><div className="case-gallery">{project.gallery.map((image, index) => <figure key={image}><img src={image} alt={`AI Knowledge Base screenshot ${index + 2}`} /><figcaption>AI Knowledge Base · screenshot {index + 2}</figcaption></figure>)}</div><a href="#case-cover" className="text-link">Back to main screenshot <Arrow /></a></section>
        </>}
        {isEmailProject && <>
          <section><h2>Context</h2><p>{project.context}</p></section>
          <section><h2>Existing Setup</h2><p>{project.existingSetup}</p></section>
          <section><h2>Migration Plan</h2><p>{project.migrationPlan}</p></section>
          <section><h2>Email Providers</h2><p>{project.organization} used provider services including Jakhoster and Aksimaya as part of the mail setup.</p><figure className="mailhosting-figure"><img src={mailhostingArchitectureImage} alt="Mailhosting architecture diagram" /><figcaption>Mailhosting architecture</figcaption></figure></section>
          <section><h2>SMTP / IMAP</h2><p>Mailbox configuration and delivery were checked over SMTP and IMAP during the migration work.</p></section>
          <section><h2>Outlook & PST Archive</h2><p>Outlook PST files provided a way to keep historical email available on user laptops while planning longer-term storage.</p></section>
          <section><h2>Backup Workflow</h2><p>{project.approach}</p><ol className="email-flow">{project.emailDiagram.map((step, index) => <li key={step}><span className="email-flow__node">{step}</span>{index < project.emailDiagram.length - 1 && <span className="email-flow__arrow" aria-hidden="true">↓</span>}</li>)}</ol></section>
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
          <section className="case-study__two-col"><div><h2>Challenges</h2><ul className="simple-list">{project.challenges.map((item) => <li key={item}>{item}</li>)}</ul></div><div><h2>What I learned</h2><p>{project.learning}</p></div></section>
        </>}
        {(project.github || project.live) && <section className="case-study__links"><h2>Links</h2>{project.github && <a href={project.github} target="_blank" rel="noreferrer" className="text-link">GitHub <span aria-hidden="true">↗</span></a>}{project.live && <a href={project.live} target="_blank" rel="noreferrer" className="text-link">Live site <span aria-hidden="true">↗</span></a>}</section>}
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
    { label: 'Email', detail: 'Send me a message', href: 'mailto:gilangriskik@gmail.com', value: 'gilangriskik@gmail.com', external: false },
    { label: 'LinkedIn', detail: 'Connect with me', href: 'https://www.linkedin.com/in/gilang-riski-permana', value: 'Gilang Riski Permana', external: true },
    { label: 'GitHub', detail: 'See what I’m building', href: 'https://github.com/gilangriskik', value: 'github.com/gilangriskik', external: true },
  ];
  return (
    <main className="page-content portfolio-container contact-page">
      <PageHeading eyebrow="Contact" title="Let’s talk." description="If you want to talk about technology, a project, an internship, or an opportunity to work together, feel free to reach out." />
      <div className="contact-list">{links.map((link) => <a key={link.label} href={link.href} target={link.external ? '_blank' : undefined} rel={link.external ? 'noreferrer' : undefined}><span className="contact-list__label">{link.label}<small>{link.detail}</small></span><span className="contact-list__value">{link.value}</span><Arrow /></a>)}</div>
    </main>
  );
}

function NotFoundPage({ navigate }) {
  return <main className="page-content portfolio-container"><PageHeading eyebrow="404" title="This page isn’t here." description="The address may have changed, or the page may not exist." /><AppLink href="/" navigate={navigate} className="text-link">Back home <Arrow /></AppLink></main>;
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
      <header className={`site-nav${isScrolled ? ' site-nav--scrolled' : ''}`}>
        <div className="portfolio-container site-nav__inner">
          <nav className={`site-nav__links${mobileMenuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
            {navigation.map((item) => <AppLink key={item.href} href={item.href} navigate={navigate} className={`site-nav__link${path === item.href || (item.href === '/projects' && path.startsWith('/projects/')) ? ' is-active' : ''}`}>{item.label}</AppLink>)}
          </nav>
          <AppLink href="/contact" navigate={navigate} className="site-nav__cta">Let&apos;s Talk <Arrow /></AppLink>
          <button type="button" className={`site-nav__menu${mobileMenuOpen ? ' is-open' : ''}`} aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={mobileMenuOpen} onClick={() => setMobileMenuOpen((open) => !open)}><span /><span /></button>
        </div>
      </header>
      <div key={path} className="route-view"><PageContent path={path} navigate={navigate} /></div>
      <footer className="site-footer">
        <div className="portfolio-container site-footer__top"><strong>Gilang Riski Permana</strong><span>Information Systems · Developer · IT</span><span>Jakarta, Indonesia</span></div>
        <div className="portfolio-container site-footer__bottom"><span>Built while learning.</span><span>© {new Date().getFullYear()}</span></div>
      </footer>
    </div>
  );
}
