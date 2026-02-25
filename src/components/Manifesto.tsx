import title from '../assets/HistoryTitle.png'
import subTitle from '../assets/HistorySubTitle.png'

export default function History() {
  return (
    <div className="m-8 flex flex-col justify-center text-[#fda963]">
      <div className="flex justify-center">
        <img src={title} alt="" className="w-120" />
      </div>
      <div className="flex justify-center">
        <p className="mt-10 w-[80%] text-justify">
          The journey of <i>The Women Who Made Us</i> began quietly in 2024. At the time, it was a
          restless idea called <i>Pulse</i> a desire to create a tribute show so alive that I
          creator could stand inside it, rather than just watch from the audience. <br />
          <br /> While living in Texas, I attended a tribute performance inspired by one of the
          biggest pop tours of the modern era. The scale was ambitious, and it sparked something in
          me. I wanted to contribute. I offered ideas, feedback, and support, hoping to join a
          creative circle and build friendships with people who loved the same art form. <br />
          <br />
          <b>Instead, I received silence.</b> <br />
          <br /> That silence made me question my talent, my worth, and my place in this industry. I
          carried that frustration for a long time until two close friends, living on different
          continents and speaking different languages, gave me the same piece of advice: <br />
          <br />
          <i>"Stop waiting for permission. Build the world you want to be invited into."</i> So, I
          did.
        </p>
      </div>
      <div className="mt-10 flex justify-center">
        <img src={subTitle} alt="" className="w-95" />
      </div>
      <div className="flex justify-center">
        <p className="mt-10 w-[80%] text-justify">
          What started as a tribute evolved into a manifesto. I realized that women in art are often
          pitted against one another, but the truth is much more powerful: we are a collaborative
          tissue. We are sisters in a lineage of artists, creators, and dreamers. <br />
          <br /> I began searching for the voices that de fined womanhood—from the poetry of Jackie
          Hill Perry to the cultural earthquake of the Spice Girls. I looked back at the iconic
          "Divas" concerts of the 90s, where legendary women shared the stage with mutual respect.
          Somewhere along the way, that spirit of collaboration faded from mainstream culture,
          replaced by narratives of rivalry. <br />
          <br />
          <b>The Women Who Made Us seeks to revive that collective stage. </b>
          This show was built intentionally and rebelliously. Instead of reaching for the names
          already in marquee lights, I reached for the artists who are brilliant, underseen, and
          underestimated. I built an army of believers who recognized themselves in this mission.{' '}
          <br />
          <br />
          <i>The Women Who Made Us</i> is a love letter to the past and a blueprint for the future.
          It was born from longing, nostalgia, and an unshakable belief that none of us are here
          alone. <br />
          <br /> <b>We are here because of the women who made us.</b>
        </p>
      </div>
      <div className="flex justify-center">
        <p className="mt-10 w-[80%] text-end">Sandra Salcedo Miller, Creator</p>
      </div>
    </div>
  )
}
