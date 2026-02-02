export default function VideoHero() {
  const videoSrc = "/video/DEMO.mp4";

  return (
    <div className="flex justify-center py-10">
      <div className="w-[80%]  aspect-video relative rounded-2xl overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
    </div>
  );
}
