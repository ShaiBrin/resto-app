import React, { useState, useEffect } from "react";
import WhatshotIcon from '@mui/icons-material/Whatshot';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from "next/link";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid2';
import { Links } from "@/app/types";
import NavItem from "../navItems";

interface NavBarProps {
  links: Links;
  isOpen: boolean;
  toggle: () => void;
}

const Navbar: React.FC<NavBarProps> = ({ links, isOpen, toggle }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const title = "JAGY'S SMOKEHOUSE";

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full left-0 z-40 transition-all duration-150 top-0 ${isScrolled ? "shadow-md bg-white" : ""}`}
      style={{
        backgroundColor: "var(--background-color)",
        height: "80px",
      }}
    >
      <div className="w-full h-full text-black font-sans">
        <div className="h-full flex items-center justify-between gap-4">
          {/* Logo and Title */}
          <div className="flex items-center gap-4">
            <Link href="/">
              <div className="flex items-center gap-3 transition-all duration-300">
                <Image
                  src="/logo_transparent.jpg"
                  alt="Logo"
                  width={isScrolled ? 80 : 120}
                  height={isScrolled ? 80 : 120}
                  className="transition-all duration-300"
                />
                <span
                  className="text-lg font-bold transition-all duration-300"
                  style={{
                    color: "var(--primary-color)",
                    fontSize: isScrolled ? "1rem" : "1.2rem",
                  }}
                >
                  {title}
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <ul className="pt-2 hidden md:flex w-full items-center">
            <div className="flex justify-center w-full gap-x-16">
              {links.mainlinks.map((link) => {
                if (link === "/specials") {
                  return (
                    <li key={link} className="text-red-500 text-lg font-extrabold">
                      <Link href={link}>
                        <div className="flex items-center gap-x-2">
                          <WhatshotIcon style={{ color: "red", fontSize: "2rem" }} />
                          <p className="cursor-pointer text-red-500 text-xl font-extrabold">Specials</p>
                        </div>
                      </Link>
                    </li>
                  );
                } else if (link === "/order") {
                  return (
                    <li key={link}>
                      <Link href={link}>
                        <button className="bg-red-500 text-white px-4 py-2 rounded-lg flex items-center gap-x-2 hover:bg-red-600 transition duration-300">
                          <ShoppingCartIcon style={{ fontSize: "1.5rem" }} />
                          ORDER
                        </button>
                      </Link>
                    </li>
                  );
                } else {
                  return <NavItem key={link} link={link} />;
                }
              })}
            </div>
          </ul>

          {/* Mobile Toggle Button */}
          {isMobile && (
            <MenuIcon
              className="md:hidden cursor-pointer text-gray-600 pl-4"
              fontSize="large"
              style={{ fontSize: "2.5rem" }}
              onClick={toggle}
            />
          )}
        </div>

        {/* Mobile Sidebar */}
        {isMobile && (
          <div
            className="fixed top-0 right-0 w-3/4 h-full bg-black z-50 transition-transform duration-300 flex flex-col items-center pt-20"
            style={{
              transform: `${isOpen ? 'translateX(0)' : 'translateX(100%)'}`,
            }}
          >
            <CloseIcon
              className="absolute top-5 left-5 cursor-pointer text-white text-[40px]"
              onClick={toggle}
            />
            <div className="w-full px-4">
              <Grid container direction="column" rowSpacing={6} alignItems="center">
                {links.mainlinks.map((link, index) => (
                  <Grid key={index}>
                    {link === "/specials" ? (
                      <Link href={link} onClick={toggle}>
                        <div className="flex flex-col items-center gap-y-2 text-red-500 text-lg font-extrabold">
                          <WhatshotIcon style={{ color: "red", fontSize: "2rem" }} />
                          <p className="cursor-pointer">Specials</p>
                        </div>
                      </Link>
                    ) : link === "/order" ? (
                      <Link href={link} onClick={toggle}>
                        <button className="bg-red-500 text-white px-4 py-2 rounded-lg flex flex-col items-center gap-y-2 hover:bg-red-600 transition duration-300">
                          <ShoppingCartIcon style={{ fontSize: "1.5rem" }} />
                          <span>ORDER</span>
                        </button>
                      </Link>
                    ) : (
                      <NavItem link={link} toggle={toggle} />
                    )}
                  </Grid>
                ))}
              </Grid>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;