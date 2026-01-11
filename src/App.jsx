import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { fullstackPojects } from "./data/project.js"
import { frontendProjects } from "./data/project.js"


const App = () => {
  return (
    <>
      <Navbar />

      <main>
        <section id="/home">
          <Home />
        </section>

        <section id="projects">
          <Projects projects={fullstackPojects} title={"Full Stack Projects"} />
          <Projects projects={frontendProjects} title={"Frontend Projects"} />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default App;
