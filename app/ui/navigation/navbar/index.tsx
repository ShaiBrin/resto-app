import React, { useState, useEffect } from "react";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { Links } from "@/app/types";
import NavItem from "../navItems";

interface NavBarProps {
  links: Links;
  isOpen: boolean;
  toggle: () => void;
}

const Navbar: React.FC<NavBarProps> = ({ links, isOpen, toggle }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-20 transition-opacity duration-300 ${
        isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.9)",
      }}
    >
      <div className="w-full h-20 text-black font-sans">
        <div className="w-full px-6 h-full flex justify-between items-center">
          {/* Home Button */}
          <Link href="/">
            <RestaurantIcon className="text-gray-500 hover:text-black transition-colors duration-300 text-3xl" />
          </Link>

          {/* Nav Links (Desktop) */}
          <ul className="hidden md:flex w-full items-center">
            <div className="flex justify-center w-full gap-x-16">
                {links.links
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
  );
};

export default Navbar;
