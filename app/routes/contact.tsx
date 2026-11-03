import type { Route } from "./+types/contact";
import { Layout } from "~/ui/layout";
import { ContactSection } from "~/ui/sections";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact Myo Htet Kyaw | Full Stack Developer" },
    {
      name: "description",
      content:
        "Contact Myo Htet Kyaw about full-time Laravel and React development opportunities.",
    },
  ];
}

export default function Contact() {
  return (
    <Layout>
      <ContactSection />
    </Layout>
  );
}
