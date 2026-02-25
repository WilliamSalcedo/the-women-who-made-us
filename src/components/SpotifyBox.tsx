interface SpotifyBoxProps {
  linkSpotify: string
}
function SpotifyBox({ linkSpotify }: SpotifyBoxProps) {
  return (
    <iframe
      src={linkSpotify}
      loading="lazy"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      allowFullScreen
      className="h-[232px] w-full rounded-xl border-0 md:h-[200px] md:w-[80%] mx-2"
    />
  )
}

export default SpotifyBox
