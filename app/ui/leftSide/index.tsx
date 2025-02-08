'use client';
import React from 'react';

const LeftSide = React.memo(() => {

    const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];


  return (
    <div className="left-side-container">
    

        <div className="border border-gray-300 rounded-lg p-4">
        <h2 className="text-xl font-bold mb-4">Menu Items</h2>
        <ul className="list-none space-y-2">
          {items.map((item, index) => (
            <li key={index} className="text-lg text-gray-800">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});

LeftSide.displayName = 'LeftSide';

export default LeftSide;
