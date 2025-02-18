import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Facebook, X, Instagram } from "@mui/icons-material";
import Link from "next/link";
import links from "@/data/links.json";

const getSocialIcon = (url: string) => {
  if (url.includes("facebook")) return <Facebook fontSize="large" className="hover:text-blue-500" />;
  if (url.includes("instagram")) return <Instagram fontSize="large" className="hover:text-pink-500" />;
  if (url.includes("twitter")) return <X fontSize="large" className="hover:text-black" />;
  return null; // No icon if no match
};

const Footer = () => {
  return (
    <div className="text-black py-1 px-6">
      {/* Top Row: Social Media on the left, Links on the right */}
      <div className="flex justify-between items-center">
        
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
          {links.footerLinks.map((footerLink, index) => (
            footerLink === "/signup" ? (
              <div className="pb-2">
              <Link 
                key={footerLink} // Unique key for each element
                href={footerLink} 
                className="border-4 border-black px-3 py-1 rounded font-bold hover:bg-yellow-400 hover:text-black transition duration-300"
              >
                Email & Signup
              </Link>
              </div>
            ) : (
              <Link 
                key={footerLink || index} // Ensure a unique key
                href={footerLink} 
                className="hover:underline"
              >
                {footerLink.replace("/", "").charAt(0).toUpperCase() + footerLink.slice(2)}
              </Link>
            )
          ))}
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
