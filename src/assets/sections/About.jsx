
import { Code2, Layers3, Smartphone } from "lucide-react";
import { motion } from "motion/react";
import SectionTitle from "../components/SectionTitle";

const cards = [
  {
    icon: Code2,
    title: "Web Development",
    text: "Building modern, responsive, and scalable web applications with a focus on performance, usability, and maintainable architecture.",
  },
  {
    icon: Layers3,
    title: "Full Stack Development",
    text: "Developing complete applications by integrating intuitive user interfaces, reliable backend systems, and efficient data management.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    text: "Creating intuitive, responsive, and cross-platform mobile applications with a focus on usability and performance.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="section-padding bg-slate-50/70 dark:bg-slate-950"
    >
      <div className="container-custom">
        <SectionTitle
          eyebrow="About me"
          title="I enjoy turning ideas into useful software."
          description="A developer profile focused on building practical, modern and maintainable applications."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-900 dark:hover:shadow-slate-950/60"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-emerald-50 p-3 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400">
                  <Icon size={24} />
                </div>

                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {card.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-500 dark:text-slate-400">
                  {card.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
