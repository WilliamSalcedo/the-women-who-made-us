import title from '../assets/TheAnthemsTitle.png'


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
          <i>The journey is getting started. Stay connected to discover the music and the women who made us, as
            we prepare to launch our first live production.
          </i>
        </p>
      </div>
      
    </div>
  )
}
