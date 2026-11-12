
import React from "react";
import {
  ArrowDownRight,
  ArrowRight,
  Code2,
  ExternalLink,
  Layers3,
  Palette,
  PenTool,
  Sparkles,
} from "lucide-react";

const skills = [
  {
    title: "Graphic Design",
    description: "Creative visuals that communicate clearly and stand out.",
    icon: Palette,
    number: "01",
  },
  {
    title: "Brand Identity",
    description: "Distinctive identities that give businesses recognition.",
    icon: PenTool,
    number: "02",
  },
  {
    title: "UI/UX Design",
    description: "Clean, intuitive interfaces built around user needs.",
    icon: Layers3,
    number: "03",
  },
  {
    title: "Frontend Development",
    description: "Responsive web experiences built with modern tools.",
    icon: Code2,
    number: "04",
  },
];

const socials = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/share/1CwXZYaGGs/",
    icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/akins_graphix1/",
    icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/muhammad-mahadi-akindele-1b8495345/",
    icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg",
  },
];

const About = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative isolate overflow-hidden bg-[#080e17] px-5 py-24 font-['DM_Sans',sans-serif] text-white sm:px-8 lg:px-12 lg:py-32"
    >
      {/* Background effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-40 -z-10 h-96 w-96 rounded-full bg-[#ff6b2c]/[0.07] blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 right-0 -z-10 h-96 w-96 rounded-full bg-orange-700/[0.06] blur-[130px]"
      />

      <div className="mx-auto max-w-7xl">

        {/* SECTION INTRO */}
        <div className="mb-16 flex flex-col gap-5 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-[#ff6b2c] sm:text-sm">
              <span className="h-px w-8 bg-[#ff6b2c]" />
              A little about me
            </div>

            <h2
              id="about-heading"
              className="max-w-3xl font-['Syne',sans-serif] text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
            >
              The person behind
              <br className="hidden sm:block" />{" "}
              <span className="text-[#ff6b2c]">the pixels.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-slate-400 sm:text-base">
            Creativity meets technology. I design meaningful visuals
            and build digital experiences that help ideas come to life.
          </p>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* LEFT: PROFILE VISUAL */}
          <div className="relative mx-auto w-full max-w-[490px] lg:mx-0">

            {/* Offset frame */}
            <div
              aria-hidden="true"
              className="absolute -left-3 -top-3 h-full w-full rounded-[2rem] border border-[#ff6b2c]/40 transition-transform duration-500 hover:-translate-x-1 hover:-translate-y-1 sm:-left-5 sm:-top-5"
            />

            {/* Image card */}
            <div className="group relative aspect-[4/4.5] overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#111c2a]">

              {/* Decorative background */}
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
                  backgroundSize: "24px 24px",
                }}
              />

              <div
                aria-hidden="true"
                className="absolute -bottom-10 left-1/2 h-2/3 w-4/5 -translate-x-1/2 rounded-full bg-[#ff6b2c]/15 blur-[70px]"
              />

              {/* Profile illustration */}
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Mahdi&backgroundColor=111c2a&clothingColor=ff6b2c&topType=ShortHairShortFlat&accessoriesType=Blank&facialHairType=Blank&clotheType=Hoodie&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Light"
                alt="Illustrated profile of Mahdi"
                loading="lazy"
                className="relative z-10 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />

              {/* Image overlay */}
              <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#080e17] via-transparent to-[#080e17]/10" />

              {/* Brand name on image */}
              <div className="absolute bottom-6 left-6 z-20 sm:bottom-8 sm:left-8">
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#ff6b2c]">
                  Designer. Creator. Developer.
                </p>

                <h3 className="font-['Syne',sans-serif] text-3xl font-extrabold tracking-tight sm:text-4xl">
                  Akins Graphix
                </h3>

                <p className="mt-2 text-sm text-slate-300">
                  Turning imagination into impact.
                </p>
              </div>
            </div>

            {/* Experience card */}
            <div className="absolute -bottom-7 -right-2 z-20 rounded-2xl border border-white/10 bg-[#111c2a] p-4 shadow-2xl sm:-right-5 sm:p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ff6b2c]/10 text-[#ff6b2c]">
                  <Sparkles size={23} />
                </div>

                <div>
                  <p className="font-['Syne',sans-serif] text-2xl font-extrabold">
                    3+
                  </p>
                  <p className="text-[10px] font-medium uppercase tracking-widest text-slate-400">
                    Years creating
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative corner */}
            <div className="absolute -right-2 top-8 z-20 hidden rounded-xl border border-white/10 bg-[#111c2a] p-3 text-[#ff6b2c] shadow-xl sm:block">
              <Palette size={23} />
            </div>
          </div>

          {/* RIGHT: STORY AND SKILLS */}
          <div className="pt-3 lg:pt-0">

            {/* Heading */}
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#ff6b2c]">
              Who I am
            </p>

            <h3 className="font-['Syne',sans-serif] text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              I'm Mahdi, a creative mind with a passion for{" "}
              <span className="text-[#ff6b2c]">
                design and technology.
              </span>
            </h3>

            {/* Professional introduction */}
            <div className="mt-6 space-y-4 text-sm leading-8 text-slate-400 sm:text-base">
              <p>
                I'm the creative mind behind{" "}
                <span className="font-semibold text-white">
                  Akins Graphix
                </span>
                , where I combine creativity, strategy, and technology
                to create compelling visual identities and digital
                experiences.
              </p>

              <p>
                My journey began with graphic design, exploring how
                typography, colour, and composition can communicate
                ideas. Since 2023, I've continued developing my skills
                in branding, UI/UX design, and frontend development.
              </p>

              <p>
                My goal is simple: to create work that is not only
                visually appealing but also purposeful, user-friendly,
                and useful to the people it serves.
              </p>
            </div>

            {/* Skills heading */}
            <div className="mb-5 mt-9 flex items-center justify-between">
              <h4 className="font-['Syne',sans-serif] text-lg font-bold">
                What I do
              </h4>

              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                My expertise
              </span>
            </div>

            {/* Skills grid */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {skills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <div
                    key={skill.number}
                    className="group rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#ff6b2c]/40 hover:bg-[#ff6b2c]/[0.04]"
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ff6b2c]/10 text-[#ff6b2c] transition-colors duration-300 group-hover:bg-[#ff6b2c] group-hover:text-white">
                        <Icon size={20} />
                      </div>

                      <span className="text-xs font-medium text-slate-600">
                        {skill.number}
                      </span>
                    </div>

                    <h5 className="text-sm font-bold text-slate-100">
                      {skill.title}
                    </h5>

                    <p className="mt-2 text-xs leading-6 text-slate-400">
                      {skill.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Bottom actions */}
            <div className="mt-8 flex flex-col gap-6 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">

              <div className="flex items-center gap-3">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit my ${social.name} profile`}
                    title={social.name}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-[#ff6b2c] hover:bg-[#ff6b2c]"
                  >
                    <img
                      src={social.icon}
                      alt=""
                      loading="lazy"
                      className="h-4 w-4 invert opacity-75"
                    />
                  </a>
                ))}

                <span className="ml-1 text-xs text-slate-500">
                  Let's connect
                </span>
              </div>

              <a
                href="mailto:akinsgraphix1@gmail.com"
                className="group inline-flex items-center justify-center gap-3 self-start rounded-full bg-[#ff6b2c] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#ff7d45] hover:shadow-[0_10px_30px_rgba(255,107,44,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 sm:self-auto"
              >
                Let's Work Together
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM BRAND STATEMENT */}
        <div className="mt-24 border-t border-white/[0.08] pt-7 sm:mt-28">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-6 text-slate-500 sm:text-sm">
              Thoughtful design. Purposeful development. Meaningful impact.
            </p>

            <a
              href="#gallery"
              className="group inline-flex items-center gap-2 self-start text-xs font-bold uppercase tracking-[0.15em] text-slate-300 transition-colors hover:text-[#ff6b2c] sm:self-auto"
            >
              Explore my projects
              <ArrowDownRight
                size={16}
                className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
