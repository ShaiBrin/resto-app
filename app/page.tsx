'use client';
import { useState } from 'react';
import VideoContent from "./ui/homePage/video";
import Footer from "./ui/footer";
import LeftSide from "./ui/homePage/leftSide";
import RightSide from "./ui/homePage/rightSide";
import menuData from "@/data/menu.json";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(menuData.categories[0]?.type || ""); // Default to the first category

  return (
    <div className="flex flex-col min-h-screen">
      <div className='heigh-5px'>
        <VideoContent /> 
      </div>

      {/* Left and Right Side Layout */}
      <div className="flex flex-row justify-start gap-x-8 pl-40 px-20 pt-20">
        <LeftSide setSelectedCategory={setSelectedCategory} />
        <RightSide selectedCategory={selectedCategory} />
      </div>
      <Footer />
    </div>
  );
}
