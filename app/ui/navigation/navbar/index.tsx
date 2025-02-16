import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
  const title = "JAGY's SMOKEHOUSE BBQ & GRILLADE";

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
      className="fixed w-full left-0 z-40 transition-all duration-150 top-0"
      style={{
        backgroundColor: "var(--background-color)",
        height: "80px",
      }}
    >
      <div className="w-full h-full text-black font-sans">
        <div className="w-full px-6 h-full flex justify-between items-center">
          {/* Logo, Title, and Phone Number */}
          <div className="ml-6 flex items-center gap-4">
            <Link href="/">
              <div className="flex items-center gap-3">
                <Image src="/logo_transparent.jpg" alt="Logo" width={80} height={80} />
                <span className="text-lg font-bold" style={{ color: "var(--primary-color)" }}>
                  {title}
                </span>
              </div>
            </Link>
          </div>

          {/* Nav Links (Desktop) */}
          <ul className="hidden md:flex w-full items-center">
            <div className="flex justify-center w-full gap-x-16">
              {links.mainlinks.map((link) => (
                <NavItem key={link} link={link} />
              ))}
            </div>
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