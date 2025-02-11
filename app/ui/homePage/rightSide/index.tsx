'use client';
import React from 'react';
import menuData from "@/data/menu.json";

type RightSideProps = {
  selectedCategory: string;
};

const RightSide = React.memo(({ selectedCategory }: RightSideProps) => {
  // Find the selected category in the menu data
  const selectedItems = menuData.categories.find(cat => cat.type === selectedCategory)?.items || [];

  return (
    <div className="w-3/4 px-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">{selectedCategory}</h2>
      <ul className="space-y-4">
        {selectedItems.length > 0 ? (
          selectedItems.map((item, index) => (
            <li key={index} className="p-4 bg-gray-100 rounded-md shadow-md">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-600">{item.description}</p>
              <p className="text-lg font-semibold text-gray-800 mt-2">Price: ${item.price}</p>
            </li>
          ))
        ) : (
          <p className="text-gray-500">No items available</p>
        )}
      </ul>
    </div>
  );
});

RightSide.displayName = 'RightSide';

export default RightSide;
