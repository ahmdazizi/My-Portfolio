import React, { useEffect, useState } from "react";
import DataImage from "../data";

function Navbar() {
  const [active, setActive] = useState(false);
  const [activeMenu, setActiveMenu] = useState("beranda");

  useEffect(() => {
    const handleScroll = () => {
      // aktifkan background navbar
      setActive(window.scrollY > 50);

      // cek posisi section
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

  return (
    <div
      className={`navbar py-3 mb-5 md:px-6 flex items-center justify-between md:sticky md:top-0 md:z-40 w-full transition-all duration-300 ${
        active ? "bg-white" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <div className="logo flex items-center">
        <img src={DataImage.icon} alt="ikon" className="w-10 h-6" />
        <h1 className="text-3xl font-bold hidden md:block md:text-blue-950">
          MyPortfolio
        </h1>
      </div>

      {/* Menu */}
      <ul
        className={`menu flex items-center sm:gap-10 gap-4 md:static fixed left-1/2 transform -translate-x-1/2 md:translate-x-0 md:opacity-100 p-4 rounded-br-2xl rounded-bl-2xl transition-all md:transition-none z-40
          ${
            active
              ? "top-0 opacity-100 bg-white/30 backdrop-blur-md"
              : "-top-10 opacity-0"
          }
          md:bg-transparent md:backdrop-blur-none`}
      >
        {["beranda", "tentang", "proyek", "kontak"].map((menu) => (
          <li key={menu}>
            <a
              href={`#${menu}`}
              className={`sm:text-lg text-base font-medium transition-colors ${
                activeMenu === menu
                  ? "p-2 bg-blue-950 text-white rounded-md"
                  : "text-blue-950 hover:text-blue-900"
              }`}
            >
              {menu.charAt(0).toUpperCase() + menu.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
