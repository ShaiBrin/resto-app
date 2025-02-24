'use client';
import { useState, useEffect } from 'react';
import menuData from "@/data/menu.json";
import VideoContent from '../ui/video';
import LeftSide from '../ui/menu/leftSide';
import RightSide from '../ui/menu/rightSide';
import { SITE_TITLE } from '../constants';

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState(menuData.categories[0]?.type || ""); // Default to the first category
  const [isMobile, setIsMobile] = useState(false);

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
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col min-h-screen">
        <VideoContent src={"/menuVid.mp4"} description={SITE_TITLE} />
        
        {/* Desktop Layout */}
        {!isMobile && (
          <div className="bg-[url('/bbq-bg-1.jpeg')] flex flex-row justify-start gap-x-8 pl-20 px-20 pt-20">
            <LeftSide setSelectedCategory={setSelectedCategory} />
            <RightSide selectedCategory={selectedCategory} />
          </div>
        )}

        {/* Mobile Layout */}
        {isMobile && (
          <div className="px-4 py-8 bg-[url('/bbq-bg-mobile.jpeg')]">
            {/* First Mobile Navbar (Categories 0-3) */}
            <div className="flex flex-nowrap gap-2 overflow-x-auto whitespace-nowrap pb-4">
              {menuData.categories.slice(0, 4).map((category, index) => (
                <button
                  key={index}
                  className={`text-lg font-semibold text-white px-3 py-1 rounded shrink-0 border-2 border-transparent bg-transparent ${
                    selectedCategory === category.type ? 'selected-category' : ''
                  }`}
                  onClick={() => setSelectedCategory(category.type)}
                >
                  {category.type}
                </button>
              ))}
            </div>

            {/* Second Mobile Navbar (Categories after index 3) */}
            <div className="flex flex-nowrap gap-2 overflow-x-auto whitespace-nowrap pb-4">
              {menuData.categories.slice(4).map((category, index) => (
                <button
                  key={index}
                  className={`text-base font-semibold text-white px-3 py-1 rounded shrink-0 border-2 border-transparent bg-transparent ${
                    selectedCategory === category.type ? 'selected-category' : ''
                  }`}
                  onClick={() => setSelectedCategory(category.type)}
                >
                  {category.type}
                </button>
              ))}
            </div>
            
            {/* Mobile Items */}
            <div className="px-4">
              <ul className="space-y-4">
                {menuData.categories
                  .find(cat => cat.type === selectedCategory)?.items
                  ?.map((item, index) => (
                    <li key={index} className="p-4">
                      <div className="flex justify-between items-center">
                        <h3 className="text-2xl font-bold text-primary px-2 py-1">
                          {item.name}
                        </h3>
                        <span className="flex-1 border-t border-dashed border-primary mx-2 self-center" />
                        <p className="text-m font-semibold text-white px-2 py-1 rounded">
                          ${item.price}
                        </p>
                      </div>
                      <p className="italic text-white px-2 py-1 text-xl">
                        {item.description}
                      </p>
                    </li>
                  )) || <p className="text-gray-500">No items available</p>}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}