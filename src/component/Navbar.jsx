import React, { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

function Navbar({loading}) {
  const [active, setActive] = useState(false);
  const [activeMenu, setActiveMenu] = useState("beranda");
  const [openSidebar, setOpenSidebar] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 50);

      const sections = ["beranda", "tentang", "proyek", "kontak"];
      let current = "beranda";

      sections.forEach((id) => {
        const section = document.getElementById(id);

        if (section) {
          const sectionTop = section.offsetTop - 120;

          if (window.scrollY >= sectionTop) {
            current = id;
          }
        }
      });

      setActiveMenu(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menus = ["beranda", "tentang", "proyek", "kontak"];

  return (
    <>
     
      <div
        className={`navbar py-3 px-5 flex items-center justify-between
        md:sticky md:top-5 md:z-40
        w-[95%] md:w-[97%] mx-auto
        mt-2 md:mt-0
        transition-all duration-300 rounded-3xl 
        shadow-md
        dark:shadow-white
        ${
          active
            ? "bg-white/80 dark:bg-black backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
       
        <div className="logo flex items-center gap-2">
          <i className="ri-code-s-slash-line text-[#121220] text-2xl md:text-4xl dark:text-white"></i>

          <h1 className="text-lg md:text-2xl font-bold transition-all duration-300 text-[#121220] dark:text-white">
            MyPortfolio
          </h1>
        </div>

       
        <ul className="hidden md:flex items-center gap-10">
          {menus.map((menu) => (
            <li key={menu}>
              <a
                href={`#${menu}`}
                className={`text-lg font-medium transition-all duration-300
                ${
                  activeMenu === menu
                    ? "border-b-2 border-[#121220] dark:border-white text-[#121220] dark:text-white"
                    : "text-[#121220] dark:text-white hover:opacity-70"
                }`}
              >
                {menu.charAt(0).toUpperCase() + menu.slice(1)}
              </a>
            </li>
          ))}

          
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full border border-gray-300 bg-gray-200 dark:bg-white dark:border-gray-600 transition-all duration-300 hover:scale-110"
          >
            {darkMode ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-[#121220]" />
            )}
          </button>
        </ul>

        
        <div className="flex items-center gap-3 md:hidden">
        
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full border border-gray-300 bg-gray-200 dark:bg-white dark:border-gray-600 transition-all"
          >
            {darkMode ? (
              <Sun size={18} className="text-yellow-400" />
            ) : (
              <Moon size={18} className="text-[#121220]" />
            )}
          </button>

          <button
            onClick={() => setOpenSidebar(true)}
            className="text-[#121220] dark:text-white"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      <div
        onClick={() => setOpenSidebar(false)}
        className={`fixed inset-0 bg-black backdrop-blur-sm z-40 transition-all duration-300
        ${
          openSidebar
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      ></div>

      <div
        className={`fixed top-0 right-0 h-full w-[260px]
        bg-white dark:bg-black 
        z-50 shadow-2xl
        transition-all duration-300
        p-6
        ${
          openSidebar ? "translate-x-0 dark:shadow-white" : "translate-x-full"
        }`}
      >
        
        <div className="flex justify-end mb-10">
          <button
            onClick={() => setOpenSidebar(false)}
            className="text-[#121220] dark:text-white"
          >
            <X size={28} />
          </button>
        </div>

      
        <ul className="flex flex-col gap-8">
          {menus.map((menu) => (
            <li key={menu}>
              <a
                href={`#${menu}`}
                onClick={() => setOpenSidebar(false)}
                className={`text-lg font-medium transition-all
                ${
                  activeMenu === menu
                    ? "text-gray-600 dark:text-gray-400"
                    : "text-[#121220] dark:text-white"
                }`}
              >
                {menu.charAt(0).toUpperCase() + menu.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Navbar;