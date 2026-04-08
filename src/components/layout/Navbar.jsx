import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">


        <a href="#home" className="font-bold text-2xl tracking-wide">
          <span>Nikhil{" "}</span>
          <span className="text-emerald-400 hidden md:inline-block">
           Vishwakarma
          </span>
        </a>


        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#projects" className="text-zinc-400 hover:text-zinc-100">
            Projects
          </a>
          <a href="#about" className="text-zinc-400 hover:text-zinc-100">
            About
          </a>
          <a href="#contact" className="text-zinc-400 hover:text-zinc-100">
            Contact
          </a>

          <a
            href="https://drive.google.com/file/d/1IjTYM0A96oUtfdgqNHzkILryCU0XAdfj/view"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-emerald-400 text-zinc-950 font-medium hover:bg-emerald-300 transition"
          >
            Resume
          </a>
        </div>


        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-zinc-100"
        >
          ☰
        </button>
      </div>


      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-4 text-sm bg-zinc-950 border-t border-zinc-800">
          <a href="#projects" onClick={() => setOpen(false)} className="text-zinc-400 hover:text-zinc-100">
            Projects
          </a>
          <a href="#about" onClick={() => setOpen(false)} className="text-zinc-400 hover:text-zinc-100">
            About
          </a>
          <a href="#contact" onClick={() => setOpen(false)} className="text-zinc-400 hover:text-zinc-100">
            Contact
          </a>

          <a
            href="https://drive.google.com/file/d/1IjTYM0A96oUtfdgqNHzkILryCU0XAdfj/view"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-emerald-400 text-zinc-950 font-medium hover:bg-emerald-300 transition text-center"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;