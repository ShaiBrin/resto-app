import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Facebook, X, Instagram } from "@mui/icons-material";
import Link from "next/link";
import links from "@/data/links.json";
import Image from "next/image";

const getSocialIcon = (url: string) => {
  if (url.includes("facebook")) return <Facebook fontSize="large" className="text-[var(--primary-color)] hover:text-blue-500" />;
  if (url.includes("instagram")) return <Instagram fontSize="large" className="text-[var(--primary-color)] hover:text-pink-500" />;
  if (url.includes("twitter")) return <X fontSize="large" className="text-[var(--primary-color)] hover:text-black" />;
  return null; // No icon if no match
};

const Footer = () => {
  return (
    <div className="text-[var(--primary-color)] py-1 px-6">
      {/* Desktop Layout: Socials on Left, Links on Right */}
      <div className="hidden md:flex justify-between items-center">
        {/* Left Side - Social Media Links */}
        <div className="flex gap-4">
          {links.socialLinks.map((socialLink) => (
            <a key={socialLink} href={socialLink} target="_blank" rel="noopener noreferrer">
              {getSocialIcon(socialLink)}
            </a>
          ))}
        </div>

        {/* Right Side - Footer Links */}
        <div className="flex gap-6 text-sm font-semibold">
          {links.footerLinks.map((footerLink) => (
            footerLink === "/signup" ? (
              <div key={footerLink} className="pb-2">
                <Link
                  href={footerLink}
                  className="border-4 border-[var(--text-color)] px-3 py-1 rounded font-bold hover:bg-yellow-400 hover:text-[var(--text-color)] transition duration-300"
                >
                  Email & Signup
                </Link>
              </div>
            ) : (
              <Link
                key={footerLink}
                href={footerLink}
                className="hover:underline"
              >
                {footerLink.replace("/", "").charAt(0).toUpperCase() + footerLink.slice(2)}
              </Link>
            )
          ))}
        </div>
      </div>

      {/* Mobile Layout: Two BottomNavigation Bars */}
      <div className="md:hidden">
        {/* Logo Above Social Links */}
        <div className="flex justify-center mb-1">
          <Link href="/">
            <div className="flex items-center transition-all duration-300">
              <Image
                src="/logo_transparent.jpg"
                alt="Logo"
                width={120}
                height={120}
                className="transition-all duration-300"
              />
            </div>
          </Link>
        </div>

        {/* Navbar 1: Social Links */}
        <BottomNavigation
          sx={{ backgroundColor: "transparent", boxShadow: "none" }}
          className="flex justify-center"
        >
          {links.socialLinks.map((socialLink) => (
            <BottomNavigationAction
              key={socialLink}
              icon={getSocialIcon(socialLink)}
              component="a"
              href={socialLink}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                "& .MuiSvgIcon-root": {
                  color: "var(--primary-color)", // Apply to icons
                },
              }}
            />
          ))}
        </BottomNavigation>
      </div>


      {/* Copyright (Both Screens) */}
      <BottomNavigation sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
        <BottomNavigationAction
          label="Ishraq Shabab"
          icon={
            <div className="text-[var(--primary-color)] font-semibold text-sm">
              © Ishraq Shabab
            </div>
          }
        />
      </BottomNavigation>
    </div>
  );
};

export default Footer;