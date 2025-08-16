import React from "react";
import Header from "./component/header";
import Hero from "./component/Hero";
import About from "./component/About";
import Skills from "./component/Skills";
function App() {
  return (
    <div className="bg-gray-900">
      <Header />
      <Hero />
      <About />
      <Skills />
    </div>
  );
}

export default App;
