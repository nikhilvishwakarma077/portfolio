import React, { useMemo } from "react";
import { AppIcons } from "../components/icons/AppIcons";

const Contact = () => {
  const contacts = useMemo(
    () => [
      {
        title: "Email",
        value: "nikhilvishwakarma696@gmail.com",
        href: "mailto:nikhilvishwakarma696@gmail.com",
        icon: AppIcons.mail,
      },
      {
        title: "GitHub",
        value: "github.com/nikhilvishwakarma077",
        href: "https://github.com/nikhilvishwakarma077",
        icon: AppIcons.github,
      },
      {
        title: "LinkedIn",
        value: "Let's Connect",
        href: "https://linkedin.com/",
        icon: AppIcons.linkedin,
      },
    ],
    []
  );

  return (
    <section id="contact" className="py-10 md:py-20">
      <div className="section">
        <div
          className="relative overflow-hidden border border-cyan-400/10 bg-[#071018]/70 backdrop-blur-xl"
          style={{
            clipPath:
              "polygon(24px 0,100% 0,100% calc(100% - 24px),calc(100% - 24px) 100%,0 100%,0 24px)",
          }}
        >
          <div className="absolute inset-0 bg-linear-to-br from-cyan-400/5 via-transparent to-transparent pointer-events-none" />

          {/* GRID FIX */}
          <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_.9fr] gap-10 lg:gap-16 p-6 sm:p-8 md:p-12 lg:p-16">
            
            {/* LEFT */}
            <div>
              <a
                href="mailto:nikhilvishwakarma696@gmail.com"
                className="text-cyan-400 uppercase tracking-[0.3em] text-xs sm:text-sm"
              >
                Contact
              </a>

              <h2 className="mt-4 sm:mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight">
                Let's Build
                <br />
                Something Great.
              </h2>

              <p className="mt-6 sm:mt-8 max-w-xl text-zinc-400 text-sm sm:text-base md:text-lg leading-7 sm:leading-8">
                I'm currently looking for internship and full-stack development opportunities.
                If you have an exciting project or role, let's connect.
              </p>

              <a
                href="mailto:nikhilvishwakarma696@gmail.com"
                className="gradient-button mt-8 sm:mt-10 inline-flex w-fit"
              >
                <AppIcons.mail />
                Get In Touch
              </a>
            </div>

            {/* RIGHT */}
            <div className="space-y-4 sm:space-y-5 mt-6 lg:mt-0">
              {contacts.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-start sm:items-center justify-between gap-4 border border-cyan-400/10 bg-cyan-400/3 p-4 sm:p-5 md:p-6 transition hover:border-cyan-400/30 hover:bg-cyan-400/5"
                    style={{
                      clipPath:
                        "polygon(16px 0,100% 0,100% calc(100% - 16px),calc(100% - 16px) 100%,0 100%,0 16px)",
                    }}
                  >
                    <div className="flex items-start sm:items-center gap-4 sm:gap-5">
                      
                      {/* ICON BOX */}
                      <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center border border-cyan-400/20 text-cyan-400 text-lg sm:text-xl shrink-0">
                        <Icon />
                      </div>

                      {/* TEXT */}
                      <div className="min-w-0">
                        <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-zinc-500">
                          {item.title}
                        </p>

                        <h3 className="mt-1 sm:mt-2 text-white font-medium text-sm sm:text-base break-all sm:break-normal">
                          {item.value}
                        </h3>
                      </div>
                    </div>

                    <AppIcons.external className="text-lg sm:text-xl text-cyan-400 transition group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0" />
                  </a>
                );
              })}

              {/* STATUS CARD */}
              <div className="border border-cyan-400/10 bg-cyan-400/3 p-4 sm:p-5 md:p-6 mt-6 sm:mt-8">
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-cyan-300">
                  Availability
                </p>

                <h3 className="mt-2 sm:mt-3 text-lg sm:text-xl md:text-2xl font-bold text-white">
                  Open for Internships & Freelance
                </h3>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;