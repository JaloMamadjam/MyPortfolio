import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import { Reveal } from './components/Reveal';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="bg-slate-950 text-slate-200">
      <nav className="fixed w-full p-6 bg-slate-950/80 backdrop-blur-md z-50">
        { <Navbar />  }
      </nav>

      <main className="container mx-auto">
        <Hero />
        <Reveal><Experience /></Reveal>
        <Reveal><Projects /></Reveal>
        <Reveal><Skills /></Reveal>
        <Reveal><About /></Reveal>
        
        
      </main>
      <Reveal>
      <footer className="py-10 text-center">
        <p>© 2025 Mamadjam Jalo</p>
      </footer>
      </Reveal>
    </div>
  );
}

export default App;