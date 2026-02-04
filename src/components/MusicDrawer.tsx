import music from '../assets/Music.png'

export default function MusicDrawer() {
  return (
    <nav className="flex items-center justify-center">
      <img src={music} alt="music" className="w-80 md:w-150 lg:w-250" />
    </nav>
  )
}
