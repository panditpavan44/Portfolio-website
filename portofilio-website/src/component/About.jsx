import React, { useEffect } from "react";
import amit8 from "../assets/amit8.jpeg";

function About() {
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
    const element = document.getElementById("about");
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
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
      <div className="container mx-auto px-6 py-4">
        <div className="container px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
            {/* Left Image */}
            <div
              className={`relative w-full md:w-1/2 flex justify-center md:justify-start `}
            >
              <div className={`relative group w-full max-w-md `}>
                <div
                  className={`relative border-4 border-green-500 rounded-2xl p-2 group-hover:border-green-400 transition-all duration-300 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-10"
                  }`}
                >
                  <img
                    src={amit8}
                    alt="photo"
                    className="w-full rounded-xl transition-all duration-500 group-hover:scale-105 h-160 object-cover"
                  />
                  <div className="absolute inset-2 bg-gradient-to-tr from-green-600/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                  {/* Floating Decoration */}
                  <div className="absolute -top-10 -right-12 w-20 h-20 bg-red-600 rounded-2xl opacity-20"></div>
                  <div className="absolute -bottom-8 -left-7 w-16 h-16 bg-blue-600 rounded-full opacity-20"></div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div
              className={`w-full md:w-1/2 space-y-8 transition-all duration-1000 delay-300 text-center md:text-left ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="space-y-4">
                <p className="text-green-400 font-semibold text-lg">About Us</p>
                <h2 className="text-4xl md:text-5xl text-white font-bold">
                  Why hire me for your <br />
                  <span>next project?</span>
                </h2>
                <p className="text-green-400 font-semibold delay-200">
                  UI /UX Designer & Full Stack Developer
                </p>
              </div>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p
                  className={`text-lg transition-all duration-100 delay-500 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-10"
                  }`}
                >
                  I’m a passionate developer who turns ideas into clean,
                  functional, and scalable code. I love building digital
                  solutions that solve real-world problems and crafting
                  beautiful, efficient web experiences.
                </p>
                <p
                  className={`transition-all duration-100 delay-500 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-10"
                  }`}
                >
                  With a strong foundation in both front-end and back-end
                  development, I bring a holistic approach to web development.
                </p>
              </div>
              <div
                className={`grid grid-cols-2 gap-8 py-6 transition-all duration-1000 delay-500 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10"
                }`}
              >
                <div className="group">
                  <p className="text-white font-semibold group-hover:text-green-400 transition-all duration-300">
                    Name
                  </p>
                  <p className="text-gray-300 ">Amit Parihar</p>
                </div>
                <div className="group">
                  <p className="text-white font-semibold group-hover:text-green-400 transition-all duration-300">
                    Location
                  </p>
                  <p className="text-gray-300">Gwalior</p>
                </div>
                <div className="group">
                  <p className="text-white font-semibold group-hover:text-green-400 transition-all duration-300">
                    Birthday :
                  </p>
                  <p className="text-gray-300">25 June 2006</p>
                </div>
                <div className="group">
                  <p className="text-white font-semibold group-hover:text-green-400 transition-all duration-300">
                    Email:
                  </p>
                  <p className="text-gray-300">amitparihar279@gmail.com</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 transition-all duration-1000 delay-1100">
                <button
                  className="bg-green-600 text-white px-8 py-3 rounded-lg  hover:bg-green-700 transition-all duration-300
                font-medium shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Download
                </button>
                <button
                  className="border-2 border-slate-600 text-white px-8 py-3 rounded-lg hover:border-green-600 hover:text-green-400
                transition-all duration-300 font-medium hover:scale-105"
                >
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
