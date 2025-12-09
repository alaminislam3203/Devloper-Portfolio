import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TechStack from './components/TechStack';
import Navlink from './components/Navlink';
import Clients from './components/Clients';

function App() {
  return (
    <div className="font-display min-h-screen antialiased overflow-x-hidden">
      {/* Main Content */}
      <div className="relative z-10 w-full min-h-screen container mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <Hero />
      </div>

      <About />
      <Skills />
      <TechStack />
      <Projects />
      <Clients />
      <Contact />
      <Footer />
      <Navlink />
    </div>
  );
}

export default App;
