import { GraduationCap } from "lucide-react";
import { motion } from "motion/react";
import SectionTitle from "../components/SectionTitle";

const education = [
  {
    degree: "Master professionnel en Génie Logiciel et Développement Rapide d'Applications",
    school: "ISET de Sousse",
    period: "2026 — 2027",
  },
  {
    degree: "Licence en Technologie de l'Informatique — Développement des Systèmes d'Information",
    school: "ISET Kairouan",
    period: "2023 — 2026",
  },
  {
    degree: "Baccalauréat — Sciences expérimentales",
    school: "Lycée Ibn Sina — Nasrallah, Kairouan",
    period: "2023",
  },
];

export default function Education() {
  return (
    <section id="education" className="section-padding bg-slate-50/70">
      <div className="container-custom">
        <SectionTitle
          eyebrow="Education"
          title="Academic background"
        />

        <div className="mx-auto max-w-3xl space-y-5">
          {education.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-5 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <div className="shrink-0 rounded-2xl bg-emerald-50 p-3 text-emerald-600">
                <GraduationCap size={23} />
              </div>

              <div>
                <p className="text-sm font-semibold text-emerald-600">
                  {item.period}
                </p>

                <h3 className="mt-2 text-lg font-semibold text-slate-900">
                  {item.degree}
                </h3>

                <p className="mt-2 text-slate-500">{item.school}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}