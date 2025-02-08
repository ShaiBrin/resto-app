import React, { useState, useEffect } from "react";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import { Links } from "@/app/types";
import NavItem from "../navItems";

interface NavBarProps {
  links: Links;
  isOpen: boolean;
  toggle: () => void;
}

const Navbar: React.FC<NavBarProps> = ({ links, isOpen, toggle }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [showMiniNavbar, setShowMiniNavbar] = useState(true);
  const title = "JAGY's SMOKEHOUSE BBQ & GRILLADE";

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      setShowMiniNavbar(window.scrollY <= 50); // Mini navbar disappears after 50px scroll
    };

    // Initial check
    handleResize();

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Mini Navbar */}
      <div
          className={`fixed top-0 left-0 w-full bg-gray-900 text-black text-sm py-2 px-6 flex justify-center z-50 transition-all duration-500 ${
            showMiniNavbar ? "opacity-100 h-10" : "opacity-0 h-0 pointer-events-none"
          }`}
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.9)", // Remove this if you want `bg-gray-900`
          }}
        >
            {/* Nav Links (Desktop) */}
            <ul className="hidden md:flex w-full items-center">
              <div className="flex justify-end w-full gap-x-10">
                {links.minilinks
                  .filter((link) => link !== "/location")
                  .map((link) => (
                    <NavItem key={link} link={link} />
                  ))}
              </div>
            </ul>
        </div>

      {/* Main Navbar */}
      <nav
        className={`fixed w-full left-0 z-40 transition-all duration-500 ${
          showMiniNavbar ? "top-10" : "top-0"
        }`}
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          height: "80px", // Keeps the navbar height fixed
        }}
      >
        <div className="w-full h-full text-black font-sans">
          <div className="w-full px-6 h-full flex justify-between items-center">
            {/* Home Button */}
            <div className="ml-20 flex items-center gap-4">
              <Link href="/">
              <span className="text-xl font-bold text-gray-700">{title}</span>
              </Link>
            </div>

            {/* Nav Links (Desktop) */}
            <ul className="hidden md:flex w-full items-center">
              <div className="flex justify-center w-full gap-x-16">
                {links.mainlinks
                  .filter((link) => link !== "/location")
                  .map((link) => (
                    <NavItem key={link} link={link} />
                  ))}
              </div>
              <NavItem link="/location" />
            </ul>

            {/* Hamburger Menu (Mobile) */}
            {isMobile && (
              <MenuIcon
                className="md:hidden cursor-pointer text-gray-600"
                fontSize="large"
                onClick={toggle}
              />
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
