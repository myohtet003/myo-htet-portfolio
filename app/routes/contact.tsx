import type { Route } from "./+types/contact";
import { Layout } from "~/ui/layout";
import { ContactSection } from "~/ui/sections";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Portfolio | Contact" },
    {
      name: "description",
      content: "Get in touch for frontend development opportunities.",
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
