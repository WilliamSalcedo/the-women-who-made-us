import music from '../assets/Music.png'

export default function MusicBox() {
  return (
    <section className="flex w-full flex-col items-center md:flex-row">
      <div className="flex w-full justify-center p-3 md:w-1/2 md:p-6">
        <img
          src={music}
          alt="Music artwork"
          className="w-full max-w-[280px] rounded-xl object-cover md:max-w-md"
        />
      </div>

      <div className="flex w-full justify-center p-3 md:w-1/2 md:p-6">
        <div className="w-full max-w-[360px] md:max-w-none">
          <iframe
            src="https://open.spotify.com/embed/playlist/78k4OEhvJ1mzGo9fv8yAsI?theme=0"
            loading="lazy"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            allowFullScreen
            className="h-[232px] w-full rounded-xl border-0 md:h-[352px] md:w-[80%]"
          />
        </div>
      </div>
    </section>
  )
}
