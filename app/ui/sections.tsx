const strengths = [
  "Clean React components",
  "Responsive layouts",
  "Accessible interfaces",
  "Thoughtful user flows",
];

const timeline = [
  {
    role: "Frontend Developer",
    period: "2025 - Present",
    description:
      "Building modern React interfaces with reusable components, clean layouts, and responsive design.",
  },
  {
    role: "React Projects",
    period: "2024 - 2025",
    description:
      "Created portfolio, dashboard, and landing page projects focused on UI polish and practical user flows.",
  },
  {
    role: "Web Development Foundation",
    period: "2023 - 2024",
    description:
      "Learned HTML, CSS, JavaScript, Git, and core frontend patterns through hands-on practice.",
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
        <Heading>I turn ideas into clear, useful, and professional websites.</Heading>
        <p>
          I enjoy building frontend experiences that feel simple on the surface
          and carefully structured underneath. My focus is readable code,
          polished details, and interfaces that work well across devices.
        </p>
      </section>

      <section className="content-grid">
        <article className="text-block">
          <CardHeading>How I Work</CardHeading>
          <p>
            I start by understanding the goal, then shape the UI around the
            people who will use it. I care about spacing, hierarchy, speed, and
            details that make a product feel trustworthy.
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
        <Heading>Practical frontend experience with a strong eye for detail.</Heading>
        <p>
          My work is centered on React, thoughtful page structure, and user
          interfaces that look professional without becoming complicated.
        </p>
      </section>

      <section className="timeline" aria-label="Experience timeline">
        {timeline.map((item) => (
          <article className="timeline-item" key={item.role}>
            <div>
              <p className="timeline-period">{item.period}</p>
              <ItemHeading>{item.role}</ItemHeading>
            </div>
            <p>{item.description}</p>
          </article>
        ))}
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
