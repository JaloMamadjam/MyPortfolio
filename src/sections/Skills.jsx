import { Reveal } from '../components/Reveal.jsx';

export default function Skills() {
  const skillCategories = [
    {
      title: "Software Development",
      skills: ["C/C++", "Python", "JavaScript", "React", "Node.js", "MongoDB"]
    },
    {
      title: "Hardware & Engineering",
      skills: ["VHDL", "Microcontrollers", "SoC", "Digital Circuits"]
    },
    {
      title: "Tools & Others",
      skills: ["Git & GitHub", "Linux", "Qt Framework", "Algorithms"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 sm:px-8 max-w-5xl mx-auto">
      <Reveal>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 flex items-center gap-4">
           Skills & Tools
          <div className="h-[1px] bg-slate-800 flex-grow max-w-[200px]"></div>
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {skillCategories.map((cat, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div className="flex flex-col">
              {/* Título da Categoria sempre à esquerda */}
              <h3 className="text-blue-400 font-mono mb-6 text-xs uppercase tracking-[0.2em] font-bold">
                {cat.title}
              </h3>
              
              {/* Grid interno: 2 colunas no mobile, 1 no desktop para manter a lista limpa */}
              <ul className="grid grid-cols-2 md:grid-cols-1 gap-y-4 gap-x-2">
                {cat.skills.map(skill => (
                  <li 
                    key={skill} 
                    className="group flex items-center gap-2 text-slate-400 font-mono text-sm transition-colors hover:text-white"
                  >
                    {/* Indicador visual minimalista */}
                    <span className="text-blue-500/50 group-hover:text-blue-400 transition-colors text-[10px]">
                      {">"}
                    </span> 
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}