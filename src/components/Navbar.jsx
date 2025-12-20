
export default function Navbar() {
  return (
<nav className="fixed w-full p-6 flex justify-between items-center bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-900">
        <div className="text-blue-400 font-mono font-bold text-xl">
          <a href="#">MJ</a>
          </div>
        <div className="mr-6 hidden md:flex gap-8 text-xs font-mono text-slate-300">
          <a href="#about" className="hover:text-blue-400 transition-colors cursor-pointer"> About</a>
          <a href="#skills" className="hover:text-blue-400 transition-colors cursor-pointer"> Skills</a>
          <a href="#projects" className="hover:text-blue-400 transition-colors cursor-pointer"> Projects</a>
          <a href="#experience" className="hover:text-blue-400 transition-colors cursor-pointer"> Experience</a>
        </div>
      </nav>
    );
}