import React from "react";
import { AppIcons } from "../icons/AppIcons";

const Footer = () => {
  const IconButton = ({ href, Icon }) => (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex h-12 w-12 items-center justify-center border border-cyan-400/10 bg-cyan-400/3 text-cyan-400 transition hover:border-cyan-400/30 hover:bg-cyan-400/10"
      style={{
        clipPath:
          "polygon(12px 0,100% 0,100% calc(100% - 12px),calc(100% - 12px) 100%,0 100%,0 12px)",
      }}
    >
      <Icon />
    </a>
  );

  return (
    <footer className="relative mt-5 border-t border-cyan-400/10">
      <div className="section py-14">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          {/* Left */}
          <div>
            <h2 className="text-3xl font-black uppercase tracking-wide">
              Nikhil
            </h2>

            <p className="mt-3 max-w-md text-zinc-500 leading-7">
              Full Stack MERN Developer focused on scalable web applications.
            </p>
          </div>

          {/* Center */}
          <div className="flex flex-wrap gap-8 text-sm uppercase tracking-[0.18em]">
            {[
              ["Home", "#home"],
              ["About", "#about"],
              ["Projects", "#projects"],
              ["Contact", "#contact"],
            ].map(([label, link]) => (
              <a
                key={label}
                href={link}
                className="text-zinc-500 transition hover:text-cyan-400"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            <IconButton
              href="https://github.com/nikhilvishwakarma077"
              Icon={AppIcons.github}
            />

            <IconButton
              href="https://www.linkedin.com/in/nikhil-vishwakarma-874776376"
              Icon={AppIcons.linkedin}
            />

            <IconButton
              href="mailto:nikhilvishwakarma696@gmail.com"
              Icon={AppIcons.mail}
            />
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 h-px bg-linear-to-r from-cyan-400/20 via-cyan-400/5 to-transparent" />

        {/* Bottom */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="text-sm text-zinc-500">
            © 2026 Nikhil Vishwakarma. All Rights Reserved.
          </p>

          <a
            href="#home"
            className="group flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-zinc-500 transition hover:text-cyan-400"
          >
            Back to Top
            <AppIcons.external className="transition group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;