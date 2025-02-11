"use client";
import { useState } from "react";
import links from "../../../data/links.json"
import {  Links } from "@/app/types/";
import Navbar from "./navbar";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar links={links as Links} isOpen={isOpen} toggle={toggle} />
    </>
  );
};

export default Navigation;
