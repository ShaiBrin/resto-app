'use client';
import { useState } from 'react';

import menuData from "@/data/menu.json";
import VideoContent from '../ui/video';
import LeftSide from '../ui/menu/leftSide';
import RightSide from '../ui/menu/rightSide';
import { SITE_TITLE } from '../constants';


export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState(menuData.categories[0]?.type || ""); // Default to the first category

  return (
    <div className="flex flex-col min-h-screen">

      <VideoContent src={"/menuVid.mp4"} description={SITE_TITLE} />
      {/* Left and Right Side Layout */}
      <div className="flex flex-row justify-start gap-x-8 pl-40 px-20 pt-20">
        <LeftSide setSelectedCategory={setSelectedCategory} />
        <RightSide selectedCategory={selectedCategory} />
      </div>

    </div>
  );
}
