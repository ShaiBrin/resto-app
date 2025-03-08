"use client";
import { useState, useEffect } from "react";
import FeatureBox from "..";

export default function Carousel() {
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
    }, 5000); // Slide every 5 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="w-full p-10" style={{ backgroundColor: "rgba(139, 69, 19, 0.3   )" }}>
      <div className="max-w-4xl mx-auto relative">
        {/* Carousel Container */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {features.map((feature, index) => (
              <div key={index} className="min-w-full flex justify-center">
                <FeatureBox
                  image={feature.image}
                  title={feature.title}
                  description={feature.description}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-4 space-x-2">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-black" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}