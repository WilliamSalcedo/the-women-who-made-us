import title from '../assets/TheProductionTitle.png'
import subTitle from '../assets/TheProductionSubTitle.png'
import image from '../assets/illustrationImage.png'

export default function Production() {
  return (
    <div className="m-8 flex flex-col justify-center text-[#fda963]">
      <div className="flex justify-center">
        <img src={title} alt="" className="w-120" />
      </div>
      <div className="flex justify-center">
        <p className="mt-10 w-[80%] text-justify">
          The Women Who Made Us began in 2024 with a single, restless urge: to honor the women who
          transformed music, culture, and our collective memory. <br />
          <br />
          In a world of fleeting trends, we believe in the power of the legacy. This project is the
          bridge between generations. For some, these sounds and images are fresh and new; for
          others, they are the soundtrack of a lifetime. We bring those two worlds together through
          high - energy performance and intentional storytelling. <br />
          <br />
          <b>
            This is more than a tribute. It is a celebration of the collaboration and resilience of
            women who dared to create.
          </b>
        </p>
      </div>
      <div className='flex justify-center m-12'>
        <img src={image} alt="" className='w-xl'/>
      </div>
      <div className="mt-10 flex justify-center">
        <img src={subTitle} alt="" className="w-95" />
      </div>
      <div className="flex justify-center">
        <p className="mt-10 w-[80%] text-justify">
          <i>A note from Sandra Salcedo Miller</i>
          <br />
          <br />
          <b>
            The Women Who Made Us exists because women’s voices deserve to be heard — not in
            competition, but in harmony.
          </b>
          <br />
          <br /> This project is my love letter to the icons who inspired us and to the girls who
          are still becoming. It is about honoring the women who came before us while making room
          for the voices of today and tomorrow.
          <br />
          <br /> Music has the unique power to rem ind us of our shared history. We are not rivals;
          we are part of a collaborative tissue, woven together by the songs and stories that shaped
          our identity. <br />
          <br /> I invite you to step into this space with us. Let’s remember, celebrate, and be
          inspired by the lineag e that brought us here. <br />
          <br /> <b>Sandra Salcedo Miller</b> <i>Creator, The Women Who Made Us</i>
        </p>
      </div>
    </div>
  )
}
