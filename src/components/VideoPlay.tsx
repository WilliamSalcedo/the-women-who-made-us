export default function VideoHero() {
  const YT_ID = 'NUz4d-bd2hs'
  const src = `https://www.youtube.com/embed/${YT_ID}?autoplay=1&mute=1&loop=1&playlist=${YT_ID}&controls=0&modestbranding=1&rel=0&playsinline=1`
  return (
      <div className="flex justify-center py-10">
      <div className="w-3xl lg:w-7xl aspect-video relative rounded-2xl overflow-hidden">
        <iframe
          className="absolute inset-0 w-full h-full"
          src={src}
          title="YouTube video"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  )
}
