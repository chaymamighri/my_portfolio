import { Code2, Layers3, Smartphone } from "lucide-react";
import { motion } from "motion/react";
import SectionTitle from "../components/SectionTitle";

const cards = [
  {
    icon: Code2,
    title: "Web Development",
    text: "Modern interfaces and REST-based applications with React and Java backends.",
  },
  {
    icon: Layers3,
    title: "Full Stack",
    text: "Frontend, backend, databases and authentication with a focus on clean architecture.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    text: "Cross-platform mobile applications using Flutter and Dart.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-slate-50/70">
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
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-emerald-50 p-3 text-emerald-600">
                  <Icon size={24} />
                </div>

                <h3 className="text-lg font-semibold text-slate-900">
                  {card.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-500">
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