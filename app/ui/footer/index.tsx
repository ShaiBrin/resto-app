import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import Link from "next/link";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";

const Footer = () => {
  return (
    <div className="text-black py-1 px-6">
      {/* Top Row: Social Media on the left, Links on the right */}
      <div className="flex justify-between items-center">
        {/* Left Side - Social Media Links */}
        <div className="flex gap-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Facebook fontSize="large" className="hover:text-blue-500" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Twitter fontSize="large" className="hover:text-blue-400" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram fontSize="large" className="hover:text-pink-500" />
          </a>
        </div>

        {/* Right Side - Navigation Links */}
        <div className="flex gap-6 text-sm font-semibold">
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/privacy" className="hover:underline">
            Privacy
          </Link>
        </div>
      </div>

      {/* Bottom Row: Copyright Name */}
      <BottomNavigation sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
        <BottomNavigationAction
          label="Ishraq Shabab"
          icon={
            <div className="text-black font-semibold text-sm">
              © Ishraq Shabab
            </div>
          }
        />
      </BottomNavigation>
    </div>
  );
};

export default Footer;
