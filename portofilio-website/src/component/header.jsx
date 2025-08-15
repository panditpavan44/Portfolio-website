import React, { useEffect } from "react";
import { FiMenu } from "react-icons/fi"; // Menu icon
import { X } from "lucide-react"; // Close icon

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
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 bg-slate-900 ${isScrolled} ? "bg-slate-950
    backdrop-blur-lg shadow-lg border-b border-slate-800" : "bg-transparent"}`}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        
      

     {/* Center Logo */} <div className="flex-1 text-left ml-4 sm:ml-8 md:ml-12 lg:ml-20 xl:ml-24 2xl:ml-32 text-2xl font-bold">
  <span className="text-green-400 
                   text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
    Amit
  </span>
  <span className="text-white 
                   text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
    Parihar
  </span>
  <span className="text-green-400 
                   mr-4 sm:mr-6 md:mr-8 lg:mr-10 xl:mr-12 2xl:mr-14 
                   text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
    .
  </span> 
</div>

      {/* Left Side (Desktop Menus) */}
    <nav className="hidden md:flex space-x-4 sm:space-x-5 md:space-x-6 lg:space-x-7 mr-4 sm:mr-6 md:mr-8 lg:mr-10 ">
  {navItems.map((item, index) => {
    return (
      <button
        className="text-gray-300 hover:text-green-400
                   text-sm sm:text-base md:text-base lg:text-lg
                   transition-all duration-300 font-medium relative group"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        {item.name}
        <span
          className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 
                     transition-all duration-300 group-hover:w-full"
        ></span>
      </button>
    );
  })}
</nav>
        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Desktop CV Button */}
<button
  className={`hidden md:flex 
              md:px-6 md:py-2 md:text-sm   /* Tablet (768px) fix */
              lg:px-5 lg:py-2.5 lg:text-sm /* Laptop */
              mr-6 items-center gap-2 bg-green-600 text-white 
              rounded-lg hover:bg-green-700 transition-all duration-300 
              font-medium shadow-lg hover:shadow-xl hover:scale-105 justify-center 
              whitespace-nowrap text-sm sm:text-base xl:text-lg 
              w-auto ${isMenuOpen ? 'hidden' : ''}`}
>
  Download CV Now
</button>








          {/* Mobile Menu Button */}
          <button className="text-white md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
     {isMenuOpen && ( <nav className="md:hidden mt-4 pb-4 border-t border-slate-800 pt-4 bg-slate-800 rounded-lg shadow-lg">
        {/* Yaha mobile navigation links */}
        {navItems.map((item) => {
          return <button className="block w-full text-left py-3 px-4 text-gray-300 hover:text-green-400
          hover:bg-slate-700 transition-all duration-300 rounded-lg">{item.name}</button>
        })}
        <button className="mt-4 w-full flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-2.5 rounded-lg hover:bg-green-700 transition-all duration-300">
          Download CV Now
        </button>
      </nav>
     )}
    </header>
  );
}

export default Header;
