'use client';
import VideoContent from "./ui/video";
import NewsletterPopup from './ui/homePage/pop';
import { SITE_TITLE } from './constants';
import FeatureBox from "./ui/homePage/features";
import Link from "next/link";
import FourBoxComponent from "./ui/homePage/specialities";


export default function Home() {

  return (
    <div className="flex flex-col min-h-screen">
      {/* Newsletter Popup */}
      {/* <NewsletterPopup /> */}

      <div className="pt-20">
        <VideoContent src={"/homeVid.mp4"} description={SITE_TITLE} />
      </div>
      <div className="w-full pb-10" style={{ backgroundColor: 'rgba(23, 19, 19, 0.85)' }}>
      <div >
          <FourBoxComponent />
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row justify-center items-center p-10">
        <FeatureBox 
          image="/familyPlate.jpg" 
          title="For the Whole Family" 
          description="We use only the freshest and highest quality ingredients in our dishes." 
        />
        <FeatureBox 
          image="/bbq1.jpg" 
          title="Authentic Dishes" 
          description="Our recipes are passed down through generations, ensuring authentic flavors." 
        />
        <FeatureBox 
          image="/bbqsauce.jpg" 
          title="Home made Sauces" 
          description="Enjoy quick and reliable delivery, bringing our food straight to your door." 
        />
      </div>
      {/* Full-Width Line & Button */}
      <div className="w-full flex flex-col items-center mt-6">
        {/* Flex container to position the lines and button */}
        <div className="flex items-center w-full">
          {/* Left Line */}
          <hr className="flex-1 border-t-2 border-gray-300" />
          
          {/* Button */}
          <Link href={"/menu"}>
          <button className="px-6 py-3 bg-black text-white text-lg font-semibold rounded-md hover:bg-gray-800 transition mx-4">
            VIEW FULL MENU
          </button>
          </Link>
          
          {/* Right Line */}
          <hr className="flex-1 border-t-2 border-gray-300" />
        </div>
      </div>

    </div>
  );
}
