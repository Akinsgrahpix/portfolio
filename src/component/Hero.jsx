
import React, { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  Download,
  Palette,
  Sparkles,
} from "lucide-react";

// Keep these outside the component so they remain stable.
const ROLES = [
  "Graphic Designer",
  "Brand Identity Designer",
  "UI/UX Designer",
  "Frontend Developer",
];

const SOCIALS = [
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
  {
    name: "Behance",
    url: "https://www.behance.net/",
    icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/behance.svg",
  },
];

// Animated number counter
const CountUp = ({ end, duration = 1800 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      setCount(end);
      return;
    }

    let frameId;
    let startTime;

    const animate = (timestamp) => {
      if (startTime === undefined) startTime = timestamp;

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      // Ease-out animation
      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(eased * end));

      if (progress < 1) {
        frameId = window.requestAnimationFrame(animate);
      }
    };

    frameId = window.requestAnimationFrame(animate);

    return () => window.cancelAnimationFrame(frameId);
  }, [end, duration]);

  return <span>{count}</span>;
};

// Smooth typewriter animation
const TypingRoles = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    const complete = text === currentRole;
    const empty = text === "";

    let delay = deleting ? 45 : 85;

    if (complete && !deleting) delay = 1400;
    if (empty && deleting) delay = 250;

    const timeout = window.setTimeout(() => {
      if (complete && !deleting) {
        setDeleting(true);
      } else if (empty && deleting) {
        setDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      } else {
        setText(
          currentRole.substring(
            0,
            text.length + (deleting ? -1 : 1)
          )
        );
      }
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <span className="inline-flex items-center text-[#ff6b2c]">
      {text}
      <span
        aria-hidden="true"
        className="ml-1 inline-block h-[0.9em] w-[2px] animate-pulse bg-[#ff6b2c]"
      />
    </span>
  );
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen w-full items-center overflow-hidden bg-[#080e17] px-5 py-24 font-['DM_Sans',sans-serif] text-white sm:px-8 lg:px-12 lg:py-28"
    >
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-[#ff6b2c]/10 blur-[140px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -left-40 h-[500px] w-[500px] rounded-full bg-orange-600/[0.07] blur-[140px]"
      />

      {/* Subtle background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,107,44,0.45) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,44,0.45) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "linear-gradient(to bottom, black, transparent 90%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black, transparent 90%)",
        }}
      />

      {/* Main layout */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">

        {/* LEFT: INTRODUCTION */}
        <div className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left">

          {/* Availability label */}
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/[0.09] bg-white/[0.035] px-4 py-2.5 backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>

            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-300 sm:text-xs">
              Available for select projects
            </span>
          </div>

          {/* Eyebrow */}
          <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#ff6b2c] sm:text-sm">
            <span className="h-px w-8 bg-[#ff6b2c]" />
            Creative designer & developer
          </div>

          {/* Main heading */}
          <h1 className="max-w-3xl font-['Syne',sans-serif] text-5xl font-extrabold leading-[1.05] tracking-[-0.055em] sm:text-6xl md:text-7xl xl:text-[86px]">
            I turn ideas
            <br />
            into{" "}
            <span className="relative inline-block text-[#ff6b2c]">
              visual
              <svg
                aria-hidden="true"
                viewBox="0 0 220 14"
                fill="none"
                className="absolute -bottom-2 left-0 w-full"
              >
                <path
                  d="M3 9C54 2 147 2 217 8"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  className="text-[#ff6b2c]/60"
                />
              </svg>
            </span>
            <br />
            experiences.
          </h1>

          {/* Typewriter role */}
          <div className="mt-8 flex min-h-10 flex-wrap items-center justify-center gap-2 text-lg font-medium text-slate-300 sm:text-xl lg:justify-start">
            <span>I am a</span>
            <TypingRoles />
          </div>

          {/* Description */}
          <p className="mt-6 max-w-xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
            I'm Mahdi, the creative mind behind{" "}
            <span className="font-semibold text-white">
              Akins Graphix
            </span>
            . I combine bold design, thoughtful user experiences, and
            modern frontend development to create digital work that
            looks exceptional and works beautifully.
          </p>

          {/* Action buttons */}
          <div className="mt-9 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row lg:justify-start">

            <a
              href="#gallery"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#ff6b2c] px-7 py-4 text-sm font-bold text-white shadow-[0_8px_35px_rgba(255,107,44,0.2)] transition duration-300 hover:-translate-y-1 hover:bg-[#ff7d45] hover:shadow-[0_12px_40px_rgba(255,107,44,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 sm:w-auto"
            >
              Explore My Work
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="/Akins-Graphix-CV.pdf"
              download
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.035] px-7 py-4 text-sm font-semibold text-slate-200 transition duration-300 hover:-translate-y-1 hover:border-[#ff6b2c]/60 hover:bg-[#ff6b2c]/[0.08] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 sm:w-auto"
            >
              Download CV
              <Download
                size={17}
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              />
            </a>
          </div>

          {/* Social links */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <span className="mr-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
              Find me on
            </span>

            {SOCIALS.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit my ${social.name} profile`}
                title={social.name}
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] transition duration-300 hover:-translate-y-1 hover:border-[#ff6b2c]/50 hover:bg-[#ff6b2c]"
              >
                <img
                  src={social.icon}
                  alt=""
                  loading="lazy"
                  className="h-[17px] w-[17px] opacity-65 invert transition duration-300 group-hover:opacity-100"
                />
              </a>
            ))}
          </div>

          {/* Statistics */}
          <div className="mt-12 grid w-full max-w-lg grid-cols-3 border-t border-white/10 pt-7 lg:max-w-xl">
            <div className="pr-3 text-center lg:text-left">
              <div className="font-['Syne',sans-serif] text-3xl font-bold tracking-tight sm:text-4xl">
                <CountUp end={3} />+
              </div>
              <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-slate-500 sm:text-[11px]">
                Years creating
              </p>
            </div>

            <div className="border-x border-white/10 px-3 text-center">
              <div className="font-['Syne',sans-serif] text-3xl font-bold tracking-tight sm:text-4xl">
                <CountUp end={120} />+
              </div>
              <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-slate-500 sm:text-[11px]">
                Projects
              </p>
            </div>

            <div className="pl-3 text-center lg:text-left lg:pl-6">
              <div className="font-['Syne',sans-serif] text-3xl font-bold tracking-tight sm:text-4xl">
                <CountUp end={40} />+
              </div>
              <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-slate-500 sm:text-[11px]">
                Clients
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT: PROFILE VISUAL */}
        <div className="order-1 flex items-center justify-center py-6 lg:order-2 lg:py-0">
          <div className="relative w-full max-w-[430px]">

            {/* Ambient glow */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff6b2c]/15 blur-[75px]"
            />

            {/* Rotating outer ring */}
            <div
              aria-hidden="true"
              className="absolute inset-[-14px] rounded-full border border-dashed border-[#ff6b2c]/25 motion-safe:animate-[spin_35s_linear_infinite]"
            />

            {/* Inner ring */}
            <div
              aria-hidden="true"
              className="absolute inset-[-28px] rounded-full border border-white/[0.06]"
            />

            {/* Decorative orbit dots */}
            <div className="absolute -right-1 top-[20%] z-20 h-3 w-3 rounded-full bg-[#ff6b2c] shadow-[0_0_20px_rgba(255,107,44,0.8)] sm:-right-3" />

            <div className="absolute -bottom-1 left-[22%] z-20 h-2.5 w-2.5 rounded-full bg-orange-200 shadow-[0_0_18px_rgba(255,200,150,0.7)]" />

            {/* Main image frame */}
            <div className="relative aspect-square overflow-hidden rounded-full border border-[#ff6b2c]/50 bg-[#111c2a] p-2 shadow-[0_0_70px_rgba(255,107,44,0.08)]">
              <div className="relative h-full w-full overflow-hidden rounded-full border border-white/[0.08] bg-gradient-to-br from-[#1c2a3a] via-[#111c2a] to-[#080e17]">

                {/* Background graphic elements */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)",
                    backgroundSize: "24px 24px",
                  }}
                />

                <div
                  aria-hidden="true"
                  className="absolute -bottom-10 left-1/2 h-1/2 w-[85%] -translate-x-1/2 rounded-full bg-[#ff6b2c]/20 blur-3xl"
                />

                {/* Profile illustration */}
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Mahdi&backgroundColor=111c2a&clothingColor=ff6b2c&topType=ShortHairShortFlat&accessoriesType=Blank&facialHairType=Blank&clotheType=Hoodie&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Light"
                  alt="Illustrated profile avatar for Mahdi"
                  fetchPriority="high"
                  className="relative z-10 h-full w-full scale-[1.03] object-cover"
                />

                {/* Bottom image gradient */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-1/3 bg-gradient-to-t from-[#080e17]/60 to-transparent"
                />
              </div>
            </div>

            {/* Floating creative badge */}
            <div className="absolute -left-2 top-[12%] z-20 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#101925]/95 p-3.5 shadow-2xl backdrop-blur-xl sm:-left-12 sm:p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ff6b2c]/10 text-[#ff6b2c]">
                <Palette size={21} />
              </div>

              <div>
                <p className="text-xs font-bold text-white sm:text-sm">
                  Creative Studio
                </p>
                <p className="mt-1 text-[10px] text-slate-400 sm:text-xs">
                  Design with purpose
                </p>
              </div>
            </div>

            {/* Floating experience badge */}
            <div className="absolute -right-1 bottom-[14%] z-20 rounded-2xl border border-white/10 bg-[#101925]/95 p-4 shadow-2xl backdrop-blur-xl sm:-right-10 sm:p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ff6b2c]/10 text-[#ff6b2c]">
                  <Sparkles size={20} />
                </div>

                <div>
                  <p className="font-['Syne',sans-serif] text-xl font-bold text-white sm:text-2xl">
                    3+ Years
                  </p>
                  <p className="mt-1 text-[10px] text-slate-400 sm:text-xs">
                    Turning ideas into reality
                  </p>
                </div>
              </div>
            </div>

            {/* Small floating label */}
            <div className="absolute -bottom-12 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.22em] text-slate-500 sm:bottom-[-58px] sm:text-xs">
              <span className="h-px w-6 bg-[#ff6b2c]/50" />
              Think · Design · Build
              <span className="h-px w-6 bg-[#ff6b2c]/50" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-500 transition hover:text-[#ff6b2c] lg:flex"
      >
        <span className="text-[9px] font-semibold uppercase tracking-[0.25em]">
          Scroll to explore
        </span>
        <ArrowDownRight size={16} />
      </a>
    </section>
  );
};

export default Hero;
