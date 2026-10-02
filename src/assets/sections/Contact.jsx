import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import SectionTitle from "../components/SectionTitle";

export default function Contact() {
  const email = "chaymamighri942@gmail.com";
  const phone = "+216 42 316 275"; 

  return (
    <section
      id="contact"
      className="section-padding bg-white dark:bg-slate-950"
    >
      <div className="container-custom">
        <SectionTitle
          eyebrow="Contact"
          title="Let's build something together."
          description="Have a project, an opportunity or simply want to get in touch?"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl overflow-hidden rounded-[2rem] bg-slate-900 p-8 shadow-2xl md:p-12 dark:bg-slate-900"
        >
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            {/* Left content */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
                Get in touch
              </p>

              <h3 className="mt-4 text-3xl font-bold text-white">
                Let's talk about your next project.
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                I'm open to development opportunities, collaborations and
                interesting software projects.
              </p>
            </div>

            {/* Contact information */}
            <div className="space-y-4">
              {/* Email */}
              <a
                href={`mailto:${email}`}
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                <span className="flex items-center gap-3">
                  <Mail
                    size={20}
                    className="text-emerald-400"
                  />

                  <span className="text-sm md:text-base">
                    {email}
                  </span>
                </span>

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              {/* Phone */}
              <a
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                <span className="flex items-center gap-3">
                  <Phone
                    size={20}
                    className="text-emerald-400"
                  />

                  <span className="text-sm md:text-base">
                    {phone}
                  </span>
                </span>

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              {/* Location */}
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-300">
                <MapPin
                  size={20}
                  className="text-emerald-400"
                />

                Tunisia
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}