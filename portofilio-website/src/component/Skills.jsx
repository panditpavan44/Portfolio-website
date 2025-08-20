import React, { useEffect } from "react";

function Skills() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [animatedSkills, setAnimatedSkills] = React.useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        skills.forEach(
          (skill, index) => {
            setTimeout(() => {
              setAnimatedSkills((prev) => ({
                ...prev,
                [skill.name]: skill.level,
              }));
            }, index * 200);
          },
          { threshold: 0.3 }
        );
      }
    });
    const element = document.getElementById("skills");
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: "UX/UI", level: 70 },
    { name: "BRANDING", level: 65 },
    { name: "DEVELOPMENT", level: 75 },
    { name: "WEB DESIGN", level: 80 },
    { name: "SEO", level: 90 },
    { name: "GRAPHIC DESIGN", level: 85 },
  ];
  const education = [
    {
      title: "Bachelor of Technology in Computer Science",
      institution: "ITM University",
      year: "2023 - 2027",
      description:
        " Pursuing a degree in Computer Science with a focus on software development and web technologies. This program equips me with the skills to design, develop, and maintain complex software systems.",
    },
    {
      title: "high school diploma",
      institution: "kiddy's corner public school",
      year: "2021 - 2022",
      description:
        "Completed high school with a focus on science and mathematics, laying a strong foundation for my future studies in technology and engineering.",
    },
  ];
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
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="mb-12">
              <p className="text-green-400 font-semibold text-lg mb-4">
                Qualification
              </p>
              <p className="text-green-400 text-4xl font-bold mb-8">
                Education
              </p>
            </div>
            <div className="space-y-8">
              {education.map((edu, index) => {
                return (
                  <div
                    key={index}
                    className={`border-l-2 border-green-500 pl-6 relative group transition-all duration-1000  ${
                      isVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-10"
                    }`}
                  >
                    <div
                      className="absolute -left-2 top-0 w-4 h-4 bg-green-500 rounded-full group-hover:scale-125 transition-all
                duration-300"
                    ></div>
                    <div
                      className="text-green-400 text-sm font-semibold mb-2 group-hover:text-green-300
                    transition-all duration-300"
                    >
                      {edu.year}
                    </div>
                    <h3 className="text-xl font-black mb-2 text-white group-hover:text-green-400 transition-all duration-300">
                      {edu.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-white transition-all duration-300">
                      {edu.institution}
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-all duration-300">
                      {edu.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Right Skills */}
          <div
            className={`transition-all duration-1000 delay-300  ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="mb-12">
              <p className="text-green-400 font-semibold text-lg mb-4">
                Expert
              </p>
              <p className="text-4xl font-black text-white mb-8">My Skills</p>
            </div>
            <div className="space-y-6">
              {skills.map((skill, index) => {
                return (
                  <div
                    key={index}
                    className={`space-y-2 transition-all duration-1000`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium group-hover:text-green-400 transition-all duration-300">
                        {skill.name}
                      </span>
                      <span className="text-green-400 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-green-500 to-green-400 h-3 rounded-full transition-all
                      duration-1500 ease-out relative"
                        style={{ width: `${animatedSkills[skill.name] || 0}%` }}
                      >
                        <div className="absolute inset-0 bg-white/20"></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
