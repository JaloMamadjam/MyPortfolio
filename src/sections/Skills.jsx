export default function Skills() {
  const skillCategories = [
    {
      title: "Software Development",
      skills: ["C/C++", "Python", "JavaScript (ES6+)", "React", "Node.js", "MongoDB"]
    },
    {
      title: "Hardware & Engineering",
      skills: ["VHDL", "Microcontrollers", "SoC", "Digital Circuits"]
    },
    {
      title: "Tools & Others",
      skills: ["Git & GitHub", "Linux", "Qt Framework", "Algorithms and Data Structures", "Agile Methodologies"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
         Skills & Tools
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {skillCategories.map((cat, i) => (
          <div key={i}>
            <h3 className="text-blue-400 font-mono mb-4 text-sm uppercase tracking-widest">{cat.title}</h3>
            <ul className="grid grid-cols-1 gap-2">
              {cat.skills.map(skill => (
                <li key={skill} className="text-slate-400 flex items-center gap-2 font-mono text-sm">
                  <span className="text-blue-500 text-xs">▹</span> {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}