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

  const mailtoUrl = `mailto:${email}`;  const whatsappNumber = phone.replace(/\D/g, "");
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  const contactItems = [
    {
      label: "Email",
      value: email,
      href: mailtoUrl,
      icon: Mail,
    },
    {
      label: "WhatsApp",
      value: "Contact me on WhatsApp",
      href: whatsappUrl,
      icon: MessageCircle,
    },
  ];

  return (
    <section
      id="contact"
      className="relative isolate w-full overflow-x-clip
        bg-white py-16 dark:bg-slate-950
        sm:py-20 lg:py-24"
    >
      {/* Background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-20
          h-48 w-48 rounded-full bg-emerald-400/10 blur-3xl
          sm:-left-32 sm:h-72 sm:w-72"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0
          h-48 w-48 rounded-full bg-blue-400/10 blur-3xl
          sm:-right-32 sm:h-72 sm:w-72"
      />

      {/* Responsive container */}
      <div
        className="relative z-10 mx-auto w-full max-w-6xl
          min-w-0 px-4 sm:px-6 lg:px-8"
      >
        <SectionTitle
          eyebrow="Contact"
          title="Let's build something together."
          description="Have a project, an opportunity or simply want to get in touch?"
        />

        {/* Outer gradient border */}
        <motion.div
          initial={
            shouldReduceMotion ? false : { opacity: 0, y: 20 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.5,
          }}
          className="mx-auto mt-8 w-full min-w-0 max-w-5xl
            rounded-2xl bg-gradient-to-br
            from-emerald-400/60 via-slate-200 to-blue-400/60
            p-px sm:mt-10 sm:rounded-3xl
            dark:via-slate-800"
        >
          <div
            className="min-w-0 rounded-[15px] bg-slate-900
              p-4 shadow-xl shadow-slate-900/10
              sm:rounded-[23px] sm:p-7
              md:p-9 lg:p-10"
          >
            {/* One column on mobile, two on desktop */}
            <div
              className="grid min-w-0 grid-cols-1
                items-start gap-8 sm:gap-10 md:grid-cols-2
                md:items-center lg:gap-12"
            >
              {/* Introduction */}
              <div className="min-w-0">
                <span
                  className="inline-flex max-w-full items-center gap-2
                    rounded-full border border-emerald-400/20
                    bg-emerald-400/10 px-3 py-1.5
                    text-[10px] font-semibold uppercase
                    tracking-wider text-emerald-400
                    sm:text-xs sm:tracking-[0.15em]"
                >
                  <span
                    className="h-2 w-2 shrink-0 rounded-full
                      bg-emerald-400"
                  />
                  Get in touch
                </span>

                <h3
                  className="mt-4 break-words text-2xl
                    font-bold leading-tight tracking-tight
                    text-white sm:mt-5 sm:text-3xl
                    lg:text-4xl"
                >
                  Let's talk about your next project.
                </h3>

                <p
                  className="mt-3 text-sm leading-6 text-slate-400
                    sm:mt-4 sm:text-base sm:leading-7"
                >
                  I'm open to development opportunities,
                  collaborations and interesting software projects.
                  Feel free to reach out!
                </p>

                <a
                  href={mailtoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full max-w-full
                    flex-wrap items-center justify-center gap-2
                    rounded-xl bg-gradient-to-r from-emerald-500
                    to-teal-500 px-4 py-3 text-center
                    text-sm font-semibold text-white
                    shadow-lg shadow-emerald-500/20
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:shadow-emerald-500/30
                    focus-visible:outline-none
                    focus-visible:ring-2 focus-visible:ring-emerald-400
                    focus-visible:ring-offset-2
                    focus-visible:ring-offset-slate-900
                    sm:w-auto sm:px-5"
                >
                  <Send
                    size={17}
                    className="shrink-0"
                    aria-hidden="true"
                  />
                  <span>Send me an email</span>
                  <ArrowUpRight
                    size={16}
                    className="shrink-0"
                    aria-hidden="true"
                  />
                </a>
              </div>

              {/* Contact information */}
              <div className="flex min-w-0 flex-col gap-3 sm:gap-4">
                {contactItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={
                        item.label === "WhatsApp"
                          ? "Contact me on WhatsApp"
                          : `Send me an email at ${email}`
                      }
                      className="group/item flex min-w-0
                        items-center gap-2 rounded-xl
                        border border-white/10 bg-white/5
                        p-3 text-white transition-all duration-300
                        hover:border-emerald-400/30 hover:bg-white/10
                        sm:gap-3 sm:rounded-2xl sm:p-4
                        md:hover:-translate-y-1
                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-emerald-400"
                    >
                      <span
                        className="flex h-10 w-10 shrink-0
                          items-center justify-center rounded-xl
                          bg-emerald-400/10 text-emerald-400
                          transition-colors duration-300
                          group-hover/item:bg-emerald-400/20
                          sm:h-11 sm:w-11"
                      >
                        <Icon size={20} aria-hidden="true" />
                      </span>

                      <span className="min-w-0 flex-1">
                        <span
                          className="block text-xs text-slate-400"
                        >
                          {item.label}
                        </span>

                        <span
                          className="mt-1 block break-words
                            text-xs font-medium leading-5
                            sm:text-sm md:text-base
                            [overflow-wrap:anywhere]"
                        >
                          {item.value}
                        </span>
                      </span>

                      <ArrowUpRight
                        size={17}
                        className="shrink-0 text-slate-400
                          transition-colors duration-300
                          group-hover/item:text-emerald-400
                          sm:h-[18px] sm:w-[18px]"
                        aria-hidden="true"
                      />
                    </a>
                  );
                })}

                {/* Location */}
                <div
                  className="flex min-w-0 items-center gap-3
                    rounded-xl border border-white/10
                    bg-white/5 p-3 text-white
                    sm:rounded-2xl sm:p-4"
                >
                  <span
                    className="flex h-10 w-10 shrink-0
                      items-center justify-center rounded-xl
                      bg-emerald-400/10 text-emerald-400
                      sm:h-11 sm:w-11"
                  >
                    <MapPin size={20} aria-hidden="true" />
                  </span>

                  <span className="min-w-0">
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
