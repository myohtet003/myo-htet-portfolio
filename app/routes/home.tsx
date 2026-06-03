import type { Route } from "./+types/home";
import { NavLink } from "react-router";
import { Layout } from "~/ui/layout";
import {
  AboutSection,
  ContactSection,
  ExperienceSection,
} from "~/ui/sections";

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
          <p className="eyebrow">Available for new opportunities</p>
          <h1>Hi, I am a React developer building polished web experiences.</h1>
          <p className="hero-text">
            I create responsive, accessible, and maintainable interfaces that
            help people understand products quickly and use them with confidence.
          </p>
          <div className="hero-actions">
            <NavLink className="button primary" to="/contact">
              Contact me
            </NavLink>
            <NavLink className="button secondary" to="/experience">
              View experience
            </NavLink>
          </div>
        </div>
        <div className="profile-panel" aria-label="Portfolio summary">
          <span className="profile-initials">EV</span>
          <div>
            <p className="profile-role">Frontend Developer</p>
            <p className="profile-location">React • TypeScript • UI/UX</p>
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
