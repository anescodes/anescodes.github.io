import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AcademicPath from './components/AcademicPath';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Research from './components/Research';
function App() {
  return (
    <div className="">
      <Navbar />
      <Hero/>
      <AcademicPath/>
      <Research />
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;