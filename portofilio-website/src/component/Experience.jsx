import { Award, Briefcase, Calendar, MapPin } from "lucide-react";
import React, { useEffect, useState } from "react";

function Experience() {
  const [visisbleItems, setVisibleItems] = useState([]);
  const [timelineVisible, setTimelineVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains("timeline-line")) {
              setTimelineVisible(true);
            } else {
              const index = parseInt(entry.target.dataset.index);
              setVisibleItems((prev) => [...new Set([...prev, index])]);
            }
          }
        });
      },
      {
        threshold: 0.3,
      }
    );
    const timelineElement = document.querySelector(".timeline-item");
    const experienceItems = document.querySelectorAll(".experience-item");
    if (timelineElement) observer.observe(timelineElement);
    experienceItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      company: "Tech Solutions Inc.",
      position: "Software Engineer",
      duration: "Jan 2020 - Present",
      description:
        "Developing scalable web applications using React and Node.js.",
      location: "Gwaliore, India",
      achievements: [
        "Led a team of 5 developers to build a high-traffic e-commerce platform.",
        "Implemented CI/CD pipelines to streamline deployment processes.",
      ],
      skills: ["React", "Node.js", "JavaScript", "CSS", "HTML"],
    },
    {
      company: "Innovatech Ltd.",
      position: "Frontend Developer",
      duration: "Jun 2018 - Dec 2019",
      description: "Focused on building responsive user interfaces with React.",
      location: "Delhi, India",
      achievements: [
        "Redesigned the company website, improving user engagement by 30%.",
        "Collaborated with UX designers to enhance user experience.",
      ],
      skills: ["React", "JavaScript", "CSS", "HTML", "Responsive Design"],
    },
    {
      company: "Global Tech Corp.",
      position: "Junior Developer",
      duration: "Jan 2017 - May 2018",
      description: "Assisted in developing internal tools and applications.",
      location: "Mumbai, India",
      achievements: [
        "Contributed to the development of an internal CRM system.",
        "Automated data entry processes, reducing manual work by 40%.",
      ],
      skills: ["JavaScript", "Python", "SQL", "HTML", "CSS"],
    },
  ];
  return (
    <section
      id="experience"
      className="py-24 bg-slate-900 relative overflow-hidden"
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
        <div className="text-center mb-16">
          <p className="text-green-400 font-semibold text-lg mb-4">
            All Campany
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My Experience
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto delay-300">
            {""}I have worked with various companies, gaining valuable
            experience in software development and project management.
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div
              className="timeline-line absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full 
    bg-gradient-to-b from-green-500 via-green-400 to-green-300 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.7)]"
            >
              <div className="w-full bg-gradient-to-b from-green-500 via-green-400 to-green-300 rounded-full transition-all duration-2000 ease-out">
                <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-green-300 to-transparent"></div>
              </div>
            </div>

            {/* Timeline Items */}
            {experiences.map((exp, index) => {
              return (
                <div
                  key={index}
                  className={`experience-item relative flex items-center mb-20 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } transition-all duration-1000 ${
                    visisbleItems.includes(index)
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  data-index={index}
                  style={{
                    transitionDelay: `${index * 300 + 800}ms`,
                    transform: visisbleItems.includes(index)
                      ? "translateY(0)"
                      : index % 2 === 0
                      ? "translateX(-50px) translateY(20px)"
                      : "translateX(50px) translateY(20px)",
                  }}
                >
                  {/* Animated Timeline Dot */}
                  <div
                    className={`absolute left-6 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green-500 rounded-full border-4 border-slate-900 shadow-lg z-10 ${
                      visisbleItems.includes(index) ? "scale-110" : "scale-0"
                    }`}
                    style={{ transitionDelay: `${index * 300 + 1200}ms` }}
                  >
                    {/* Inner glowing layers */}
                    <div className="absolute inset-0 bg-green-500 rounded-full opacity-80"></div>
                    <div className="absolute inset-0 bg-green-400 rounded-full animate-ping"></div>
                  </div>
                  {/* content card */}
                  <div
                    className={`ml-20 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <div
                      className={`bg-slate-800 p-8 rounded-2xl shadow-2xl border border-slate-700 hover:border-green-500
                    transition-all duration-500 transform hover:scale-105 hover:shadow-red-500/20 group`}
                    >
                      <div
                        className="flex items-center gap-3 mb-6 group-hover:transform group-hover:scale-105 transition-all
                      duration-300"
                      >
                        <div
                          className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center group-hover:bg-green-500 transition-all duration-300
                        group-hover:rotate-6"
                        >
                          <Briefcase className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3
                            className="text-xl font-black text-white
                            group-hover:text-green-400 transition-colors
                            duration-300"
                          >
                            {exp.company}
                          </h3>
                          <div className="flex items-center gap-2 text-green-400 text-sm">
                            <Calendar className="w-4 h-4" />
                            {exp.duration}
                          </div>
                        </div>
                      </div>
                      {/* Position and Duration */}
                      <div className="mb-4">
                        <h4
                          className="text-lg font-semibold text-green-400 mb-2 group-hover:text-green-300
                         transition-colors duration-300"
                        >
                          {exp.position}
                        </h4>
                        <div className="flex items-center gap-2 text-green-400 text-sm">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>
                      {/* Description */}
                      <div
                        className="text-gray-300 mb-6 leading-relaxed group-hover:text-white transition-all
                      duration-300"
                      >
                        {exp.description}
                      </div>
                      {/* Achievements */}
                      <div className="mb-6">
                        <h5
                          className="font-semibold text-white mb-3 flex items-center gap-2 
                        group-hover:text-green-400 transition-all duration-300"
                        >
                          <Award className="w-4 h-4 text-green-400" />
                          Key Achievements
                        </h5>
                        <ul className="space-y-2">
                          {exp.achievements.map((achv, achindex) => {
                            return (
                              <li
                                key={achindex}
                                className={`text-gray-300 text-sm flex items-start gap-3 group-hover:text-white
                            transition-all duration-300`}
                                style={{
                                  animationDelay: `${
                                    index * 300 + achindex * 200 + 1500
                                  }ms`,
                                }}
                              >
                                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0 animate-pulse"></span>
                                {achv}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                      {/* Skills */}
                      <div className="flex flex-wrap gap-3">
                        {exp.skills.map((skill, skillIndex) => {
                          return (
                            <span
                              key={skillIndex}
                              className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full
                            transition-all duration-300 hover:bg-green-400"
                              style={{
                                animationDelay: `${
                                  index * 300 + skillIndex * 200 + 1800
                                }ms`,
                              }}
                            >
                              {skill}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
