import title from '../assets/TheMissionTitle.png'

export default function TheMission() {
  return (
    <div className="m-8 flex flex-col justify-center text-[#fda963]">
      <div className="flex justify-center">
        <img src={title} alt="" className="w-130" />
      </div>
      <div className="flex justify-center">
        <p className="mt-10 w-[80%] text-justify">
          <i>The Women Who Made Us</i> is more than a production it is a community-built legacy. We
          aren't looking to corporations to tell these stories; we are looking to the people who
          lived them. <br />
          <br />
          We are currently in our <b>Founding Phase</b>, and we are inviting you to help us build
          the world of the "Main House" from the ground up. By supporting us now, you aren't just a
          spectator you are a foundational part of the creative team. <br />
          <br />
          <b>How you can help:</b> Through our dedicated crowdfunding home, you can access our first
          limited-edition merch drop and join our tiers as a <b>Supporter or Producer.</b> Every
          contribution goes directly toward the artist, the rehearsals, and the production costs of
          bringing this vision to the stage.
        </p>
      </div>
    </div>
  )
}
