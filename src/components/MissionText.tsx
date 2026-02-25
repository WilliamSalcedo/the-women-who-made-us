import mission from '../assets/TheMission.png'
import getInvolved from '../assets/GetInvolvedBanner.png'
export default function MissionText() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="m-8 flex justify-center">
        <img src={mission} alt="" className="w-80 md:w-150 lg:w-140" />
      </div>
      <div className="w-[80%]">
        <p className="font-OldAlmanac text-center text-xs text-[#fda963] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
          Want to be part of this? Not just as an audience member, but as a foundational part of the
          story. The Women Who Made Us is being built by a dedicated creative team giving their
          time, talent, and energy to a vision they believe in. We know the value of their work, and
          this mission is about honoring that talent while we bring the production to life. If you
          want to be part of our founding story, you can join as a <b>Supporter or Producer</b>{' '}
          through our limited-edition merch tiers and support levels
        </p>
      </div>
      <div className="m-8 flex justify-center">
        <a href="TheMission">
          <img src={getInvolved} alt="" className="" />
        </a>
      </div>
    </div>
  )
}
