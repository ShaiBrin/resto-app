import React from 'react';

// Define the props interface for the Box component
interface BoxProps {
  title: string;
  description: string[];
}

// Individual Box component
const Box: React.FC<BoxProps> = ({ title, description }) => {
  return (
    <div className="rounded-lg p-5 text-center shadow-md min-h-[150px] flex flex-col justify-center flex-1 max-sm:aspect-square">
      <h3
        className="text-5xl max-sm:text-3xl font-bold mb-3 font-ramaGothicM"
        style={{ transform: 'scaleY(1.5)' }}
      >
        {title}
      </h3>
      <div className="text-text">
        {description.map((item, index) => (
          <p key={index} className="text-2xl max-sm:text-lg my-1 font-lulo text-white">
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
    <div className="mb-10 mt-20 flex flex-row w-full gap-8 max-sm:grid max-sm:grid-cols-2 max-sm:gap-4 max-sm:relative">
      {boxData.map((box, index) => (
        <React.Fragment key={index}>
          <Box title={box.title} description={box.description} />
          {/* Desktop vertical lines */}
          {index < boxData.length - 1 && (
            <div className="w-1 bg-white self-stretch mx-2 max-sm:hidden" />
          )}
        </React.Fragment>
      ))}
      {/* Mobile vertical line (between columns) */}
      <div className="hidden max-sm:block w-1 bg-white absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2" />
      {/* Mobile horizontal line (between rows) */}
      <div className="hidden max-sm:block h-1 bg-white absolute top-1/2 left-10 right-10 transform -translate-y-1/2" />
    </div>
  );
};

export default FourBoxComponent;