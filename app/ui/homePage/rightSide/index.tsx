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
      <ul className="space-y-4">
        {selectedItems.length > 0 ? (
          selectedItems.map((item, index) => (
            <li key={index} className="p-4">
              <h3 className="text-lg pb-2 font-semibold bg-yellow-400 text-black px-2 py-1 underline">
                {item.name}
              </h3>
              <p className="bg-yellow-400 text-black px-2 py-1">
                {item.description}
              </p>
              <p className="text-lg font-semibold bg-yellow-400 text-black px-2 py-1 rounded mt-2">
                Price: ${item.price}
              </p>
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
