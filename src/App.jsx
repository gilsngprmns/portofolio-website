import { useEffect, useState } from 'react';
import profilePhoto from '../asset/profile.png';
import aiProjectImage from '../asset/Signal-AI-09-27-2026_03_55_PM.png';
import archiveProjectImage from '../asset/document archive.png';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' },
];

const projects = [
  {
    id: 'project-archive',
    category: 'FULL-STACK DEVELOPMENT',
    title: 'Document Archive System',
    subtitle: 'Web-based document management',
    description:
      'A document management and archiving application built to organize digital records by department and category, with secure access and a clearer document workflow.',
    role: 'Full-Stack Development',
    tags: ['React', 'Node.js', 'Express.js', 'PostgreSQL'],
    image: archiveProjectImage,
    live: false,
    github: '#',
    demo: '#',
    accent: 'blue',
    caseStudy: {
      overview:
        'A practical archive app for managing internal documents in a more structured way.',
      problem:
        'Records were spread across folders and manual processes, which made retrieval and organization slower and less reliable.',
      approach:
        'I designed a simple document system with category-based structure, authentication, and database-backed storage for better maintainability.',
      architecture: [
        'Frontend dashboard for archive browsing and management',
        'Node.js and Express backend for business logic',
        'PostgreSQL storage for document metadata and records',
        'User access flow based on department and role',
      ],
      stack: ['React', 'Node.js', 'Express.js', 'PostgreSQL'],
      features: [
        'Department-based document grouping',
        'Authentication and access control',
        'Structured archive layout',
        'Database-backed document management',
      ],
      challenges: [
        'Organizing content in a way that stays easy to navigate',
        'Keeping the system practical for real operational use',
        'Designing a workflow that can grow without becoming messy',
      ],
      learn: [
        'Good systems are built around workflow, not only interface design',
        'Document structures must be simple and clear to be useful',
        'Better backend structure makes future improvement easier',
      ],
      screenshots: ['Admin dashboard', 'Category structure', 'Document list', 'Upload flow'],
    },
  },
  {
    id: 'project-ai',
    category: 'AI • FULL-STACK DEVELOPMENT',
    title: 'AI Knowledge Base',
    subtitle: 'Conversational AI & knowledge system',
    description:
      'An AI-powered web app built to explore conversational AI and contextual knowledge systems using Google Gemini API with a modern full-stack architecture.',
    extra:
      'This project helped me learn AI API integration, backend structure, database usage, authentication, deployment, and performance tuning.',
    role: 'Full-Stack Development & AI Integration',
    tags: ['Gemini API', 'React', 'Node.js', 'Express.js', 'Vite', 'Supabase'],
    image: aiProjectImage,
    live: true,
    github: 'https://github.com/gilangriskik',
    demo: '#',
    accent: 'live',
    caseStudy: {
      overview:
        'An experimental knowledge assistant combining AI responses with a structured app backend and clear user flow.',
      problem:
        'I wanted to explore how AI can be used in a practical product workflow instead of just isolated prompts.',
      approach:
        'I built a frontend and backend structure around Gemini API, data storage, and user interaction so the app could feel more reliable and useful.',
      architecture: [
        'React frontend for interaction and layout',
        'Express API for backend logic',
        'Gemini API for contextual responses',
        'Supabase database support and project hosting workflow',
      ],
      stack: ['Gemini API', 'React', 'Node.js', 'Express.js', 'Vite', 'Supabase'],
      features: [
        'AI conversation flow',
        'Context-aware responses',
        'Structured knowledge handling',
        'Deployment-ready application setup',
      ],
      challenges: [
        'Balancing response quality with app performance',
        'Designing backend flow for AI requests and stored data',
        'Maintaining a clean product experience while experimenting',
      ],
      learn: [
        'AI products need strong architecture, not only good prompts',
        'Context and data flow matter as much as output quality',
        'Deployment decisions directly affect iteration speed',
      ],
      screenshots: ['AI chat UI', 'Knowledge structure', 'Context flow', 'Deployment setup'],
    },
  },
  {
    id: 'project-email',
    category: 'IT INFRASTRUCTURE • EMAIL SYSTEMS',
    title: 'Corporate Email Migration & Backup Architecture',
    subtitle: 'PT Veddira & Artha',
    description:
      'Worked on corporate email migration and archival planning to keep historical emails accessible while reducing dependency on hosting storage.',
    extra:
      'The work included migration planning, mailbox testing, Outlook data handling, provider setup, backup workflow design, and archive storage planning between laptops and internal server storage.',
    role: 'IT Infrastructure & Email Migration',
    tags: ['Jakhoster', 'Aksimaya', 'SMTP', 'IMAP', 'Outlook', 'Backup'],
    live: false,
    github: null,
    demo: null,
    accent: 'infra',
    caseStudy: {
      overview:
        'A practical infrastructure case study focused on reliable migration and archive continuity.',
      problem:
        'The client needed a safe migration path and backup model that preserved business continuity without losing access to old email data.',
      approach:
        'I worked on provider configuration, mailbox validation, archive planning, and backup flow design between user devices and server-side storage.',
      architecture: [
        'User laptop backup and PST management flow',
        'Server-side archive and retention planning',
        'SMTP and IMAP configuration testing',
        'Mail provider setup and deliverability check',
      ],
      stack: ['Jakhoster', 'Aksimaya', 'Outlook', 'SMTP', 'IMAP', 'Backup Strategy'],
      features: [
        'Email migration planning',
        'Mailbox validation and testing',
        'Historical archive management',
        'Backup structure across laptop and internal server',
      ],
      challenges: [
        'Keeping ongoing business operations stable during migration',
        'Designing archive backup without losing legacy access',
        'Verifying configuration and mail delivery carefully',
      ],
      learn: [
        'Infrastructure work is about reliability and process, not only tools',
        'Small configuration errors can affect email access and delivery',
        'Backup planning matters as much as migration itself',
      ],
      screenshots: ['Email flow diagram', 'Laptop → server → archive', 'Mail config check', 'Archive storage'],
    },
  },
];

const capabilityData = [
  {
    title: 'Web Development',
    description: 'Building structured, practical web applications with frontend, backend, APIs, and database logic.',
    index: '01',
  },
  {
    title: 'AI Integration',
    description: 'Exploring AI through APIs, assistants, and workflow improvements that are useful in real use cases.',
    index: '02',
  },
  {
    title: 'IT Infrastructure',
    description: 'Working with email systems, deployments, backups, server setups, and technical troubleshooting.',
    index: '03',
  },
  {
    title: 'System Thinking',
    description: 'Understanding processes, translating operational problems into systems, and improving how technology supports a business.',
    index: '04',
  },
];

const stackCategories = [
  {
    label: 'Frontend',
    items: [
      { name: 'HTML5', group: 'Using', icon: 'H' },
      { name: 'CSS3', group: 'Using', icon: 'C' },
      { name: 'JavaScript', group: 'Using', icon: 'JS' },
      { name: 'TypeScript', group: 'Using', icon: 'TS' },
      { name: 'React', group: 'Using', icon: 'R' },
      { name: 'Vite', group: 'Using', icon: 'V' },
    ],
  },
  {
    label: 'Backend',
    items: [
      { name: 'Node.js', group: 'Using', icon: 'N' },
      { name: 'Express.js', group: 'Using', icon: 'E' },
      { name: 'NestJS', group: 'Worked With', icon: 'N' },
    ],
  },
  {
    label: 'Database',
    items: [
      { name: 'PostgreSQL', group: 'Using', icon: 'PG' },
      { name: 'Supabase', group: 'Using', icon: 'S' },
      { name: 'MySQL', group: 'Worked With', icon: 'M' },
      { name: 'Prisma', group: 'Exploring', icon: 'P' },
    ],
  },
  {
    label: 'Mobile',
    items: [
      { name: 'React Native', group: 'Worked With', icon: 'RN' },
      { name: 'Expo', group: 'Worked With', icon: 'X' },
    ],
  },
  {
    label: 'Other Development',
    items: [
      { name: 'PHP', group: 'Worked With', icon: 'P' },
      { name: 'Laravel', group: 'Worked With', icon: 'L' },
    ],
  },
  {
    label: 'AI',
    items: [{ name: 'Gemini API', group: 'Using', icon: 'G' }],
  },
  {
    label: 'Development Tools',
    items: [
      { name: 'Git', group: 'Using', icon: 'G' },
      { name: 'GitHub', group: 'Using', icon: 'GH' },
      { name: 'VS Code', group: 'Using', icon: 'VS' },
    ],
  },
  {
    label: 'Design',
    items: [
      { name: 'Figma', group: 'Worked With', icon: 'F' },
      { name: 'Framer', group: 'Exploring', icon: 'Fr' },
    ],
  },
];

const exploringItems = ['AI Engineering', 'Backend Architecture', 'System Design', 'Cloud Deployment', 'Infrastructure', 'JavaScript Fundamentals'];

const experienceItems = [
  { title: 'Web Applications', description: 'Frontend and backend system development.' },
  { title: 'Database Systems', description: 'Relational databases, cloud databases, and data management.' },
  { title: 'Deployment', description: 'Deploying and configuring applications for real-world access.' },
  { title: 'Email Infrastructure', description: 'SMTP, IMAP, hosting configuration, migration, and delivery testing.' },
  { title: 'Backup Architecture', description: 'Planning email archives and backup workflows between user devices and internal infrastructure.' },
];

const projectCategories = ['Web Development', 'AI', 'Infrastructure', 'System Analysis', 'Design', 'Experimental Projects'];

function IconButton({ type }) {
  const commonProps = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.8',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': 'true',
  };

  if (type === 'github') {
    return (
      <svg {...commonProps}>
        <path d="M9 19c-4.3 1.3-4.3-2.6-6-3M15 22v-3.9c0-1.1.3-1.7 1.1-2.6 3.7-1.3 6.3-5.1 6.3-9.3 0-2.1-.8-4.1-2.2-5.6A7.7 7.7 0 0 0 16.2 1a7.5 7.5 0 0 0-5.4 2.4A7.8 7.8 0 0 0 8.9 7.3c0 4.2 2.6 8 6.3 9.3.8.9 1.1 1.5 1.1 2.6V22" />
      </svg>
    );
  }

  if (type === 'linkedin') {
    return (
      <svg {...commonProps}>
        <path d="M7 9.5V18M7 6.2v.1M11.5 18v-5.5c0-1.4.9-2.4 2.1-2.4 1.2 0 2 1 2 2.3V18M4 18V9.5" />
      </svg>
    );
  }

  if (type === 'mail') {
    return (
      <svg {...commonProps}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M4 7l8 6 8-6" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <circle cx="12" cy="12" r="8" />
      <path d="M8 12h8M12 8v8" />
    </svg>
  );
}

function App() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [isProjectExpanded, setIsProjectExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 18);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className="site-shell">
        <header className={`topbar ${isScrolled ? 'topbar--scrolled' : ''}`}>
          <div className="container nav-shell">
            <a href="#home" className="brand" aria-label="Go to home">
              Gilang.
            </a>

            <nav className="main-nav" aria-label="Main navigation">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="nav-link">
                  {item.label}
                </a>
              ))}
            </nav>

            <a href="#contact" className="nav-cta">
              Let&apos;s Talk <span aria-hidden="true">→</span>
            </a>
          </div>
        </header>

        <main>
          <section className="hero section page-section" id="home">
            <div className="container hero-grid">
              <div className="hero-copy">
                <p className="eyebrow">Information Systems • Developer • IT</p>
                <h1>
                  Hello, I&apos;m <span className="accent-text">Gilang</span>
                </h1>
                <p className="lead">
                  I build simple, practical digital products—web apps, AI workflows, and systems that help people work better.
                </p>
                <div className="hero-actions">
                  <a href="#projects" className="button button--primary">
                    Lihat Proyek <span aria-hidden="true">→</span>
                  </a>
                  <a href="mailto:gilangriskik@gmail.com" className="button button--secondary">
                    Hubungi Saya <span aria-hidden="true">→</span>
                  </a>
                </div>
                <div className="hero-meta">
                  <span>Jakarta, Indonesia</span>
                  <span className="status-pill"><i className="status-dot" aria-hidden="true"></i>Open to work</span>
                </div>
              </div>

              <div className="hero-visual">
                <img className="hero-portrait" src={profilePhoto} alt="Gilang Riski Permana" />
              </div>
            </div>
          </section>

          <section className="section panel-section page-section" id="about">
            <div className="container split-layout">
              <article className="panel panel-copy">
                <p className="eyebrow eyebrow--muted">Tentang Saya</p>
                <h3>Developer yang suka membangun sistem dan belajar dari proses.</h3>
                <p>
                  Saya Gilang Riski Permana, mahasiswa Information Systems yang tertarik pada web development, AI, dan IT infrastructure.
                  Saya suka memahami bagaimana teknologi bekerja sebagai sistem yang utuh, bukan hanya sekadar kode.
                </p>
                <p>
                  Proyek yang saya kerjakan biasanya fokus pada solusi praktis, pengalaman pengguna, dan proses yang mudah dipelihara dan dikembangkan lagi ke depannya.
                </p>
              </article>

              <article className="panel panel-stats">
                <div className="stat-block">
                  <span>3+</span>
                  <small>Tahun Belajar</small>
                </div>
                <div className="stat-block">
                  <span>10+</span>
                  <small>Project</small>
                </div>
                <div className="stat-block">
                  <span>∞</span>
                  <small>Belajar</small>
                </div>
              </article>
            </div>
          </section>

          <section className="section projects page-section" id="projects">
            <div className="container">
              <div className="section-header section-header--page">
                <p className="eyebrow eyebrow--muted">01 / Selected Work</p>
                <h3>Beberapa karya pilihan saya.</h3>
              </div>

              <div className="project-grid">
                {(isProjectExpanded ? projects : projects.slice(0, 3)).map((project) => (
                  <article key={project.id} className={`project-card project-card--${project.accent}`}>
                    <div className="project-media">
                      {project.image ? (
                        <img className="project-screenshot" src={project.image} alt={`${project.title} screenshot`} />
                      ) : (
                        <div className="project-placeholder" aria-hidden="true">Infrastructure</div>
                      )}
                      <div className="project-image-caption">
                        <span>{project.category}</span>
                        {project.live && <span className="live-badge">Live</span>}
                      </div>
                    </div>

                    <div className="project-body">
                      <div className="project-meta-row">
                        <span>{project.category}</span>
                        <span>{project.role}</span>
                      </div>
                      <h4>{project.title}</h4>
                      {project.subtitle && <p className="project-subtitle">{project.subtitle}</p>}
                      <p>{project.description}</p>

                      <div className="tag-list">
                        {project.tags.map((tag) => (
                          <span key={tag} className="tag">{tag}</span>
                        ))}
                      </div>

                      <div className="project-actions">
                        <button type="button" className="text-button" onClick={() => setSelectedProject(project)}>
                          Detail <span aria-hidden="true">→</span>
                        </button>
                        {project.github && project.github !== '#' && (
                          <a href={project.github} className="inline-link" target="_blank" rel="noreferrer">
                            GitHub <span aria-hidden="true">→</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <div className="view-all-block">
                <button type="button" className="view-all-button" onClick={() => setIsProjectExpanded((prev) => !prev)}>
                  {isProjectExpanded ? 'Sembunyikan' : 'Lihat Semua'}
                </button>
              </div>
            </div>
          </section>

          <section className="section stack page-section" id="stack">
            <div className="container stack-box">
              <div className="section-header compact-header">
                <p className="eyebrow eyebrow--muted">02 / Skills</p>
                <h3>Tools yang saya gunakan.</h3>
              </div>

              <div className="stack-grid">
                {stackCategories.map((group) => (
                  <div key={group.label} className="stack-group">
                    <h4>{group.label}</h4>
                    <div className="logo-grid">
                      {group.items.map((item) => (
                        <div key={item.name} className="logo-card" title={`${item.name} • ${item.group}`}>
                          <div className="logo-mark">{item.icon}</div>
                          <div className="logo-copy">
                            <strong>{item.name}</strong>
                            <span>{item.group}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="section contact page-section" id="contact">
            <div className="container contact-wrap">
              <div className="contact-copy">
                <p className="eyebrow eyebrow--muted">03 / Contact</p>
                <h3>Punya ide yang menarik?</h3>
                <p>
                  Saya terbuka untuk kerja sama, proyek, diskusi teknologi, dan peluang belajar yang relevan.
                </p>
              </div>

              <div className="contact-links">
                <a href="https://github.com/gilangriskik" target="_blank" rel="noreferrer">
                  <span className="social-icon"><IconButton type="github" /></span>
                  GitHub
                  <span aria-hidden="true">→</span>
                </a>
                <a href="https://www.linkedin.com/in/gilang-riski-permana" target="_blank" rel="noreferrer">
                  <span className="social-icon"><IconButton type="linkedin" /></span>
                  LinkedIn
                  <span aria-hidden="true">→</span>
                </a>
                <a href="mailto:gilangriskik@gmail.com">
                  <span className="social-icon"><IconButton type="mail" /></span>
                  gilangriskik@gmail.com
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </section>
        </main>

        <footer className="footer">
          <div className="container footer-shell">
            <div className="footer-brand">Gilang Riski Permana</div>
            <div className="footer-center">Information Systems • Developer • IT</div>
            <div className="footer-location">Jakarta, Indonesia</div>
          </div>
          <div className="container footer-note">Designed &amp; built with curiosity.</div>
        </footer>
      </div>

      {selectedProject && (
        <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className="project-modal" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="modal-close" onClick={() => setSelectedProject(null)}>✕</button>

            <div className="modal-header">
              <div>
                <p className="eyebrow eyebrow--muted">{selectedProject.category}</p>
                <h3>{selectedProject.title}</h3>
              </div>
              {selectedProject.live && <span className="live-badge live-badge--modal">Live</span>}
            </div>

            <div className="modal-grid">
              <div className="modal-panel">
                <h4>Overview</h4>
                <p>{selectedProject.caseStudy.overview}</p>
                <h4>Problem</h4>
                <p>{selectedProject.caseStudy.problem}</p>
                <h4>Approach</h4>
                <p>{selectedProject.caseStudy.approach}</p>
                <h4>Architecture</h4>
                <ul>{selectedProject.caseStudy.architecture.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>

              <div className="modal-panel">
                <h4>Tech Stack</h4>
                <div className="tag-list tag-list--modal">
                  {selectedProject.caseStudy.stack.map((item) => (
                    <span key={item} className="tag">{item}</span>
                  ))}
                </div>
                <h4>Key Features</h4>
                <ul>{selectedProject.caseStudy.features.map((item) => <li key={item}>{item}</li>)}</ul>
                <h4>Challenges</h4>
                <ul>{selectedProject.caseStudy.challenges.map((item) => <li key={item}>{item}</li>)}</ul>
                <h4>What I Learned</h4>
                <ul>{selectedProject.caseStudy.learn.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            </div>

            <div className="modal-visuals">
              {selectedProject.caseStudy.screenshots.map((item, index) => (
                <div key={item} className="mockup-block">
                  <span>{index + 1}</span>
                  <strong>{item}</strong>
                </div>
              ))}
            </div>

            <div className="modal-links">
              {selectedProject.github && selectedProject.github !== '#' ? (
                <a href={selectedProject.github} target="_blank" rel="noreferrer" className="button button--primary">
                  GitHub <span aria-hidden="true">→</span>
                </a>
              ) : (
                <button type="button" className="button button--secondary" disabled>
                  Infrastructure Case Study
                </button>
              )}
              {selectedProject.live && (
                <a href={selectedProject.demo} className="button button--secondary">
                  Live Project <span aria-hidden="true">→</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
