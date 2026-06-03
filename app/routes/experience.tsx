import type { Route } from "./+types/experience";
import { Layout } from "~/ui/layout";
import { ExperienceSection } from "~/ui/sections";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Portfolio | Experience" },
    {
      name: "description",
      content: "A simple overview of frontend development experience.",
    },
  ];
}

export default function Experience() {
  return (
    <Layout>
      <ExperienceSection />
    </Layout>
  );
}
