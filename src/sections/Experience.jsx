import { Reveal } from '../components/Reveal';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    company: "EJEC - Computer Engineering Junior Enterprise",
    role: "Finance & Administrative Officer",
    location: "Araranguá, SC",
    period: "Set 2025 - Present",
    description: [
      "Managing financial operations and administrative workflows for engineering projects.",
      "Optimizing internal processes and financial reporting efficiency by implementing automation tools.",
      "Collaborating with multidisciplinary teams to ensure project feasibility and resource management."
    ],
    tech: ["Financial Management", "Process Optimization", "Leadership"]
  },
  {
    company: "Software Development (Freelance / Professional)",
    role: "Full Stack Developer",
    location: "Remote",
    period: "Aug 2024 - Present",
    description: [
      "1 year and 4 months of experience building scalable web applications using the MERN stack.",
      "Developing RESTful APIs and interactive front-end components with React and Node.js.",
      "Managing database structures with MongoDB and ensuring clean, maintainable code practices."
    ],
    tech: ["React", "Node.js", "MongoDB", "JavaScript"]
  },
  {
    company: "Aliança English School",
    role: "English Tutor",
    location: "Remote",
    period: "Jan 2025 - Present",
    description: [
      "Provided advanced English instruction for students, focusing on technical and conversational skills.",
      "Developed communication strategies and simplified complex concepts for better learning outcomes.",
      "Leveraging advanced English proficiency for international collaboration and technical documentation."
    ],
    tech: ["Communication", "Advanced English", "Teaching"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-8 max-w-5xl mx-auto">
      <Reveal>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-16 flex items-center gap-4">
          Professional Experience
        </h2>
      </Reveal>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <Reveal key={index} delay={index * 0.1}>
            <div className="relative pl-8 md:pl-12 border-l-2 border-slate-800 hover:border-blue-500/50 transition-colors group">
              
              {/* Círculo da Timeline */}
              <div className="absolute w-4 h-4 bg-slate-900 border-2 border-slate-700 rounded-full -left-[9px] top-1 group-hover:border-blue-400 group-hover:bg-blue-400 transition-all duration-300 shadow-[0_0_10px_rgba(0,0,0,0.5)]"></div>

              <div className="flex flex-col mb-6">
                <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-slate-100 group-hover:text-blue-400 transition-colors">
                    {exp.role}
                  </h3>
                  <span className="flex items-center gap-2 text-blue-400 font-mono text-sm bg-blue-400/10 px-3 py-1 rounded-full">
                    <Calendar size={14} /> {exp.period}
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-4 text-slate-400 text-sm font-medium">
                  <span className="flex items-center gap-1 text-slate-300">
                    <Briefcase size={14} className="text-blue-500" /> {exp.company}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} /> {exp.location}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-slate-400 text-base leading-relaxed flex gap-3">
                    <span className="text-blue-500 mt-1.5 shrink-0 text-xs">▹</span> 
                    {item}
                  </li>
                ))}
              </ul>

              {/* Tags de Habilidades Usadas na Experiência */}
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span key={t} className="text-[10px] uppercase tracking-wider font-bold font-mono bg-slate-800/50 text-slate-400 border border-slate-700 px-2 py-1 rounded group-hover:border-blue-500/30 transition-colors">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}