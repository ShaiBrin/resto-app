import React from "react";

const VideoContent = () => {
  return (
    <div className="relative w-full h-screen">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videoBBQ.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/30">
        <h1 className="text-white text-4xl font-bold">Smoke is our sauce</h1>
      </div>
    </div>
  );
};

export default VideoContent;
