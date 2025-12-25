import {
  Github,
  ExternalLink,
  Cpu,
  Code2,
  Server
} from "lucide-react";

const projects = [
  {
    title: "Posture Check",
    description:
      "Real-time posture monitoring system using sensors and a microcontroller to detect and correct poor posture through visual feedback.",
    tech: ["ESP32", "Sensors", "Embedded Systems", "Web Interface"],
    type: "hardware/software",
    links: {
      github: "https://github.com/JaloMamadjam/Posture-Check.git"
    }
  },
  {
    title: "MERN Stack Application",
    description:
      "Full-stack web application built with MongoDB, Express, React, and Node.js. Includes JWT authentication and RESTful APIs.",
    tech: ["React", "Node.js", "MongoDB", "JWT"],
    type: "software",
    links: {
      frontend: "https://github.com/JaloMamadjam/OnlineStoreFrontEnd.git",
      backend: "https://github.com/JaloMamadjam/OnlineStoreBackEnd.git",
      live: "https://online-store-front-end-omega.vercel.app/"
    }
  },
  {
    title: "VHDL Digital Systems",
    description:
      "Implementation of digital systems and SoC concepts using VHDL and FPGA tools (Xilinx ISE).",
    tech: ["VHDL", "FPGA", "SoC"],
    type: "hardware",
    links: {
      github: "https://github.com/JaloMamadjam/DMA-Memory-Copy.git"
    }
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-12">
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:-translate-y-2 transition-all group flex flex-col"
          >
            {/* Header */}
            <div className="flex justify-between items-start mb-4">
              {proj.type === "hardware" && (
                <Cpu className="text-blue-400" />
              )}

              {proj.type === "software" && (
                <Code2 className="text-green-400" />
              )}

              {proj.type === "hardware/software" && (
                <div className="flex gap-1">
                  <Cpu className="text-blue-400" />
                  <Code2 className="text-green-400" />
                </div>
              )}

              {/* Links */}
              <div className="flex gap-3 text-slate-400">
                {proj.links?.frontend && (
                  <a
                    href={proj.links.frontend}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Frontend"
                    className="hover:text-white"
                  >
                    <Code2 size={20} />
                  </a>
                )}

                {proj.links?.backend && (
                  <a
                    href={proj.links.backend}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Backend"
                    className="hover:text-white"
                  >
                    <Server size={20} />
                  </a>
                )}

                {proj.links?.esp32 && (
                  <a
                    href={proj.links.esp32}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="ESP32 Firmware"
                    className="hover:text-white"
                  >
                    <Cpu size={20} />
                  </a>
                )}

                {proj.links?.github && (
                  <a
                    href={proj.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Source Code"
                    className="hover:text-white"
                  >
                    <Github size={20} />
                  </a>
                )}

                {proj.links?.live && (
                  <a
                    href={proj.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Live Demo"
                    className="hover:text-white"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-blue-400">
              {proj.title}
            </h3>

            <p className="text-slate-400 text-sm mb-4 leading-relaxed">
              {proj.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {proj.tech.map((t) => (
                <span
                  key={t}
                  className="text-[10px] font-mono bg-slate-800 text-slate-300 px-2 py-1 rounded"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
