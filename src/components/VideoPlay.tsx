export default function VideoHero() {
  const videoSrc = '/video/websiteVideo1.mp4'

  return (
    <div className="flex justify-center py-10">
      <div className="relative aspect-video w-[80%] overflow-hidden rounded-2xl">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={videoSrc}
          autoPlay
          muted
          
          playsInline
        />
      </div>
    </div>
  )
}
