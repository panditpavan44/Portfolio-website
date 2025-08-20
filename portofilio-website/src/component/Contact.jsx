import React, { useEffect } from "react";
import {
  MailIcon,
  PhoneCall,
  LocateIcon,
  Github,
  Twitter,
  Facebook,
  Linkedin,
  Send,
  Icon,
} from "lucide-react";

function Contact() {
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
    const element = document.getElementById("contact");
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return (
    <section
      id="contact"
      className="py-24 bg-slate-800 relative overflow-hidden"
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

      <div className="conatiner mx-auto px-6 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-green-400 font-semibold text-lg mb-4">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            let's connect and build something great together
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Whether you have a project in mind, need advice, or just want to say
            hello, feel free to reach out. I'm always open to new opportunities
            and collaborations.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-16">
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Contact Information
            </h3>
            <p className="text-gray-300 leading-relaxed mb-8">
              I'am always excited to hear from you! Whether you have a question,
              want to discuss a project, or just want to say hi, feel free to
              reach out.
            </p>
            <div className="space-y-4">
              {[
                {
                  icon: MailIcon,
                  title: "Email",
                  info: "amitparihar279@gmail.com",
                },
                {
                  icon: PhoneCall,
                  title: "Phone",
                  info: "+91 1234567890",
                },
                {
                  icon: LocateIcon,
                  title: "Location",
                  info: "India, Delhi",
                },
              ].map((contact, index) => {
                return (
                  <div
                    key={index}
                    className={`flex items-center gap-4 p-4 bg-slate-900 rounded-lg hover:bg-slate-700
                    transition-all duration-300 border border-slate-700 hover:border-green-500 group cursor-pointter transform
                    hover:scale-105 ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                    style={{ animationDelay: `${index * 200 + 300}ms` }}
                  >
                    <div
                      className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center group-hover:bg-green-500 
                      transition-all duration-300 group-hover:rotate-6"
                    >
                      <contact.icon className="text-white w-6 h-6" />
                    </div>
                    <p className="font-semibold text-white group-hover:text-gray-400 transition-all duration-300">
                      {contact.title}
                    </p>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-all duration-300">
                      {contact.info}
                    </p>
                  </div>
                );
              })}
            </div>
            <div
              className={`pt-8 transition-all duration-1000 delay-900 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h4 className="text-lg font-semibold text-white mb-4">
                Follow Me
              </h4>
              <div className="flex gap-4">
                {[Github, Twitter, Linkedin, Facebook].map((Icon, index) => {
                  return (
                    <a
                      key={index}
                      className={`w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center
        hover:bg-green-600 hover:text-white transition-all duration-300 group border border-slate-700
        hover:border-green-500 hover:scale-110 hover:rotate-6`}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-slate-900 rounded-2xl border mb-6 border-slate-700 hover:border-green-500/50 transition-all duration-300 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-8 pt-8 text-center">
                Send a Message
              </h3>

              <form className="grid md:grid-cols-2 gap-6 px-8 pb-8">
                {/* Full Name */}
                <div className="group">
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-300 mb-2 group-hover:text-green-400 transition-all duration-300"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3
            text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
            transition-all duration-300 hover:border-green-500/50"
                    placeholder="Your Name"
                    required
                  />
                </div>

                {/* Email */}
                <div className="group">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-300 mb-2 group-hover:text-green-400 transition-all duration-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3
            text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
            transition-all duration-300 hover:border-green-500/50"
                    placeholder="Your Email"
                    required
                  />
                </div>

                {/* Subject */}
                <div className="group md:col-span-2">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-gray-300 mb-2 group-hover:text-green-400 transition-all duration-300"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3
            text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
            transition-all duration-300 hover:border-green-500/50"
                    placeholder="Project discussion"
                    required
                  />
                </div>

                {/* Message */}
                <div className="group md:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-300 mb-2 group-hover:text-green-400 transition-all duration-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3
            text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
            transition-all duration-300 hover:border-green-500/50 resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                {/* Button */}
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="mt-4 w-full bg-green-600 text-white py-4 rounded-lg hover:bg-green-700 transition-all
            duration-300 font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-green-700/40 hover:scale-105 group"
                  >
                    Send Message
                    <Send className="w-5 h-5 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
