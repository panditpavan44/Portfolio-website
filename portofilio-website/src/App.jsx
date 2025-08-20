import React from "react";
import Header from "./component/header";
import Hero from "./component/Hero";
import About from "./component/About";
import Skills from "./component/Skills";
import Projects from "./component/Projects";
import Experience from "./component/Experience";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="bg-gray-900">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
