import { Terminal, Cpu, Languages, GraduationCap, Code2 } from 'lucide-react';
import { Reveal } from '../components/Reveal.jsx';
export default function About() {
  return (
    <section id="about" className="py-20 px-8 max-w-5xl mx-auto">
      <Reveal>
      <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
        About Me
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          {/* Destaque de Experiência */}
          <div className="flex items-center gap-4 bg-slate-900/50 p-4 rounded-lg border border-slate-800">
            <div className="bg-blue-500/10 p-3 rounded-full text-blue-400">
              <Terminal size={24} />
            </div>
            <div>
              <p className="text-white font-bold">Software Developer</p>
              <p className="text-slate-400 text-sm">1 year and 4 months of experience</p>
            </div>
          </div>

          {/* Grid de mini-cards com os teus pontos-chave */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            <div className="flex items-start gap-3">
              <Languages className="text-blue-400 shrink-0" size={20} />
              <p className="text-sm text-slate-300">Advanced English Speaker</p>
            </div>
            <div className="flex items-start gap-3">
              <GraduationCap className="text-blue-400 shrink-0" size={20} />
              <p className="text-sm text-slate-300">Full Stack Developer</p>
            </div>
            <div className="flex items-start gap-3">
              <Cpu className="text-blue-400 shrink-0" size={20} />
              <p className="text-sm text-slate-300">Computer Engineer</p>
            </div>
            <div className="flex items-start gap-3">
              <Terminal className="text-blue-400 shrink-0" size={20} />
              <p className="text-sm text-slate-300">System-level Problem Solving</p>
            </div>
            <a 
  href="https://wa.me/5585999525960"
  target="_blank" 
  rel="noopener noreferrer"
  className="mt-8 px-6 py-3 border-2 border-green-500/50 text-green-400 rounded-md hover:bg-green-500/10 hover:border-green-500 transition-all font-mono font-bold flex items-center gap-2"
>
  Say Hi_
</a>
          </div>
        </div>

        {/* Lado Direito: Stack Visual */}
        <div className="bg-slate-900/30 border border-slate-800 p-8 rounded-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-all"></div>
          
          <h3 className="text-white font-bold mb-6 flex items-center gap-2">
            <Code2 size={20} className="text-blue-400" /> Core Tech Stack
          </h3>
          
          <ul className="space-y-4 font-mono text-sm">
            <li className="flex justify-between items-center border-b border-slate-800 pb-2">
              <span className="text-slate-400">Languages</span>
              <span className="text-blue-400">C++, Python, Javascript</span>
            </li>
            <li className="flex justify-between items-center border-b border-slate-800 pb-2">
              <span className="text-slate-400">Frontend</span>
              <span className="text-blue-400">React, Tailwind</span>
            </li>
            <li className="flex justify-between items-center border-b border-slate-800 pb-2">
              <span className="text-slate-400">Backend</span>
              <span className="text-blue-400">Node.js, MongoDB, SQL</span>
            </li>
            <li className="flex justify-between items-center border-b border-slate-800 pb-2">
              <span className="text-slate-400">Hardware</span>
              <span className="text-blue-400">Microcontroller, VHDL</span>
            </li>
          </ul>
        </div>
      </div>
      </Reveal>
    </section>
  );
}

