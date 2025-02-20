import Image from "next/image";

interface FeatureBoxProps {
  image: string;
  title: string;
  description: string;
}

const FeatureBox: React.FC<FeatureBoxProps> = ({ image, title, description }) => {
  return (
    <div className="w-full md:w-1/3 p-4 flex flex-col items-center text-center border-2 border-black rounded-lg shadow-md">
      <Image src={image} alt={title} width={250} height={250} className="rounded-t-lg" />
      <h2 className="mt-4 text-xl font-bold">{title}</h2>
      <p className="mt-2 text-yellow-600">{description}</p>
    </div>
  );
};

export default FeatureBox;
