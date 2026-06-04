import type { Route } from "./+types/home";
import { NavLink } from "react-router";
import { Layout } from "~/ui/layout";
import { AboutSection, ContactSection, ExperienceSection } from "~/ui/sections";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Portfolio | Home" },
    {
      name: "description",
      content: "A clean and professional developer portfolio.",
    },
  ];
}

export default function Home() {
  return (
    <Layout>
      <section className="hero-section" id="home">
        <div className="hero-copy">
          <p className="eyebrow">Available for full-time / contract roles</p>

          <h1>
            Hi, I'm <span className="text-[#245d63]">Myo Htet</span>
          </h1>

          <p className="hero-text">
            Full Stack Developer specializing in Laravel, PHP, React, and React
            Native (Expo). I build scalable web and mobile systems including POS
            platforms, business tools, and dashboards with a focus on clean
            architecture, performance, and maintainability.
          </p>

          <div className="hero-actions">
            <NavLink className="button primary" to="/contact">
              Contact me
            </NavLink>
            <NavLink className="button secondary" to="/experience">
              View experience
            </NavLink>
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
              href="/myo htet kyaw.pdf"
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
            alt="Profile picture"
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
