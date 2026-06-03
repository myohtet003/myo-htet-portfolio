const strengths = [
  "Clean React components",
  "Responsive layouts",
  "Accessible interfaces",
  "Thoughtful user flows",
];

const timeline = [
  {
    role: "Web Developer",
    company: "EduValleyGlobal",
    location: "Myanmar",
    period: "2025 - Present",
    highlights: [
      "Build and maintain student application and management system features using Laravel and MySQL.",
      "Implement backend workflows, admin tools, and database structures for real-world education operations.",
      "Collaborate across requirements, testing, and deployment to keep business features reliable.",
    ],
  },
  {
    role: "Freelance Full Stack Developer",
    company: "Client Projects",
    location: "Remote",
    period: "2023 - 2025",
    highlights: [
      "Delivered systems including ZabuHein nurse rental platform, government road charts, and student management tools.",
      "Developed Laravel, PHP, MySQL, JavaScript, and Bootstrap features from planning through handoff.",
      "Created dashboards, reporting screens, booking flows, and admin management interfaces.",
    ],
  },
  {
    role: "Web Development (Self-Driven Experience)",
    company: "Independent Learning",
    location: "Myanmar",
    period: "2022 - 2023",
    highlights: [
      "Built a strong foundation through hands-on practice with HTML, CSS, JavaScript, Git, and Laravel.",
      "Created small web projects to understand layouts, components, routing, forms, and backend basics.",
      "Practiced clean code habits, version control, debugging, and reusable frontend patterns.",
    ],
  },
];

const projects = [
  {
    title: "POS Reporting System (US Sushi Shop)",
    category: "Business Operations",
    description:
      "A full-stack POS reporting system with barcode support, sales tracking, and admin dashboard for business operations.",
    image: "/assets/images/profile.jpg",
    technologies: ["PHP", "Laravel", "MySQL", "React Native (Expo)"],
  },
  {
    title: "Road Chart System (Government Project)",
    category: "Data Visualization",
    description:
      "Data visualization system for road infrastructure monitoring using charts and reporting dashboards.",
    image: "/assets/images/profile.jpg",
    technologies: ["Laravel", "Chart.js", "MySQL", "Bootstrap"],
  },
  {
    title: "ZabuHein Nurse Rental Platform",
    category: "Healthcare Booking Platform",
    description:
      "A nurse rental platform connecting healthcare providers with available nurses, including booking, scheduling, and admin management features.",
    image: "/assets/images/profile.jpg",
    technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "Bootstrap"],
  },
];

type SectionProps = {
  compact?: boolean;
};

export function AboutSection({ compact = false }: SectionProps) {
  const headingTag = compact ? "h2" : "h1";
  const cardHeadingTag = compact ? "h3" : "h2";
  const Heading = headingTag;
  const CardHeading = cardHeadingTag;

  return (
    <>
      <section className={compact ? "page-header compact" : "page-header"}>
        <p className="eyebrow">About</p>

        <Heading>
          I build scalable, production-ready web and mobile applications with a
          focus on clean architecture.
        </Heading>

        <p>
          I’m a Full Stack Developer experienced in PHP, Laravel, React, and
          React Native (Expo). I design and build systems that are maintainable,
          performant, and structured for real-world usage. My focus is
          delivering reliable features that solve practical business problems.
        </p>
      </section>

      <section className="content-grid">
        <article className="text-block">
          <CardHeading>How I Work</CardHeading>

          <p>
            I begin with understanding the business goal, then design systems
            that are simple, scalable, and easy to extend. I focus on clean
            backend structure, reusable UI components, and predictable
            application flow that supports long-term growth.
          </p>
        </article>

        <article className="skills-card">
          <CardHeading>Core Strengths</CardHeading>

          <div className="skill-list">
            {strengths.map((strength) => (
              <span key={strength}>{strength}</span>
            ))}
          </div>
        </article>
      </section>
    </>
  );
}

export function ExperienceSection({ compact = false }: SectionProps) {
  const headingTag = compact ? "h2" : "h1";
  const itemHeadingTag = compact ? "h3" : "h2";
  const Heading = headingTag;
  const ItemHeading = itemHeadingTag;

  return (
    <>
      <section className={compact ? "page-header compact" : "page-header"}>
        <p className="eyebrow">Experience</p>

        <Heading>
          Full Stack development experience building real-world web and mobile
          systems.
        </Heading>

        <p>
          I work across backend and frontend using Laravel, PHP, React, and
          React Native. My focus is building scalable systems such as POS
          platforms, dashboards, reporting tools, and mobile applications used
          in real business environments.
        </p>
      </section>

      <section className="timeline" aria-label="Experience timeline">
        {timeline.map((item) => (
          <article className="timeline-item" key={item.role}>
            <div className="timeline-marker" aria-hidden="true" />

            <div className="timeline-card">
              <div className="timeline-card-header">
                <div>
                  <ItemHeading>{item.role}</ItemHeading>
                  <p className="timeline-company">
                    <span>{item.company}</span> · {item.location}
                  </p>
                </div>

                <p className="timeline-period">{item.period}</p>
              </div>

              <ul className="timeline-highlights">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="projects-section">
        <div className="projects-header">
          <div>
            <p className="eyebrow">Projects</p>
            <h2>Selected real-world projects I’ve built</h2>
          </div>
          <p>
            A focused collection of production-style systems across operations,
            reporting, and education workflows.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-image-frame">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="project-image"
                />
              </div>

              <div className="project-content">
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tech-stack">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export function ContactSection({ compact = false }: SectionProps) {
  const headingTag = compact ? "h2" : "h1";
  const cardHeadingTag = compact ? "h3" : "h2";
  const Heading = headingTag;
  const CardHeading = cardHeadingTag;

  return (
    <>
      <section className={compact ? "page-header compact" : "page-header"}>
        <p className="eyebrow">Contact</p>
        <Heading>Let us build something clear, useful, and polished.</Heading>
        <p>
          I am open to internships, freelance projects, and frontend developer
          roles. Send a message and I will get back to you soon.
        </p>
      </section>

      <section className="contact-layout">
        <form className="contact-form">
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="you@example.com" />
          </label>
          <label>
            Message
            <textarea
              name="message"
              rows={5}
              placeholder="Tell me about your project"
            />
          </label>
          <button className="button primary" type="submit">
            Send message
          </button>
        </form>

        <aside className="contact-card">
          <CardHeading>Contact Details</CardHeading>
          <p>Email</p>
          <a href="mailto:hello@example.com">hello@example.com</a>
          <p>Location</p>
          <span>Myanmar</span>
          <p>Response</p>
          <span>Usually within 24 hours</span>
        </aside>
      </section>
    </>
  );
}
