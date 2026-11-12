
import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Palette,
  PenTool,
  TrendingUp,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const serviceme = [
  {
    number: "01",
    title: "Creative Art",
    category: "ART & CREATIVITY",
    description:
      "Transform ideas and imagination into distinctive visual concepts that capture attention and communicate a message.",
    details: [
      "Digital artwork and illustrations",
      "Creative visual concepts",
      "Custom promotional artwork",
      "Visual storytelling",
    ],
    icon: Palette,
    featured: false,
  },
  {
    number: "02",
    title: "Graphic Design",
    category: "VISUAL COMMUNICATION",
    description:
      "Create professional, memorable designs that communicate your brand's message and help your business stand out.",
    details: [
      "Logo and brand identity design",
      "Flyers, posters and banners",
      "Social media graphics",
      "Book covers and print designs",
    ],
    icon: PenTool,
    featured: true,
  },
  {
    number: "03",
    title: "Digital Marketing",
    category: "BRAND GROWTH",
    description:
      "Support your brand's online presence with thoughtful content planning, creative campaigns, and audience-focused strategies.",
    details: [
      "Social media content planning",
      "Creative campaign concepts",
      "Audience engagement strategies",
      "Digital promotion planning",
    ],
    icon: TrendingUp,
    featured: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

const ServiceCard = ({ service }) => {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const Icon = service.icon;

  return (
    <motion.article
      variants={cardVariants}
      whileHover={
        reduceMotion
          ? undefined
          : { y: -6, transition: { duration: 0.25 } }
      }
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border p-6 transition-colors duration-300 sm:p-8 ${
        service.featured
          ? "border-[#ff6b2c]/50 bg-[#111c2a] shadow-[0_10px_50px_rgba(255,107,44,0.07)]"
          : "border-white/[0.08] bg-[#0d1521] hover:border-[#ff6b2c]/40"
      }`}
    >
      {/* Top accent */}
      <div
        aria-hidden="true"
        className={`absolute left-0 top-0 h-[2px] bg-[#ff6b2c] transition-all duration-500 ${
          service.featured
            ? "w-full"
            : "w-0 group-hover:w-full"
        }`}
      />

      {/* Decorative glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#ff6b2c]/[0.05] blur-3xl transition-colors duration-300 group-hover:bg-[#ff6b2c]/10"
      />

      {/* Card header */}
      <div className="relative flex items-start justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#ff6b2c]/20 bg-[#ff6b2c]/[0.08] text-[#ff6b2c] transition-all duration-300 group-hover:border-[#ff6b2c] group-hover:bg-[#ff6b2c] group-hover:text-white">
          <Icon size={27} strokeWidth={1.7} />
        </div>

        <span className="font-['Syne',sans-serif] text-sm font-bold tracking-widest text-slate-600">
          {service.number}
        </span>
      </div>

      {/* Card content */}
      <div className="relative mt-8">
        <p className="mb-3 text-[10px] font-bold tracking-[0.2em] text-[#ff6b2c]">
          {service.category}
        </p>

        <h3 className="font-['Syne',sans-serif] text-2xl font-bold tracking-tight text-white sm:text-3xl">
          {service.title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-slate-400">
          {service.description}
        </p>
      </div>

      {/* Expandable details */}
      <div className="relative mt-7 border-t border-white/10 pt-5">
        <button
          type="button"
          aria-expanded={open}
          aria-controls={`details-${service.number}`}
          onClick={() => setOpen((previous) => !previous)}
          className="flex w-full items-center justify-between gap-3 rounded-lg text-left text-sm font-semibold text-slate-200 transition-colors hover:text-[#ff6b2c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b2c]"
        >
          {open ? "What's included" : "Explore this service"}

          <span
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 transition-all duration-300 ${
              open
                ? "rotate-45 border-[#ff6b2c]/50 text-[#ff6b2c]"
                : "group-hover:border-[#ff6b2c]/50 group-hover:text-[#ff6b2c]"
            }`}
          >
            <ArrowUpRight size={17} />
          </span>
        </button>

        <motion.div
          id={`details-${service.number}`}
          initial={false}
          animate={{
            height: open ? "auto" : 0,
            opacity: open ? 1 : 0,
          }}
          transition={{ duration: reduceMotion ? 0 : 0.25 }}
          className="overflow-hidden"
          aria-hidden={!open}
          inert={!open}
        >
          <ul className="space-y-3 pt-5">
            {service.details.map((detail) => (
              <li
                key={detail}
                className="flex items-start gap-3 text-xs leading-6 text-slate-400 sm:text-sm"
              >
                <CheckCircle2
                  size={16}
                  className="mt-1 shrink-0 text-[#ff6b2c]"
                />
                {detail}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Contact link */}
      <a
        href={`mailto:akinsgraphix1@gmail.com?subject=${encodeURIComponent(
          `Enquiry about ${service.title}`
        )}`}
        className="relative mt-auto flex items-center justify-between gap-3 pt-8 text-sm font-bold text-white transition-colors hover:text-[#ff6b2c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b2c]"
      >
        <span>Discuss your project</span>

        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </a>
    </motion.article>
  );
};

const Serviceme = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="service"
      aria-labelledby="creative-heading"
      className="relative isolate overflow-hidden bg-[#080e17] px-5 py-24 font-['DM_Sans',sans-serif] text-white sm:px-8 lg:px-12 lg:py-32"
    >
      {/* Background effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 -z-10 h-96 w-96 rounded-full bg-[#ff6b2c]/[0.06] blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 right-0 -z-10 h-96 w-96 rounded-full bg-orange-700/[0.05] blur-[130px]"
      />

      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-14 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-[#ff6b2c] sm:text-sm">
              <span className="h-px w-8 bg-[#ff6b2c]" />
              What I bring to the table
            </div>

            <h2
              id="creative-heading"
              className="font-['Syne',sans-serif] text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
            >
              Creativity with
              <br className="hidden sm:block" />{" "}
              <span className="text-[#ff6b2c]">
                a clear purpose.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-slate-400 sm:text-base">
            Every project starts with an idea. I help shape that idea
            into creative work that communicates, connects with people,
            and supports your goals.
          </p>
        </div>

        {/* Section label */}
        <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <Sparkles size={16} className="text-[#ff6b2c]" />
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
              Creative services
            </span>
          </div>

          <span className="text-xs text-slate-500">
            03 areas of expertise
          </span>
        </div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {serviceme.map((service) => (
            <ServiceCard
              key={service.number}
              service={service}
            />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <div className="relative mt-16 overflow-hidden rounded-3xl border border-white/[0.09] bg-[#0d1521] p-7 sm:p-10 lg:mt-20 lg:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-32 h-72 w-72 rounded-full bg-[#ff6b2c]/10 blur-[90px]"
          />

          <div className="relative flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.23em] text-[#ff6b2c]">
                Have an idea?
              </p>

              <h3 className="font-['Syne',sans-serif] text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
                Let's make it
                <span className="text-[#ff6b2c]"> happen.</span>
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
                Share your vision with me, and let's discuss how
                thoughtful creative work can bring it to life.
              </p>
            </div>

            <a
              href="mailto:akinsgraphix1@gmail.com?subject=Creative%20project%20enquiry"
              className="group inline-flex items-center justify-center gap-3 self-start rounded-full bg-[#ff6b2c] px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#ff7d45] hover:shadow-[0_10px_35px_rgba(255,107,44,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 md:self-auto"
            >
              Start a Conversation
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-8 flex flex-col gap-3 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Designed with intention. Created with purpose.</p>

          <a
            href="#home"
            className="inline-flex items-center gap-2 self-start transition-colors hover:text-[#ff6b2c] sm:self-auto"
          >
            Back to top
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Serviceme;
