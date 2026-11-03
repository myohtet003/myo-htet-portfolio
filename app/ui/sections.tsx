import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ChangeEvent, FormEvent } from "react";

const aboutStats = [
  { value: "2+", label: "Years practice" },
  { value: "3", label: "Selected projects" },
  { value: "Laravel + React", label: "Core stack" },
];

const skillGroups = [
  { title: "Backend", skills: ["Laravel", "PHP", "REST APIs", "MySQL"] },
  {
    title: "Frontend",
    skills: ["React", "JavaScript", "HTML", "CSS", "Bootstrap"],
  },
  { title: "Mobile", skills: ["React Native", "Expo"] },
  { title: "Workflow", skills: ["Git", "GitHub", "Hostinger", "Deployment"] },
];

const timeline = [
  {
    role: "Web Developer",
    company: "Education Valley Co., Ltd",
    location: "Myanmar",
    period: "2025 - Present",
    highlights: [
      "Develop and maintain the company website and student application portal using PHP, Laravel, MySQL, and modern frontend technologies.",

      "Manage website hosting, deployment, and production maintenance through Hostinger, including domain configuration, website updates, and troubleshooting.",

      "Design and implement backend workflows, database structures, and administrative tools to support real-world education management operations.",

      "Develop data validation and processing features to ensure reliable handling of student applications and administrative records.",

      "Troubleshoot application issues and improve existing functionality to maintain system stability and usability.",
    ],
  },
  {
    role: "Freelance Full Stack Developer",
    company: "Client Projects",
    location: "Remote",
    period: "2024 - 2025",
    highlights: [
      "Developed and delivered custom business and management applications, including ZabuHein (Nurse Rental Platform), a Government Road Management System, and a POS & Barcode Management System.",
      "Designed and implemented full-stack application features using PHP, Laravel, MySQL, JavaScript, React Native (Expo), and Bootstrap.",
      "Built interactive administrative dashboards, reporting modules, barcode generation workflows, and management interfaces to support business operations.",
      "Implemented application workflows, including nurse booking processes, data management, and administrative operations.",
      "Developed and integrated backend services and database structures to support application functionality and data processing.",
    ],
  },
  {
    role: "Independent Learning & Personal Projects",
    company: "Self-directed development",
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
    title: "POS & Reporting System (US Sushi Shop)",
    category: "Business Operations",
    problem:
      "A US sushi shop needed a centralized system to manage sales records, barcode workflows, Zebra printing, and business reporting. These activities needed to work together so staff could handle daily tasks and management could review sales activity in one place.",
    contribution:
      "Developed a full-stack application using PHP, Laravel, MySQL, and React Native (Expo). Built sales tracking and reporting workflows, added barcode and Zebra printer support, and created an admin dashboard to organize sales records and reporting data. Connected the mobile application with the backend to support shop operations and management oversight.",
    outcome:
      "Provided a unified workspace for sales tracking, barcode printing, and business reporting. Staff could access connected operational workflows, while management could review sales activity and maintain structured reporting records through a centralized dashboard.",
    image: "/images/pos.png",
    technologies: ["PHP", "Laravel", "MySQL", "React Native (Expo)"],
    detailsUrl:
      "mailto:myohtetkyaw2003@gmail.com?subject=POS%20Reporting%20System%20project%20details",
  },
  {
    title: "Road Management System (Government Project)",
    category: "Data Visualization",
    problem:
      "Road infrastructure information needed a structured system for monitoring and reporting. The project required clearer data views to help users review infrastructure records and understand the information through accessible dashboards.",
    contribution:
      "Developed road infrastructure monitoring features using PHP, Laravel, MySQL, and Bootstrap. Built administrative interfaces for managing infrastructure records and reporting dashboards with Chart.js visualizations to present data in a clearer, more accessible format.",
    outcome:
      "Delivered a centralized dashboard experience for reviewing road infrastructure data, managing records, and accessing reports. Organized information into structured views to support monitoring and administrative workflows.",
    confidential: true,
    confidentialNote:
      "Confidential government client project. Screenshots, source code, and sensitive project information are not publicly available. Further details may be shared subject to client permission.",
    technologies: ["PHP", "Laravel", "Chart.js", "MySQL", "Bootstrap"],
    detailsUrl:
      "mailto:myohtetkyaw2003@gmail.com?subject=Road%20Management%20System%20project%20details",
  },
  {
    title: "QueenZabuHein Nurse Rental Platform",
    category: "Healthcare Booking Web & Mobile Platform",
    problem:
      "Patients and healthcare providers needed a clear way to find available nurses, create bookings, and manage care services.",
    contribution:
      "Built the Laravel web platform and Expo React Native mobile app, including nurse registration, booking and scheduling, admin approval, payment workflows, user profiles, and notifications.",
    outcome:
      "Delivered one connected platform where patients book nurses, nurses manage assignments, and administrators review nurses, bookings, and payments.",
    image: "/images/nurserent.png",
    technologies: [
      "Laravel",
      "PHP",
      "MySQL",
      "JavaScript",
      "Bootstrap",
      "React Native",
      "Expo",
      "TypeScript",
      "Firebase",
    ],
    detailsUrl:
      "mailto:myohtetkyaw2003@gmail.com?subject=ZabuHein%20project%20details",
  },
  {
    title: "QueenZabuHein Nurse Rental Mobile App",
    category: "Healthcare Booking Mobile Application",
    problem:
      "Patients needed an easier way to find available nurses and manage care bookings from their phone.",
    contribution:
      "Built the Expo React Native mobile app, Laravel APIs, nurse and patient booking flows, admin approvals, payments, profiles, and push notifications.",
    outcome:
      "Created one mobile platform where patients book nurses, nurses manage assigned bookings, and admins approve nurses, bookings, and payments.",
    image: "/images/nurserentmobile.jpg",
    imageFit: "contain",
    technologies: [
      "React Native",
      "Expo",
      "Expo Router",
      "TypeScript",
      "Laravel",
      "PHP",
      "MySQL",
      "Firebase",
      "Expo Notifications",
    ],
    detailsUrl:
      "mailto:myohtetkyaw2003@gmail.com?subject=ZabuHein%20mobile%20app%20details",
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
            I’m a Full Stack Developer focused on Laravel and React. I build
            maintainable systems for real business workflows, from data models
            and backend APIs through responsive interfaces and deployment.
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

      <section className="skills-section" aria-labelledby="skills-heading">
        <div className="skills-intro">
          <p className="eyebrow">Skills</p>
          <h2 id="skills-heading">A practical full-stack toolkit</h2>
          <p>
            Tools I use to build, ship, and maintain web and mobile products.
          </p>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skills-card" key={group.title}>
              <h3>{group.title}</h3>
              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
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
  const [activeProject, setActiveProject] = useState(0);
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [isProjectHovered, setIsProjectHovered] = useState(false);
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[number] | null
  >(null);

  useEffect(() => {
    const updateVisibleProjects = () => {
      const nextVisibleProjects =
        window.innerWidth <= 760 ? 1 : window.innerWidth <= 980 ? 2 : 3;

      setVisibleProjects(nextVisibleProjects);
      setActiveProject((current) =>
        Math.min(current, Math.max(projects.length - nextVisibleProjects, 0)),
      );
    };

    updateVisibleProjects();
    window.addEventListener("resize", updateVisibleProjects);

    return () => window.removeEventListener("resize", updateVisibleProjects);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    if (isProjectHovered || selectedProject) {
      return;
    }

    const timer = window.setInterval(() => {
      if (document.hidden) return;
      setTransitionEnabled(true);
      setActiveProject((current) => Math.min(current + 1, projects.length));
    }, 3000);

    return () => window.clearInterval(timer);
  }, [isProjectHovered, visibleProjects, selectedProject]);

  useEffect(() => {
    if (activeProject < projects.length) return;

    // Reset from the cloned slides even if the browser skips transitionend.
    const resetTimer = window.setTimeout(() => {
      setTransitionEnabled(false);
      setActiveProject(0);
    }, 750);

    return () => window.clearTimeout(resetTimer);
  }, [activeProject]);

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

      <section className="projects-section" id="projects">
        <div className="projects-header">
          <div>
            <p className="eyebrow">Projects</p>
            <h2>Selected real-world projects I’ve built</h2>
          </div>
          <p>
            Selected work across business operations, reporting, and booking
            workflows. Project-specific links are shared when public or
            permitted by the client.
          </p>
        </div>

        <div
          className="projects-carousel"
          aria-label="Selected projects carousel"
          onMouseEnter={() => setIsProjectHovered(true)}
          onMouseLeave={() => setIsProjectHovered(false)}
        >
          <div
            className={`projects-track${transitionEnabled ? "" : " without-transition"}`}
            style={
              {
                "--active-project": activeProject,
                "--visible-projects": visibleProjects,
              } as CSSProperties
            }
          >
            {[...projects, ...projects.slice(0, visibleProjects)].map(
              (project, index) => (
                <article
                  className="project-slide"
                  key={`${project.title}-${index}`}
                >
                  <div className="project-card">
                    <button
                      type="button"
                      className="project-card-trigger"
                      aria-label={`View details: ${project.title}`}
                      aria-haspopup="dialog"
                      onClick={() => setSelectedProject(project)}
                    />
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
                          className={project.imageFit === "contain" ? "project-image project-image-contain" : "project-image"}
                        />
                      </div>
                    )}

                    <div className="project-content">
                      <p className="project-category">{project.category}</p>
                      <h3>{project.title}</h3>
                      <p className="project-summary">{project.problem}</p>
                      <span className="project-link">
                        View project details &rarr;
                      </span>
                    </div>
                  </div>
                </article>
              ),
            )}
          </div>
        </div>

        <div className="carousel-dots" aria-label="Project carousel position">
          {projects.map((project, index) => (
            <span
              className={`carousel-dot${index === activeProject % projects.length ? " active" : ""}`}
              key={project.title}
              aria-label={`Project ${index + 1} of ${projects.length}`}
            />
          ))}
        </div>
      </section>
      {selectedProject && (
        <ProjectDialog
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}

function ProjectDialog({
  project,
  onClose,
}: {
  project: (typeof projects)[number];
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement;
    dialog?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog?.close();
      document.body.style.overflow = previousOverflow;
      if (previousFocus instanceof HTMLElement) previousFocus.focus();
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      className="project-dialog"
      aria-labelledby="project-dialog-title"
      onCancel={onClose}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        if (
          event.clientX < bounds.left ||
          event.clientX > bounds.right ||
          event.clientY < bounds.top ||
          event.clientY > bounds.bottom
        )
          onClose();
      }}
    >
      <div className="project-dialog-header">
        <p className="eyebrow">{project.category}</p>
        <button
          type="button"
          className="button secondary"
          onClick={onClose}
          autoFocus
        >
          Close
        </button>
      </div>
      <h2 id="project-dialog-title">{project.title}</h2>
      {project.image && (
        <img
          className="project-dialog-image"
          src={project.image}
          alt={`${project.title} screenshot`}
        />
      )}
      <dl className="project-details">
        <div>
          <dt>Problem</dt>
          <dd>{project.problem}</dd>
        </div>
        <div>
          <dt>My contribution</dt>
          <dd>{project.contribution}</dd>
        </div>
        <div>
          <dt>Outcome</dt>
          <dd>{project.outcome}</dd>
        </div>
      </dl>
      {project.confidentialNote && (
        <p className="project-note">{project.confidentialNote}</p>
      )}
      <div className="tech-stack">
        {project.technologies.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
      <a className="project-link" href={project.detailsUrl}>
        Request project details
      </a>
    </dialog>
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
        <Heading>
          Let&apos;s build something clear, useful, and polished.
        </Heading>
        <p>
          I am open to full-time Laravel and React full-stack roles, as well as
          contract work. Send a message and I will get back to you soon.
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
          <a href="mailto:myohtetkyaw2003@gmail.com">
            myohtetkyaw2003@gmail.com
          </a>
          <p>Location</p>
          <span>Myanmar</span>
          <p>Response</p>
          <span>Usually within 24 hours</span>
        </aside>
      </section>
    </>
  );
}
