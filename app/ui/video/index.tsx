const VideoContent = ({ src, description }: { src: string, description: string }) => {
  return (
    <div className="relative w-full h-[40vh] md:h-[60vh]"> 
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/30">
        <h1 className="text-white text-4xl font-bold text-center">{description}</h1>
      </div>
    </div>
  );
};

export default VideoContent;
