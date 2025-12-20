import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null); // Referência para a navbar

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
  ];

  // Fecha o menu ao clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav 
      ref={navRef} 
      className="fixed w-full pl-3 pr-16 bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-900"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-blue-400 font-mono font-bold text-xl">
          <a href="#">MJ</a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-xs font-mono text-slate-300">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-blue-400 transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-300 hover:text-blue-400 transition-colors focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-950/95 border-b border-slate-900 py-6 px-10 flex flex-col gap-6 text-sm font-mono text-slate-300 animate-in slide-in-from-top-5 duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)} 
              className="hover:text-blue-400 transition-colors w-full"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}