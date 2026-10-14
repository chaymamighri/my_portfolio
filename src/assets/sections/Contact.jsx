import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
  Send,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import SectionTitle from "../components/SectionTitle";

export default function Contact() {
  const shouldReduceMotion = useReducedMotion();

  const email = "chaymamighri942@gmail.com";
  const phone = "+216 42 316 275";

  // Open Gmail with the recipient already filled in.
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;

  // Open a WhatsApp conversation without displaying the phone number.
  const whatsappNumber = phone.replace(/\D/g, "");
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  const contactItems = [
    {
      label: "Email",
      value: email,
      href: gmailUrl,
      icon: Mail,
      external: true,
    },
    {
      label: "WhatsApp",
      value: "Contact me on WhatsApp ",
      href: whatsappUrl,
      icon: MessageCircle,
      external: true,
    },
  ];

  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden
        bg-white dark:bg-slate-950"
    >
      {/* Background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20
          h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0
          h-72 w-72 rounded-full bg-blue-400/10 blur-3xl"
      />

      <div className="container-custom relative z-10">
        <SectionTitle
          eyebrow="Contact"
          title="Let's build something together."
          description="Have a project, an opportunity or simply want to get in touch?"
        />

        <motion.div
          initial={
            shouldReduceMotion ? false : { opacity: 0, y: 24 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.6,
          }}
          className="group mx-auto max-w-4xl rounded-[2rem] p-px
            bg-gradient-to-br from-emerald-400/60
            via-slate-200 to-blue-400/60
            dark:via-slate-800"
        >
          <div
            className="rounded-[31px] bg-slate-900 p-7 shadow-xl
              shadow-slate-900/10 sm:p-9 md:p-12"
          >
            <div className="grid gap-10 md:grid-cols-2 md:items-center">

              {/* Introduction */}
              <div>
                <span
                  className="inline-flex items-center gap-2
                    rounded-full border border-emerald-400/20
                    bg-emerald-400/10 px-3 py-1.5
                    text-xs font-semibold uppercase
                    tracking-[0.15em] text-emerald-400"
                >
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Get in touch
                </span>

                <h3
                  className="mt-5 text-3xl font-bold leading-tight
                    tracking-tight text-white sm:text-4xl"
                >
                  Let's talk about your next project.
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
                  I'm open to development opportunities,
                  collaborations and interesting software projects.
                  Feel free to reach out!
                </p>

                <a
                  href={gmailUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center gap-2
                    rounded-xl bg-gradient-to-r from-emerald-500
                    to-teal-500 px-5 py-3 text-sm font-semibold
                    text-white shadow-lg shadow-emerald-500/20
                    transition-all duration-300
                    hover:-translate-y-0.5 hover:shadow-emerald-500/30
                    focus-visible:outline-none
                    focus-visible:ring-2 focus-visible:ring-emerald-400
                    focus-visible:ring-offset-2
                    focus-visible:ring-offset-slate-900"
                >
                  <Send size={17} aria-hidden="true" />
                  Send me an email
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </div>

              {/* Contact information */}
              <div className="space-y-4">
                {contactItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={
                        item.external
                          ? "noopener noreferrer"
                          : undefined
                      }
                      aria-label={
                        item.label === "WhatsApp"
                          ? "Contact me on WhatsApp"
                          : `Send me an email at ${email}`
                      }
                      className="group/item flex items-center
                        justify-between gap-3 rounded-2xl
                        border border-white/10 bg-white/5 p-4
                        text-white transition-all duration-300
                        hover:-translate-y-1 hover:border-emerald-400/30
                        hover:bg-white/10
                        focus-visible:outline-none
                        focus-visible:ring-2 focus-visible:ring-emerald-400"
                    >
                      <span className="flex min-w-0 items-center gap-3">
                        <span
                          className="flex h-11 w-11 shrink-0
                            items-center justify-center rounded-xl
                            bg-emerald-400/10 text-emerald-400
                            transition-colors duration-300
                            group-hover/item:bg-emerald-400/20"
                        >
                          <Icon size={20} aria-hidden="true" />
                        </span>

                        <span className="min-w-0">
                          <span className="block text-xs text-slate-400">
                            {item.label}
                          </span>

                          <span
                            className="mt-1 block break-words
                              text-sm font-medium sm:text-base"
                          >
                            {item.value}
                          </span>
                        </span>
                      </span>

                      <ArrowUpRight
                        size={18}
                        className="shrink-0 text-slate-400
                          transition-all duration-300
                          group-hover/item:-translate-y-0.5
                          group-hover/item:translate-x-0.5
                          group-hover/item:text-emerald-400"
                        aria-hidden="true"
                      />
                    </a>
                  );
                })}

                {/* Location */}
                <div
                  className="flex items-center gap-3 rounded-2xl
                    border border-white/10 bg-white/5 p-4 text-white"
                >
                  <span
                    className="flex h-11 w-11 shrink-0
                      items-center justify-center rounded-xl
                      bg-emerald-400/10 text-emerald-400"
                  >
                    <MapPin size={20} aria-hidden="true" />
                  </span>

                  <span>
                    <span className="block text-xs text-slate-400">
                      Location
                    </span>

                    <span className="mt-1 block text-sm font-medium">
                      Tunisia
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}