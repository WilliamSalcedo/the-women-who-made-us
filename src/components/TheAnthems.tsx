import title from '../assets/TheAnthemsTitle.png'
import image from '../assets/TheWoman.png'

export default function TheAnthems() {
  return (
    <div className="m-8 flex flex-col justify-center text-[#fda963]">
      <div className="flex justify-center">
        <img src={title} alt="" className="w-95" />
      </div>
      <div className="flex justify-center">
        <p className="mt-10 w-[80%] text-justify">
          Music has a unique ability to act as a bridge between who we were and who we are becoming.
          <b>The Women Who Made Us</b> is a curated musical journey that spans decades of recorded
          history, celebrating the women who rede fi ned what was possible in music and culture.{' '}
          <br />
          <br /> Each song is selected with intention. designed to spark that instant recognition of
          a memory, a feeling, or a moment that helped shape our collective identity.
        </p>
      </div>
      <br />
      <div className="flex justify-center">
        <p className="mt-10 w-[80%] text-justify text-sm">
          <i><b>Legal Notice</b> This production may include brief audiovisual excerpts and archival
          materials for commentary, educational, and artistic purposes in accordance with applicable
          fair use and copyright exceptions. All musical tributes are performed in honor of the
          original artists and their enduring legacies.</i>
        </p>
      </div>
      <div className='flex justify-center mt-12'>
        <img src={image} alt="" className='w-3/5' />
      </div>
    </div>
  )
}
