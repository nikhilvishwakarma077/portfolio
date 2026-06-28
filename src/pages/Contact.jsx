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
    <section id="contact" className="py-28">
      <div className="section">
        <div
          className="relative overflow-hidden border border-cyan-400/10 bg-[#071018]/70 backdrop-blur-xl"
          style={{
            clipPath:
              "polygon(24px 0,100% 0,100% calc(100% - 24px),calc(100% - 24px) 100%,0 100%,0 24px)",
          }}
        >
          <div className="absolute inset-0 bg-linear-to-br from-cyan-400/5 via-transparent to-transparent pointer-events-none" />

          <div className="relative grid lg:grid-cols-[1fr_.9fr] gap-16 p-8 md:p-12 lg:p-16">
            {/* Left */}
            <div>
              <a
                href="mailto:nikhilvishwakarma696@gmail.com"
                className="text-cyan-400 uppercase tracking-[0.35em] text-sm"
              >
                Contact
              </a>

              <h2 className="mt-5 text-5xl md:text-6xl font-black uppercase leading-none">
                Let's Build
                <br />
                Something Great.
              </h2>

              <p className="mt-8 max-w-xl text-zinc-400 text-lg leading-8">
                I'm currently looking for internship and full-stack development opportunities. If you have an exciting project or role, let's connect.
              </p>

              <a
                href="mailto:nikhilvishwakarma696@gmail.com"
                className="gradient-button mt-10"
              >
                <AppIcons.mail />
                Get In Touch
              </a>
            </div>

            {/* Right */}
            <div className="space-y-5">
              {contacts.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between border border-cyan-400/10 bg-cyan-400/3 p-6 transition hover:border-cyan-400/30 hover:bg-cyan-400/5"
                    style={{
                      clipPath:
                        "polygon(16px 0,100% 0,100% calc(100% - 16px),calc(100% - 16px) 100%,0 100%,0 16px)",
                    }}
                  >
                    <div className="flex items-center gap-5">
                      <div className="flex h-12 w-12 items-center justify-center border border-cyan-400/20 text-cyan-400 text-xl">
                        <Icon />
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                          {item.title}
                        </p>

                        <h3 className="mt-2 text-white font-medium">
                          {item.value}
                        </h3>
                      </div>
                    </div>

                    <AppIcons.external className="text-xl text-cyan-400 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                );
              })}

              <div className="border border-cyan-400/10 bg-cyan-400/3 p-6 mt-8">
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
                  Availability
                </p>

                <h3 className="mt-3 text-2xl font-bold text-white">
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