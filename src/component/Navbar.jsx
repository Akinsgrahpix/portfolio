
import React, { useEffect, useState } from "react";
import logo from "../assets/Akins-Logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Services", to: "service" },
    { name: "Portfolio", to: "gallery" },
    { name: "Contact", to: "contact" },
  ];

  // Close mobile menu when Escape is pressed
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const closeMenu = () => setIsOpen(false);

  const linkClass =
    "cursor-pointer rounded-md px-3 py-2 text-sm font-medium " +
    "text-gray-300 transition-colors duration-200 " +
    "hover:text-[#ff5e00] focus-visible:outline-none " +
    "focus-visible:ring-2 focus-visible:ring-[#ff5e00]";

  return (
    <nav
      aria-label="Main navigation"
      className="sticky top-0 z-50 border-b border-white/10 bg-[#0f172a]/95 text-white shadow-lg backdrop-blur-md"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          {/* LOGO */}
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-80}
            onClick={closeMenu}
            className="cursor-pointer rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5e00]"
            aria-label="Akins Graphix - Go to homepage"
          >
            <img
              src={logo}
              alt="Akins Graphix"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-5 md:flex lg:gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
                activeClass="!text-[#ff5e00]"
                className={linkClass}
              >
                {link.name}
              </Link>
            ))}

            {/* CALL TO ACTION */}
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer rounded-lg bg-[#ff5e00] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Hire Me <span aria-hidden="true"></span>
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            className="rounded-lg p-2 text-gray-300 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5e00] md:hidden"
          >
            <svg
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE NAVIGATION */}
      <div
        id="mobile-navigation"
        hidden={!isOpen}
        className="border-t border-white/10 bg-[#1e293b] md:hidden"
      >
        <div className="space-y-1 px-4 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              activeClass="!border-[#ff5e00] !text-[#ff5e00]"
              onClick={closeMenu}
              className="block cursor-pointer rounded-md border-l-2 border-transparent px-4 py-3 text-base text-gray-300 transition-colors hover:border-[#ff5e00] hover:bg-white/5 hover:text-[#ff5e00] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5e00]"
            >
              {link.name}
            </Link>
          ))}

          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            onClick={closeMenu}
            className="mt-3 block cursor-pointer rounded-lg bg-[#7c543c] px-4 py-3 text-center font-semibold text-white transition-colors hover:bg-orange-600"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
