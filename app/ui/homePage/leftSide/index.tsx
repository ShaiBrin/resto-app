'use client';
import React from 'react';
import menuData from "@/data/menu.json";

type LeftSideProps = {
  setSelectedCategory: (category: string) => void;
};

const LeftSide: React.FC<LeftSideProps> = React.memo(({ setSelectedCategory }) => {
  return (
    <div className="w-1/4 border-r border-gray-300 pr-6">
    <div>
      {menuData.categories.map((category, index) => (
        <div key={index} className="mb-5 group relative overflow-hidden">
          <h3 
            className="text-lg font-semibold cursor-pointer transition duration-200 relative 
                       px-2 py-1 z-10 group-hover:text-black"
            onClick={() => setSelectedCategory(category.type)}
          >
            {category.type}
          </h3>
          {/* Background transition effect */}
          <span 
            className="absolute left-0 bottom-0 w-0 h-full bg-yellow-400 transition-all duration-300 
                       group-hover:w-full"
          />
          {index === 3 && <hr className="my-4 border-t border-gray-300" />} 
        </div>
      ))}
    </div>
  </div>
  
  );
});

export default LeftSide;
