import React, { useState, useEffect } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 bg-white transition-shadow border-b border-gray-200 ${
        sticky ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* LOGO */}
        <img
          src="/assets/images/logo.png"
          alt="logo"
          className="w-auto max-h-16"
        />

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-10">
          {[
            ["Home", "#home"],
            ["Job Sectors", "#jobsectors"],
            ["Work Category", "#workcategory"],
            ["About Us", "#about"],
            ["Career", "#career"],
            ["Contact Us", "#contact"],
          ].map(([label, link]) => (
            <a
              key={label}
              href={link}
              className="relative pb-1 text-gray-700 group"
            >
              {label}
              <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

          <a
            href="#"
            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-5 py-2 rounded-md"
          >
            Join Now
          </a>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <IoClose /> : <IoMenu />}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-md px-6 py-4 flex flex-col gap-4">
          {[
            ["Home", "#home"],
            ["Job Sectors", "#jobsectors"],
            ["Work Category", "#workcategory"],
            ["About Us", "#about"],
            ["Career", "#career"],
            ["Contact Us", "#contact"],
          ].map(([label, link]) => (
            <a
              key={label}
              href={link}
              className="relative pb-1 text-gray-700 group"
            >
              {label}
              <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

          <a
            href="#"
            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-5 py-2 rounded-md text-center"
          >
            Join Now
          </a>
        </div>
      )}
    </header>
  );
}

