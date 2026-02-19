import subTitle from '../assets/LandingSubTitle.png'

export default function Text() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-[80%]">
        <p className="font-OldAlmanac text-center text-xs text-[#fda963] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
          Born from a desire to reclaim the stage, <i>The Women Who Made Us</i> is more than a
          tribute show. It's a living lineage of artists, icons and dreamers who shaped our world.
          We don't just perform the music; we honor the spirit of the women who made us who we are.
        </p>
      </div>

      <div className="m-8 flex justify-center">
        <img src={subTitle} alt="" className="w-80 md:w-150 lg:w-140" />
      </div>
    </div>
  )
}
