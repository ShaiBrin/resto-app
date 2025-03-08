"use client";
import VideoContent from "./ui/video";
import NewsletterPopup from "./ui/homePage/pop";
import { SITE_TITLE } from "./constants";
import Link from "next/link";
import FourBoxComponent from "./ui/homePage/specialities";
import { useState, useEffect } from "react";
import Carousel from "./ui/homePage/features/carousel";

export default function Home() {
  // State to track the current slide index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Feature data
  const features = [
    {
      image: "/familyPlate.jpg",
      title: "FOR THE WHOLE FAMILY",
      description: "We use only the freshest and highest quality ingredients in our dishes.",
    },
    {
      image: "/bbq1.jpg",
      title: "AUTHENTIC DISHES",
      description: "Our recipes are passed down through generations, ensuring authentic flavors.",
    },
    {
      image: "/bbqsauce.jpg",
      title: "HOME MADE SAUCES",
      description: "Enjoy quick and reliable delivery, bringing our food straight to your door.",
    },
  ];

  // Navigation functions
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === features.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Slide every 5 seconds (adjustable)

    // Cleanup interval on component unmount or when currentIndex changes
    return () => clearInterval(interval);
  }, [currentIndex]); // Re-run effect when currentIndex changes

  return (
    <div className="flex flex-col min-h-screen">
      {/* Newsletter Popup */}
      {/* <NewsletterPopup /> */}

      <div className="pt-20">
        <VideoContent src={"/homeVid.mp4"} description={SITE_TITLE} />
      </div>
      <div className="w-full pb-4" style={{ backgroundColor: "rgba(23, 19, 19, 0.85)" }}>
        <div>
          <FourBoxComponent />
        </div>
      </div>

      {/* Carousel */}
      <Carousel/>

      {/* Full-Width Line & Button */}
      <div className="w-full flex flex-col items-center mt-6">
        <div className="flex items-center w-full">
          <hr className="flex-1 border-t-2 border-gray-300" />
          <Link href={"/menu"}>
            <button className="px-6 py-3 bg-black text-white text-lg font-semibold rounded-md hover:bg-gray-800 transition mx-4">
              VIEW FULL MENU
            </button>
          </Link>
          <hr className="flex-1 border-t-2 border-gray-300" />
        </div>
      </div>
    </div>
  );
}