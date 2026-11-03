import type { Route } from "./+types/about";
import { Layout } from "~/ui/layout";
import { AboutSection } from "~/ui/sections";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Myo Htet Kyaw | Laravel + React Developer" },
    {
      name: "description",
      content:
        "Learn about Myo Htet Kyaw's Laravel, React, PHP, MySQL, and React Native development skills and production workflow.",
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
