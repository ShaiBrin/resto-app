import React from 'react';

// Define the props interface for the Box component
interface BoxProps {
  title: string;
  description: string[];
}

// Individual Box component
const Box: React.FC<BoxProps> = ({ title, description }) => {
  return (
    <div className="rounded-lg p-5 text-center shadow-md min-h-[150px] flex flex-col justify-center flex-1">
      <h3 className="text-5xl font-bold text-customRed mb-10 font-ramaGothicM" style={{ transform: 'scaleY(2.0)' }}>{title}</h3>
      <div className="text-text">
        {description.map((item, index) => (
          <p key={index} className="text-2xl text-md my-1 font-lulo text-white ">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

// Main FourBoxComponent
const FourBoxComponent: React.FC = () => {
  // Define the data for each box with title and description
  const boxData = [
    { title: 'SLOW', description: ['SMOKED', 'HICKORY', '& PECAN'] },
    { title: 'SECRET', description: ['COMBO OF', 'DRY-RUB', 'SPICES'] },
    { title: '24 HR', description: ['ALL-DAY', 'MEAT', 'MARINADE'] },
    { title: 'No', description: ['No', 'SAUCE IN', 'THE PIT'] },
  ];

  return (
    <div className="mb-10 mt-20 flex flex-row w-full gap-8">
      {boxData.map((box, index) => (
        <React.Fragment key={index}>
          <Box title={box.title} description={box.description} />
          {/* Add a red horizontal line between boxes, except after the last one */}
          {index < boxData.length - 1 && (
            <div className="w-1 bg-white self-stretch mx-2" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default FourBoxComponent;