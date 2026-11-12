import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  X,
  Code2,
  Sparkles,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Darus-Salam",
    category: "Frontend Development",
    type: "School Website",
    description:
      "A modern responsive website designed and developed for Darus-Salam Arabic & Islamic Center with a clean educational interface.",
    image:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1200",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    link: "https://darus-salam.vercel.app/",
    github: "#",
    featured: true,
  },

  {
    id: 2,
    title: "PetPal",
    category: "Frontend Development",
    type: "E-Commerce Platform",
    description:
      "A responsive pet marketplace interface featuring product browsing, services, shopping interactions and a modern user experience.",
    image:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1200",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    link: "#",
    github: "#",
  },

  {
    id: 3,
    title: "Akins Graphix",
    category: "UI/UX Design",
    type: "Creative Portfolio",
    description:
      "A personal creative portfolio focused on graphic design, branding, UI/UX and frontend development.",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200",
    technologies: ["Figma", "UI/UX", "React"],
    link: "#",
    github: "#",
  },

  {
    id: 4,
    title: "LuxeHome",
    category: "UI/UX Design",
    type: "Real Estate Concept",
    description:
      "A premium real-estate interface concept created with a strong focus on visual hierarchy, typography and user experience.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200",
    technologies: ["Figma", "UI Design", "Prototyping"],
    link: "#",
    github: "#",
  },

  {
    id: 5,
    title: "AI Image Processing",
    category: "AI / Web App",
    type: "AI Application",
    description:
      "An experimental AI-powered application concept focused on image processing and intelligent digital workflows.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200",
    technologies: ["React", "AI", "API"],
    link: "#",
    github: "#",
  },

  {
    id: 6,
    title: "Creative Branding",
    category: "Graphic Design",
    type: "Brand Identity",
    description:
      "A collection of visual identity work including promotional graphics, typography, layouts and digital brand materials.",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1200",
    technologies: ["Photoshop", "Illustrator", "Branding"],
    link: "#",
    github: "#",
  },
];

const categories = [
  "All",
  "Frontend Development",
  "UI/UX Design",
  "Graphic Design",
  "AI / Web App",
];

const Portfolio = () => {
  const [selected, setSelected] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section
      id="gallery"
      className="relative bg-[#080e17] py-28 px-6 md:px-10 lg:px-16 text-white overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-20 left-[-150px] w-[350px] h-[350px] bg-orange-500/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-[-150px] w-[350px] h-[350px] bg-orange-500/5 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">

          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-[2px] bg-orange-500" />

              <span className="text-orange-500 uppercase tracking-[0.25em] text-sm font-bold">
                Selected Work
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              Projects that
              <span className="text-orange-500"> speak.</span>
            </h2>

            <p className="text-gray-400 max-w-2xl mt-5 text-base md:text-lg leading-relaxed">
              A selection of websites, digital products, UI/UX concepts and
              creative design projects I've worked on.
            </p>
          </div>

          {/* Project count */}
          <div className="hidden md:flex items-center gap-3 text-gray-400">
            <span className="text-4xl font-bold text-white">
              {projects.length}
            </span>

            <span className="text-sm leading-tight">
              Selected
              <br />
              Projects
            </span>
          </div>
        </div>

        {/* CATEGORY FILTER */}
        <div className="flex gap-3 overflow-x-auto pb-3 mb-12 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-300 ${
                activeCategory === category
                  ? "bg-orange-500 border-orange-500 text-white"
                  : "border-white/10 text-gray-400 hover:border-orange-500/50 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* PROJECT GRID */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                }}
                whileHover={{ y: -8 }}
                className={`group relative bg-[#0d1522] border border-white/[0.07] rounded-[1.7rem] overflow-hidden ${
                  project.featured ? "lg:col-span-2" : ""
                }`}
              >
                {/* IMAGE */}
                <div
                  className={`relative overflow-hidden ${
                    project.featured
                      ? "h-[300px] md:h-[400px]"
                      : "h-[250px]"
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080e17] via-transparent to-transparent opacity-80" />

                  {/* Category */}
                  <div className="absolute top-5 left-5">
                    <span className="px-4 py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-xs font-semibold text-white">
                      {project.category}
                    </span>
                  </div>

                  {/* Open button */}
                  <button
                    onClick={() => setSelected(project)}
                    className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white text-black flex items-center justify-center opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-orange-500 hover:text-white"
                  >
                    <ArrowUpRight size={19} />
                  </button>
                </div>

                {/* CONTENT */}
                <div className="p-6 md:p-7">

                  <p className="text-orange-500 text-xs uppercase tracking-[0.18em] font-bold mb-3">
                    {project.type}
                  </p>

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-orange-400 transition">
                        {project.title}
                      </h3>

                      <p className="text-gray-400 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={22}
                      className="text-gray-600 group-hover:text-orange-500 transition flex-shrink-0"
                    />
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.07] text-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* BOTTOM CTA */}
        <div className="mt-20 rounded-[2rem] border border-white/[0.08] bg-gradient-to-r from-[#0d1522] to-[#111a29] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">

          <div>
            <div className="flex items-center gap-2 text-orange-500 mb-3">
              <Sparkles size={18} />

              <span className="text-sm font-semibold uppercase tracking-wider">
                Have a project?
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold">
              Let's build something
              <span className="text-orange-500"> remarkable.</span>
            </h3>

            <p className="text-gray-400 mt-2">
              Let's turn your idea into a strong digital experience.
            </p>
          </div>

          <a
            href="mailto:akinsgraphix1@gmail.com"
            className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 px-7 py-3.5 rounded-full font-bold transition-all hover:scale-105 whitespace-nowrap"
          >
            Start a Project
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>

      {/* ================= MODAL ================= */}

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-xl flex items-center justify-center p-5"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 30 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-[#0d1522] border border-white/10 rounded-[2rem] max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              {/* CLOSE */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center hover:bg-orange-500 transition"
              >
                <X size={20} />
              </button>

              {/* IMAGE */}
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full h-[280px] md:h-[400px] object-cover"
              />

              {/* MODAL CONTENT */}
              <div className="p-7 md:p-10">

                <span className="text-orange-500 text-sm uppercase tracking-[0.2em] font-bold">
                  {selected.category}
                </span>

                <h2 className="text-3xl md:text-5xl font-bold mt-3">
                  {selected.title}
                </h2>

                <p className="text-gray-400 leading-relaxed mt-5 max-w-2xl">
                  {selected.description}
                </p>

                {/* Technologies */}
                <div className="mt-7">
                  <h4 className="text-sm font-semibold text-white mb-3">
                    Technologies & Skills
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {selected.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* BUTTONS */}
                <div className="flex flex-col sm:flex-row gap-3 mt-8">

                  {selected.link && selected.link !== "#" && (
                    <a
                      href={selected.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-full font-bold transition"
                    >
                      <ExternalLink size={18} />
                      Visit Live Project
                    </a>
                  )}

                  {selected.github && selected.github !== "#" && (
                    <a
                      href={selected.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 border border-white/10 hover:border-orange-500 px-6 py-3 rounded-full font-bold transition"
                    >
                      <Code2 size={18} />
                      View Code
                    </a>
                  )}

                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;