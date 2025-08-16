import React from "react";

function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-2xl"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full
            blur-3xl"
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
            w-full h-full bg-gradient-to-r from-transparent via-green-600/5 to-transparent"
        ></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Education */}
          <div className={`transition-all duration-1000`}>
            <div className="mb-12">
              <p className="text-green-400 font-semibold text-lg mb-4">
                Qualification
              </p>
              <p className="text-green-400 font-4xl text-lg mb-8">Education</p>
            </div>
            <div className="space-y-8">{}</div>
          </div>
          {/* Right Skills */}
          <div className=""></div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
