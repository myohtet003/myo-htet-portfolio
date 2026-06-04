import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

const aboutStats = [
  { value: "2+", label: "Years practice" },
  { value: "4+", label: "Real projects" },
  { value: "Full Stack", label: "Main focus" },
];

const timeline = [
  {
    role: "Web Developer",
    company: "Education Valley Co., Ltd",
    location: "Myanmar",
    period: "2025 - Present",
    highlights: [
      "Build and maintain the company website and student application portal using Laravel, MySQL, and modern frontend workflows.",
      "Handle hosting and deployment tasks with Hostinger, including site updates, domain setup, and production maintenance.",
      "Implement backend workflows, admin tools, and database structures for real-world education operations.", 
    ],
  },
  {
    role: "Freelance Full Stack Developer",
    company: "Client Projects",
    location: "Remote",
    period: "2024 - 2025",
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
    period: "2023 - 2024",
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
    image: "/images/pos.png",
    technologies: ["PHP", "Laravel", "MySQL", "React Native (Expo)"],
  },
  {
    title: "Road Management System (Government Project)",
    category: "Data Visualization",
    description:
      "Data visualization system for road infrastructure monitoring using charts and reporting dashboards.",
    confidential: true,
    technologies: ["Laravel", "Chart.js", "MySQL", "Bootstrap"],
  },
  {
    title: "ZabuHein Nurse Rental Platform",
    category: "Healthcare Booking Platform",
    description:
      "A nurse rental platform connecting healthcare providers with available nurses, including booking, scheduling, and admin management features.",
    image: "/images/nurserent.png",
    technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "Bootstrap"],
  },
];

type SectionProps = {
  compact?: boolean;
};

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

type ContactFeedback = {
  success: string;
  error: string;
};

export function AboutSection({ compact = false }: SectionProps) {
  const headingTag = compact ? "h2" : "h1";
  const Heading = headingTag;

  return (
    <>
      <section className={compact ? "page-header compact" : "page-header"}>
        <div className="about-copy">
          <p className="eyebrow">about</p>

          <Heading>
            I build scalable, production-ready web and mobile applications with
            a focus on clean architecture.
          </Heading>

          <p>
            I’m a Full Stack Developer experienced in PHP, Laravel, React, and
            React Native (Expo). I design and build systems that are
            maintainable, performant, and structured for real-world usage.
          </p>

          <div className="about-stats" aria-label="About highlights">
            {aboutStats.map((stat) => (
              <div key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
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
            <div className="timeline-side">
              <p className="timeline-period w-39.25 text-center">
                {item.period}
              </p>
              <div className="timeline-marker" aria-hidden="true" />
            </div>

            <div className="timeline-card">
              <div className="timeline-card-header">
                <div>
                  <ItemHeading>{item.role}</ItemHeading>
                  <p className="timeline-company">
                    <span>{item.company}</span> · {item.location}
                  </p>
                </div>
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
              {project.confidential ? (
                <div className="project-image-frame confidential-preview">
                  <div className="confidential-chart" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                  <div>
                    <strong>Road Infrastructure Dashboard</strong>
                  </div>
                </div>
              ) : (
                <div className="project-image-frame">
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="project-image"
                  />
                </div>
              )}

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
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<ContactFeedback>({
    success: "",
    error: "",
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
    setFeedback({ success: "", error: "" });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setFeedback({ success: "", error: "" });

    const serviceID = "service_m7xod12";
    const templateID = "template_bcye21s";
    const publicKey = "VmLx9l3ImQco4kZnb";

    try {
      const emailjs = await import("@emailjs/browser");

      await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: form.name,
          to_name: "Myo Htet",
          from_email: form.email,
          to_email: "myohtetkyaw2003@gmail.com",
          message: form.message,
        },
        publicKey,
      );

      setFeedback({
        success: "Thank you! I'll get back to you soon.",
        error: "",
      });
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setFeedback({
        success: "",
        error:
          "Something went wrong. Please try again later or contact me directly at myohtetkyaw2003@gmail.com.",
      });
    } finally {
      setLoading(false);
    }
  };

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
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              rows={5}
              placeholder="Tell me about your project"
              value={form.message}
              onChange={handleChange}
              required
            />
          </label>
          <button className="button primary" type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send message"}
          </button>

          {feedback.success && (
            <p className="form-feedback success">{feedback.success}</p>
          )}
          {feedback.error && (
            <p className="form-feedback error">{feedback.error}</p>
          )}
        </form>

        <aside className="contact-card">
          <CardHeading>Contact Details</CardHeading>
          <p>Email</p>
          <a href="mailto:myohtetkyaw2003@gmail.com">myohtetkyaw2003@gmail.com</a>
          <p>Phone</p>
          <a href="tel:+959762256122">+95 9 762 256 122</a>
          <p>Location</p>
          <span>Myanmar</span>
          <p>Response</p>
          <span>Usually within 24 hours</span>
        </aside>
      </section>
    </>
  );
}
