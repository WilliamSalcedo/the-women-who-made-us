import { Link } from 'react-router-dom'
import music from '../assets/Music.png'

export default function MusicBox() {
  return (
    <section className="flex w-full flex-col items-center md:flex-row">
      <div className="flex w-full justify-center p-3 md:p-6">
        <Link to="TheArchive">
          <img
            src={music}
            alt="Music artwork"
            className="w-full max-w-[280px] rounded-xl object-cover md:max-w-md"
          />
        </Link>
      </div>
    </section>
  )
}
