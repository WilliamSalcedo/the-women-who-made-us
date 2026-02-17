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
            src="https://open.spotify.com/embed/playlist/78k4OEhvJ1mzGo9fv8yAsI"
            loading="lazy"
            allow="clipboard-write; encrypted-media"
            className="h-[380px] w-full rounded-xl md:h-[352px] "
          />
        </div>
      </div>
    </section>
  )
}
