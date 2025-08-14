import React, { useEffect } from "react";
import { FiMenu } from "react-icons/fi"; // Menu icon

function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsMenuOpen(false); // Close the menu after clicking a link
    };

    const navItems = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Experience", href: "#experience" },
        { name: "Contact", href: "#contact" },
    ];
  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-500 bg-slate-900">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Left Side (Desktop Menus) */}
        <nav className="hidden md:flex space-x-7">
          {/* Yaha navigation links add karenge */}
        </nav>

        {/* Center Logo */}
        <div className="flex-1 text-left ml-20  text-2xl font-bold">
          <span className="text-green-400">Amit</span>
          <span className="text-white">Parihar</span>
          <span className="text-green-400">.</span>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Desktop CV Button */}
          <button className="hidden md:flex mr-20 items-center gap-2 bg-green-600 text-white px-6 py-2.5 rounded-lg hover:bg-green-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105">
            Download CV Now
          </button>

          {/* Mobile Menu Button */}
          <button className="text-white md:hidden">
            <FiMenu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav className="md:hidden mt-4 pb-4 border-t border-slate-800 pt-4 bg-slate-800 rounded-lg shadow-lg">
        {/* Yaha mobile navigation links */}
        <button className="mt-4 w-full flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-2.5 rounded-lg hover:bg-green-700 transition-all duration-300">
          Download CV Now
        </button>
      </nav>
    </header>
  );
}

export default Header;
