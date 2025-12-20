import { Github, ExternalLink, Cpu, Code2 } from 'lucide-react';

const projects = [
  {
    title: "Embedded Ping Pong Game",
    description: "A 2D game developed for embedded systems using C and microcontrollers. Focus on real-time logic and hardware integration.",
    tech: ["C", "Embedded Systems", "PIC16F877A"],
    type: "hardware",
    github: "#"
  },
  {
    title: "MERN Stack Application",
    description: "Full-stack web application with MongoDB, Express, React, and Node.js. Features JWT authentication and RESTful API.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind"],
    type: "software",
    github: "#"
  },
  {
    title: "VHDL Digital Systems",
    description: "Implementation of complex digital logic and SoC concepts using VHDL and FPGA tools (Xilinx ISE).",
    tech: ["VHDL", "SoC", "Digital Systems"],
    type: "hardware",
    github: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
         
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj, index) => (
          <div key={index} className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:-translate-y-2 transition-all group">
            <div className="flex justify-between items-start mb-4">
              {proj.type === 'hardware' ? <Cpu className="text-blue-400" /> : <Code2 className="text-green-400" />}
              <div className="flex gap-3 text-slate-400">
                <a href={proj.github} className="hover:text-white"><Github size={20} /></a>
                <ExternalLink size={20} className="hover:text-white cursor-pointer" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-blue-400">{proj.title}</h3>
            <p className="text-slate-400 text-sm mb-4 leading-relaxed">{proj.description}</p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {proj.tech.map(t => (
                <span key={t} className="text-[10px] font-mono bg-slate-800 text-slate-300 px-2 py-1 rounded">
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