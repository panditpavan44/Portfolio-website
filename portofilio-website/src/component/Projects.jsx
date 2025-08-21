import React, { useEffect } from "react";
import amit8 from "../assets/amit8.jpeg";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import { ExternalLink, Github } from "lucide-react";

function Projects() {
  const [isVisible, setIsVisible] = React.useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    const element = document.getElementById("projects");
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description:
        "A personal portfolio website showcasing my skills and projects.",
      image: `${img1}`,
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      category: "Full Stack",
      featured: true,
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description: "An e-commerce platform built with React and Node.js.",
      image: `${img3}`,
      technologies: ["React", "Node.js", "MongoDB"],
      category: "Web App",
      featured: true,
    },
    {
      id: 3,
      title: "Employee monitoring System",
      description:
        "A monitoring System with user authentication and CRUD operations.",
      image: `${img2}`,
      technologies: ["React", "Express", "MongoDB"],
      category: "Web Development",
      featured: true,
    },
    // {
    //   id: 4,
    //   title: "Weather App",
    //   description:
    //     "A weather application that provides real-time weather updates.",
    //   image: `${amit8}`,
    //   technologies: ["React", "API Integration", "CSS"],
    //   category: "Mobile",
    //   featured: true,
    // },
    // {
    //   id: 5,
    //   title: "Chat Application",
    //   description: "A real-time chat application using WebSocket.",
    //   image: `${amit8}`,
    //   technologies: ["React", "Node.js", "Socket.io"],
    //   category: "backened",
    //   featured: true,
    // },
    // {
    //   id: 6,
    //   title: "Task Management App",
    //   description:
    //     "A task management application to organize tasks and projects.",
    //   image: `${amit8}`,
    //   technologies: ["React", "Redux", "Firebase"],
    //   category: "Full Stack",
    //   featured: true,
    // },
  ];
  return (
    <section
      id="projects"
      className="py-24 bg-slate-950 relative overflow-hidden"
    >
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
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-green-400 font-semibold text-lg mb-4">Protfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here are some of my notable projects that showcase my skills and
            creativity. Each project reflects my dedication to quality and
            innovation in web development.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
          {/*I will use logic to dispay the dynamic content */}
          {projects.map((project, index) => {
            return (
              <div
                className={`group bg-slate-900 rounded-xl shadow-md hover:shadow-lg 
                transition-all duration-1000 delay-600 overflow-hidden border border-slate-700 *:hover:border-green-400
                hover:scale-105  ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${(index + 3) * 150}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-70 object-cover group-hover:scale-105
                        transition-all duration-300"
                  />
                  <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button
                      className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all
                    duration-300"
                    >
                      <Github className="w-4 h-4 text-gray-700" />
                    </button>
                    <button
                      className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all
                    duration-300"
                    >
                      <ExternalLink className="w-4 h-4 text-gray-700" />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-slate-800 text-gray-400 px-2 py-1 rounded-full text-sx font-medium">
                      {project.category}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-all duration-300">
                    {project.title}
                  </h4>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description.substring(0, 100)}...
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech, techindex) => {
                      return (
                        <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
          ;
        </div>
        <div
          className={`text-center transition-all duration-1000 delay-1000 mt-5  ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <button
            className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-400 transition-all
            duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105"
          >
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}

export default Projects;
