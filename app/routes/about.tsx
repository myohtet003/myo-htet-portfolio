import type { Route } from "./+types/about";
import { Layout } from "~/ui/layout";
import { AboutSection } from "~/ui/sections";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Portfolio | About" },
    {
      name: "description",
      content: "Learn more about my approach, skills, and professional focus.",
    },
  ];
}

export default function About() {
  return (
    <Layout>
      <AboutSection />
    </Layout>
  );
}
