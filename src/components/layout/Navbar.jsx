import React, { useState, useMemo } from "react";
import { AppIcons } from "../icons/AppIcons";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = useMemo(
    () => [
      { name: "Projects", href: "#projects" },
      { name: "About", href: "#about" },
      { name: "Contact", href: "#contact" },
    ],
    []
  );

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="section pt-5">
          <nav className="relative overflow-hidden backdrop-blur-md bg-[#071018]/80 border border-cyan-400/10 h-18 px-7 flex items-center justify-between">
            
            {/* Logo */}
            <a href="#home" className="leading-none select-none">
              <div className="flex items-center gap-3">
                <div className="h-9 w-0.5 bg-cyan-400" />
                <h1 className="text-[23px] font-bold uppercase text-white">
                  Nikhil
                </h1>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative text-sm uppercase tracking-[0.18em] text-zinc-400 transition-colors hover:text-cyan-300"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Resume */}
            <div className="hidden md:flex">
              <a
                href="https://drive.google.com/file/d/17fctRhTMOR5Mx6iPf51zQxW8iV8ARw6P/view"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-cyan-400 text-black px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.15em] transition hover:opacity-90"
                style={{
                  clipPath:
                    "polygon(12px 0,100% 0,100% calc(100% - 12px),calc(100% - 12px) 100%,0 100%,0 12px)",
                }}
              >
                <AppIcons.download />
                Resume
              </a>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setOpen((p) => !p)}
              className="md:hidden h-11 w-11 flex items-center justify-center border border-cyan-400/20 bg-cyan-400/5 text-cyan-300"
            >
              {open ? <AppIcons.close /> : <AppIcons.menu />}
            </button>
          </nav>

          {/* Mobile Menu */}
          <div
            className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
              open ? "max-h-90 opacity-100 mt-3" : "max-h-0 opacity-0"
            }`}
          >
            <div className="bg-[#071018]/95 border border-cyan-400/10 p-5 flex flex-col gap-2 backdrop-blur-md">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 uppercase tracking-[0.18em] text-sm text-zinc-300 hover:text-cyan-300"
                >
                  {item.name}
                </a>
              ))}

              <a
                href="https://drive.google.com/file/d/17fctRhTMOR5Mx6iPf51zQxW8iV8ARw6P/view"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center justify-center gap-2 bg-cyan-400 py-3 text-sm font-semibold uppercase text-black"
                style={{
                  clipPath:
                    "polygon(12px 0,100% 0,100% calc(100% - 12px),calc(100% - 12px) 100%,0 100%,0 12px)",
                }}
              >
                <AppIcons.download />
                Resume
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="h-28" />
    </>
  )
};

export default Navbar;