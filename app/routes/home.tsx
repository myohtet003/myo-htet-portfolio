import type { Route } from "./+types/home";
import { NavLink } from "react-router";
import { Layout } from "~/ui/layout";
import { AboutSection, ContactSection, ExperienceSection } from "~/ui/sections";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Myo Htet Kyaw | Full Stack Developer (Laravel + React)" },
    {
      name: "description",
      content:
        "Portfolio of Myo Htet Kyaw, a Full Stack Developer building Laravel and React applications for business workflows, dashboards, and mobile experiences.",
    },
    { property: "og:title", content: "Myo Htet Kyaw | Full Stack Developer" },
    {
      property: "og:description",
      content:
        "Laravel and React full-stack developer building practical business systems.",
    },
    { property: "og:image", content: "/images/profile.jpg" },
  ];
}

export default function Home() {
  return (
    <Layout>
      <section className="hero-section" id="home">
        <div className="hero-copy">
          <p className="eyebrow">Open to full-time Laravel + React roles</p>

          <h1>
            Hi, I'm <span className="accent-text">Myo Htet Kyaw</span>
          </h1>

          <p className="hero-text">
            I build Laravel and React applications that turn business workflows
            into clear, reliable tools - from dashboards and POS reporting to
            booking systems and mobile experiences.
          </p>

          <div className="hero-actions">
            <NavLink className="button primary" to="/contact">
              Contact me
            </NavLink>
            <a className="button secondary" href="#projects">
              View projects
            </a>
          </div>

          <div className="flex gap-4 italic underline pt-2 mt-2">
            <a
              href="https://github.com/myohtet003"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/myo-htet-154a57223/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              LinkedIn
            </a>
            <a
              href="/myohtetkyaw.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              Resume
            </a>
          </div>
        </div>

        <div className="profile-panel" aria-label="Portfolio summary">
          <img
            className="profile-initials"
            src="/images/profile.jpg"
            alt="Myo Htet Kyaw"
          />
          <div>
            <p className="profile-role">Full Stack Developer</p>
            <p className="profile-location">
              Laravel, PHP, React, React Native (Expo), MySQL
            </p>
          </div>
        </div>
      </section>

      <section className="home-section" id="about">
        <AboutSection compact />
      </section>

      <section className="home-section" id="experience">
        <ExperienceSection compact />
      </section>

      <section className="home-section" id="contact">
        <ContactSection compact />
      </section>
    </Layout>
  );
}
