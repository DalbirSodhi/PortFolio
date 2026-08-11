'use client';

import { useEffect, useMemo, useState } from 'react';
import { site } from '@/data/site';

const Arrow = ({ diagonal = false }) => (
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <path d={diagonal ? 'M5 15 15 5M7 5h8v8' : 'M4 10h12M11 5l5 5-5 5'} />
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="solid-icon">
    <path d="M12 2.7a9.5 9.5 0 0 0-3 18.5c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 0 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 2.9.9.1-.7.4-1.1.7-1.4-2.3-.3-4.7-1.1-4.7-5.1 0-1.1.4-2 1-2.8-.1-.3-.4-1.3.1-2.8 0 0 .8-.3 2.9 1.1a10 10 0 0 1 5.2 0c2-1.4 2.8-1.1 2.8-1.1.6 1.5.2 2.5.1 2.8.7.8 1.1 1.7 1.1 2.8 0 4-2.4 4.8-4.7 5.1.4.3.7 1 .7 1.9v2.6c0 .3.2.6.7.5A9.5 9.5 0 0 0 12 2.7Z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="solid-icon">
    <path d="M6.7 8.6H3.5V19h3.2V8.6ZM5.1 3.5a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8Zm13.8 9.6c0-3.1-1.7-4.8-4-4.8-1.8 0-2.7 1-3.1 1.7V8.6H8.6V19h3.2v-5.2c0-1.4.3-2.7 2-2.7 1.7 0 1.7 1.6 1.7 2.8V19h3.2l.2-5.9Z" />
  </svg>
);

function AmbientCursor() {
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) {
      return undefined;
    }

    const root = document.documentElement;

    const move = (event) => {
      root.style.setProperty('--mx', `${event.clientX}px`);
      root.style.setProperty('--my', `${event.clientY}px`);
    };

    window.addEventListener('pointermove', move, { passive: true });

    return () => window.removeEventListener('pointermove', move);
  }, []);

  return null;
}

function useReplayReveal(selector, refreshKey = null) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    if (!elements.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const shouldShow = entry.intersectionRatio >= 0.16;
          entry.target.classList.toggle('visible', shouldShow);
        });
      },
      {
        threshold: [0, 0.16],
        rootMargin: '-2% 0px -6% 0px'
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [selector, refreshKey]);
}

function Nav() {
  const [open, setOpen] = useState(false);

  const links = [
    ['Projects', '#work'],
    ['Stack', '#stack'],
    ['Journey', '#journey'],
    ['About', '#about'],
    ['Contact', '#contact']
  ];

  return (
    <header className="nav-wrap">
      <a className="brand" href="#top" aria-label="Dalbir Singh, home">
        <span className="brand-name">Dalbir Singh</span>
      </a>

      <nav className={`nav ${open ? 'nav-open' : ''}`} aria-label="Primary navigation">
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </nav>

      <div className="nav-actions">
        <span className="availability"><i /> {site.availability}</span>

        <button
          className="menu"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

function Hero() {
  const socialLinks = useMemo(() => [
    site.links.github && { label: 'GitHub', href: site.links.github, icon: <GithubIcon /> },
    site.links.linkedin && { label: 'LinkedIn', href: site.links.linkedin, icon: <LinkedInIcon /> }
  ].filter(Boolean), []);

  return (
    <section className="hero section-shell" id="top">
      <div className="hero-copy">
        <p className="eyebrow reveal">Software Developer</p>
        <h1 className="hero-title reveal delay-1">
          From interface
          <span>to infrastructure.</span>
        </h1>
        <p className="hero-lede reveal delay-2">{site.intro}</p>
        <div className="hero-actions reveal delay-3">
          <a className="button button-primary" href="#work">Explore my work <Arrow /></a>
          <a className="button button-ghost" href="#stack">Technical stack <Arrow diagonal /></a>
        </div>
        <div className="social-row reveal delay-3">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer" aria-label={link.label}>{link.icon}</a>
          ))}
          {site.links.source && (
            <a className="source-link" href={site.links.source} target="_blank" rel="noreferrer">Portfolio source ↗</a>
          )}
        </div>
      </div>

      <div className="hero-visual reveal delay-2" aria-label="Developer profile visual">
        <div className="profile-orbit orbit-a" />
        <div className="profile-orbit orbit-b" />
        <div className="hero-card">
          <div className="portrait-frame">
            {site.portrait ? (
              
              <img src={site.portrait} alt="Dalbir Singh" />
            ) : (
              <div className="monogram">
                <span>{site.initials}</span>
                <small>Your photo goes here</small>
              </div>
            )}
          </div>
          <div className="hero-card-meta"><span>DALBIR </span><span>BC / CANADA</span></div>
        </div>
        <div className="skill-node node-mobile"><span>Frontend + Mobile</span></div>
        <div className="skill-node node-backend"><span>Backend + Database</span></div>
        <div className="skill-node node-cloud"><span>System Design</span></div>
        <div className="skill-node node-ai"><span>Cloud + AI</span></div>
      </div>

      <div className="hero-bottom reveal delay-3">
        <span>React Native</span><i />
        <span>Node.js</span><i />
        <span>System Design</span><i />
        <span>Cloud</span><i />
        <span>AI</span>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ['React Native', 'React', 'Expo', 'Node.js', 'Express', 'MongoDB', 'Firebase', 'System Design', 'REST APIs', 'Docker', 'AWS', 'SwiftUI', 'Flutter', 'OpenAI Vision'];
  return (
    <div className="marquee" aria-label="Technologies">
      <div className="marquee-track">
        {[...items, ...items].map((item, index) => <span key={`${item}-${index}`}>{item}<i>✦</i></span>)}
      </div>
    </div>
  );
}

function ProjectVisual({ visual, title }) {
  if (visual === 'marketplace') {
    return (
      <div className="project-art art-marketplace">
        <div className="market-auth"><span>RENT</span><b>Jacket</b></div>
        <div className="market-chat"><span>BUY</span><b>Style</b></div>
        <div className="market-card market-one">Firebase Auth ✓</div>
        <div className="market-card market-two"><span>LIVE CHAT</span><b>user ↔ user</b></div>
        <div className="visual-flow visual-flow-rentique">
          <span>Firebase Auth</span><i>→</i><span>MVC</span><i>→</i><span>Live Chat</span>
        </div>
        <div className="art-caption"><span>MARKETPLACE</span><b>WEB / FIREBASE</b></div>
      </div>
    );
  }
  if (visual === 'inventory') {
    return (
      <div className="project-art art-inventory">
        <div className="inventory-bars"><i /><i /><i /><i /></div>
        <div className="inventory-search">Search products...</div>
        <div className="expiry-chip">Expiry alerts</div>
        <div className="inventory-voice">VOICE</div>
        <div className="inventory-groq">AI COMMANDS</div>
        <div className="inventory-barcode">CAMERA / BARCODE</div>
        <div className="visual-flow visual-flow-shelf">
          <span>Voice</span><i>→</i><span>Deepgram</span><i>→</i><span>Groq</span>
        </div>
        <div className="art-caption"><span>INVENTORY</span><b>VOICE / CAMERA / AI</b></div>
      </div>
    );
  }
  if (visual === 'vision') {
    return (
      <div className="project-art art-vision">
        <div className="vision-grid" />
        <div className="vision-frame"><span>SCAN</span><b>94%</b></div>
        <div className="vision-pipe pipe-v" /><div className="vision-pipe pipe-h" />
        <div className="vision-beam" />
        <div className="vision-chip vision-openai">OPENAI</div>
        <div className="vision-chip vision-yolo">YOLO DETECT</div>
        <div className="visual-flow visual-flow-fixbee">
          <span>Photo</span><i>→</i><span>YOLO</span><i>→</i><span>OpenAI</span>
        </div>
        <div className="art-caption"><span>IMAGE ANALYSIS</span><b>VISION / GUARDRAILS</b></div>
      </div>
    );
  }
  if (visual === 'meals') {
    return (
      <div className="project-art art-meals">
        <div className="meal-orbit"><div className="plate"><i /><i /><i /></div></div>
        <div className="meal-card meal-card-a"><span>CHICKEN</span><b>12 meals</b></div>
        <div className="meal-card meal-card-b"><span>VEGETARIAN</span><b>Browse →</b></div>
        <div className="art-caption"><span>REMOTE DATA</span><b>API / RN</b></div>
      </div>
    );
  }
  if (visual === 'planner') {
    return (
      <div className="project-art art-planner">
        <div className="planner-phone">
          <span className="phone-top">TODAY</span>
          {['Breakfast', 'Lunch', 'Dinner'].map((meal) => <div className="planner-row" key={meal}><span>{meal}</span><b>•••</b></div>)}
          <div className="planner-add">＋ Add meal</div>
        </div>
        <div className="art-caption"><span>LOCAL STORAGE</span><b>CRUD</b></div>
      </div>
    );
  }
  if (visual === 'auth') {
    return (
      <div className="project-art art-auth">
        <div className="auth-lock"><span>•</span></div>
        <div className="token token-a">eyJhbGciOiJIUzI1NiJ9</div>
        <div className="token token-b">Authorization: Bearer •••••</div>
        <div className="auth-route"><span>POST /login</span><b>200</b></div>
        <div className="art-caption"><span>PROTECTED ROUTES</span><b>JWT / BCRYPT</b></div>
      </div>
    );
  }
  if (visual === 'cloud') {
    return (
      <div className="project-art art-cloud">
        <div className="cloud-flow">
          <div><b>Internet</b></div><i>→</i>
          <div><b>Apache</b></div><i>→</i>
          <div><b>Docker</b></div><i>→</i>
          <div><b>Node</b></div>
        </div>
        <div className="cloud-chip">AWS / EC2</div>
        <div className="cloud-chip chip-redis">REDIS</div>
        <div className="art-caption"><span>DEPLOYMENT</span><b>CLOUD</b></div>
      </div>
    );
  }
  if (visual === 'swift') {
    return (
      <div className="project-art art-swift">
        <div className="swift-window">
          <div className="swift-title">Students</div>
          {['Alice', 'Brian', 'Cindy'].map((name) => <div className="swift-row" key={name}><i>{name[0]}</i><div><b>{name}</b><span>Development</span></div><em>›</em></div>)}
        </div>
        <div className="art-caption"><span>DATA-DRIVEN UI</span><b>SWIFTUI</b></div>
      </div>
    );
  }
  if (visual === 'mood') {
    return (
      <div className="project-art art-mood">
        <div className="mood-copy"><span>HOW ARE YOU?</span><b>Pick a mood.</b></div>
        <div className="mood-bubble bubble-1">🙂</div><div className="mood-bubble bubble-2">😌</div><div className="mood-bubble bubble-3">😶</div>
        <div className="art-caption"><span>STATE + NAVIGATION</span><b>FLUTTER</b></div>
      </div>
    );
  }
  return <div className="project-art"><span>{title}</span></div>;
}

function Work() {
  const featuredProjects = site.projects.slice(0, 3);
  const moreProjects = site.projects.slice(3);

  useReplayReveal('.featured-project');
  useReplayReveal('.archive-work-item');

  return (
    <section className="work section-shell" id="work">
      <div className="section-heading selected-work-heading">
        <div>
          <p className="eyebrow">Selected Work</p>
          <h2>Three products.<br />Different systems.</h2>
        </div>

        <p>
          Three builds that show how I work across product experience,
          application architecture, real-time features and applied AI.
        </p>
      </div>

      <div className="featured-projects">
        {featuredProjects.map((project, index) => (
          <article
            className={`featured-project featured-project-${index + 1}`}
            key={project.slug}
          >
            <div className="featured-info">
              <div className="featured-topline">
                <span>0{index + 1} / 03</span>
                <b>{project.categories.join(' · ')}</b>
              </div>

              <div className="featured-info-kicker">
                <span>{project.role}</span>
                <b>{project.subtitle}</b>
              </div>

              <h3>{project.title}</h3>
              <p className="featured-description">{project.description}</p>

              <div className="featured-focus">
                <span>Core stack</span>
                <div>
                  {project.stack.slice(0, 5).map((tag) => (
                    <b key={tag}>{tag}</b>
                  ))}
                </div>
              </div>

              <div className="featured-highlights">
                <span>Major delivery</span>
                <div className="featured-highlight-grid">
                  {project.highlights.map((highlight) => (
                    <div className="featured-highlight" key={highlight}>
                      <i />
                      <strong>{highlight}</strong>
                    </div>
                  ))}
                </div>
              </div>

              <a
                className="featured-link"
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                {project.linkLabel} <Arrow diagonal />
              </a>
            </div>

            <div className="featured-visual-shell">
              <ProjectVisual visual={project.visual} title={project.title} />
            </div>
          </article>
        ))}
      </div>

      <div className="more-work">
        <div className="more-work-heading">
          <div>
            <p className="eyebrow">More Work</p>
            <h3>More code. Less scroll.</h3>
          </div>

          <a href={site.links.github} target="_blank" rel="noreferrer">
            View full GitHub <Arrow diagonal />
          </a>
        </div>

        <div className="archive-work-list">
          {moreProjects.map((project, index) => (
            <a
              className={`archive-work-item archive-work-${(index % 2) + 1}`}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              key={project.slug}
            >
              <span className="archive-index">
                {String(index + 1).padStart(2, '0')}
              </span>

              <div className="archive-work-copy">
                <div>
                  <h4>{project.title}</h4>
                  <span>{project.subtitle}</span>
                </div>

                <p>{project.stack.slice(0, 3).join(' · ')}</p>
              </div>

              <i>↗</i>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stack() {
  useReplayReveal('.capability-reveal');

  return (
    <section className="stack section-shell" id="stack">
      <div className="section-heading compact">
        <div><p className="eyebrow">Technical Range</p><h2>Across the stack.<br />Connected by systems thinking.</h2></div>
        <p>Not just a list of tools — these are the areas I have been building and learning through real coursework, team products and individual projects.</p>
      </div>

      <div className="capability-grid">
        {site.capabilities.map((capability, index) => {
          const revealClass = `capability-reveal capability-reveal-${(index % 3) + 1}`;

          return (
            <article
              className={`capability-card ${revealClass}`}
              key={capability.title}
            >
              <div className="capability-top"><span>{capability.title.split(' ')[0]}</span><i>↗</i></div>
              <h3>{capability.title}</h3>
              <p>{capability.text}</p>
              <div className="tag-row subtle">{capability.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section className="journey" id="journey">
      <div className="section-shell journey-inner">
        <div className="journey-heading">
          <p className="eyebrow">Journey</p>
          <h2>Engineering roots.<br />Software direction.</h2>
          <p>My path gives me a practical way of thinking: understand the system, isolate the problem, then build the cleanest solution.</p>
        </div>
        <div className="timeline">
          {site.journey.map((item) => (
            <article className="timeline-item reveal" key={item.year}>
              <div><p>{item.year}</p><h3>{item.title}</h3><b>{item.place}</b><span>{item.text}</span></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about section-shell" id="about">
      <div className="about-grid">
        <div className="about-heading">
          <p className="eyebrow">About</p>
          <h2>I like software that is clear on the surface and solid underneath.</h2>
        </div>
        <div className="about-copy">
          <p className="about-lede">{site.headline}</p>
          <p>I enjoy moving between UI, data flow, backend behavior and system architecture instead of treating them as isolated pieces. That means thinking about what the user sees, what the API guarantees and what happens when the happy path breaks.</p>
          <p>My current work spans team projects and individual builds across React Native, React, Node.js, cloud deployment, native mobile development and AI-assisted product features.</p>
        </div>
      </div>
      <div className="principle-strip">
        {['Build the flow', 'Understand the data', 'Design the system', 'Handle failure states', 'Ship with clarity'].map((item) => <div key={item}><b>{item}</b></div>)}
      </div>
    </section>
  );
}

function Contact() {
  const emailHref = site.links.email ? `mailto:${site.links.email}` : null;
  return (
    <section className="contact" id="contact">
      <div className="contact-grid" />
      <div className="section-shell contact-inner">
        <p className="eyebrow">Contact</p>
        <h2>Let’s build something<br /><span>worth shipping.</span></h2>
        <p>Open to software development opportunities across full-stack, mobile and backend-focused roles.</p>
        <div className="contact-actions">
          {emailHref && <a className="button button-dark" href={emailHref}>Email Dalbir <Arrow diagonal /></a>}
          <a className="button button-light" href={site.links.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow diagonal /></a>
          <a className="button button-light" href={site.links.github} target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a>
        </div>
        <footer>
          <div><b>{site.name}</b><span>{site.role} · {site.location}</span></div>
          <div className="footer-links">
            <a href={site.links.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={site.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            {site.links.resume && <a href={site.links.resume}>Résumé</a>}
          </div>
          <span>© 2026 · Portfolio</span>
        </footer>
      </div>
    </section>
  );
}

export default function Portfolio() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -4% 0px'
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <AmbientCursor />
      <div className="ambient" aria-hidden="true" />
      <Nav />
      <Hero />
      <Marquee />
      <Work />
      <Stack />
      <Journey />
      <About />
      <Contact />
    </main>
  );
}
