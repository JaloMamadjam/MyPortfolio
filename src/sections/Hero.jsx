import { Github, Linkedin, Mail, Download } from 'lucide-react';
import profileImg from '../assets/me.jpeg'; 
import { Reveal } from '../components/Reveal';

export default function Hero() {
  const socialClass = "text-slate-400 hover:text-blue-400 transition-colors hover:-translate-y-1 transform p-2 border border-slate-800 rounded-md hover:border-blue-400/50 bg-slate-900/50";

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-8 pt-28 md:pt-0 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        
        {/* --- LADO ESQUERDO: A FOTO (COR ORIGINAL + ZOOM) --- */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-none mb-8 lg:mb-0">
          <div className="relative w-72 h-72 md:w-80 md:h-80 group">
             
             {/* Efeito de brilho externo (Aura) */}
             <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-cyan-400/20 rounded-2xl blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
             
             {/* Bordas técnicas nos cantos */}
             <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-blue-500 z-20 opacity-70 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300"></div>
             <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-blue-500 z-20 opacity-70 group-hover:translate-x-1 group-hover:translate-y-1 transition-all duration-300"></div>

             {/* Moldura da Imagem */}
             <div className="w-full h-full rounded-2xl overflow-hidden border-2 border-slate-800 relative z-10 bg-slate-900 shadow-2xl">
                <img 
                  src={profileImg} 
                  alt="Mamadjam Jalo" 
                  className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                />
                {/* Overlay sutil para profundidade (opcional) */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent pointer-events-none"></div>
             </div>
          </div>
        </div>


        {/* --- LADO DIREITO: O TEXTO --- */}
        <div className="lg:col-span-7 flex flex-col justify-center items-start order-2 lg:order-none">
          <Reveal delay={0.1}>
            <span className="text-blue-400 font-mono mb-4 bg-blue-900/20 px-3 py-1 rounded text-sm border border-blue-900/50 inline-block">
              &gt; Hello, I am
            </span>
          </Reveal>

          <Reveal delay={0.2}>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Mamadjam Jalo
            </h1>
          </Reveal>

          <Reveal delay={0.3}>
            <h2 className="font-mono text-3xl md:text-4xl font-bold text-slate-400 mb-8 leading-tight">
              Software Developer and Computer Engineer <br className="hidden md:block" /> 

            </h2>
          </Reveal>

          <Reveal delay={0.4}>
            <p className="font-sans text-slate-400 max-w-xl text-lg mb-10 leading-relaxed border-l-2 border-slate-800 pl-6">
              Computer Engineer crafting real-world solutions across software and hardware.
            </p>
          </Reveal>
          
          <Reveal delay={0.5}>
            <div className="flex flex-wrap gap-4 items-center">
              <a 
                href="https://www.canva.com/design/DAGrr-SlT_s/9Emr1zew_7_PDR2qAkj20A/edit?utm_content=DAGrr-SlT_s&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all font-mono font-bold shadow-lg shadow-blue-900/20"
              >
                <Download size={18} className="group-hover:-translate-y-1 transition-transform" /> Download CV
              </a>

              <div className="flex gap-3 pl-4 md:border-l border-slate-800">
                <a href="https://github.com/JaloMamadjam" target="_blank" rel="noopener noreferrer" className={socialClass}><Github size={22}/></a>
                <a href="https://www.linkedin.com/in/mamadjam-jalo-495950300/" target="_blank" rel="noopener noreferrer" className={socialClass}><Linkedin size={22}/></a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jalomamadjam7@gmail.com" target="_blank" rel="noopener noreferrer" className={socialClass}><Mail size={22}/></a>
              </div>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}