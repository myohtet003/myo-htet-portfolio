import type { Route } from "./+types/experience";
import { Layout } from "~/ui/layout";
import { ExperienceSection } from "~/ui/sections";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Experience & Projects | Myo Htet Kyaw" },
    {
      name: "description",
      content:
        "Full stack development experience across Laravel, React, business systems, reporting dashboards, and mobile apps.",
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
