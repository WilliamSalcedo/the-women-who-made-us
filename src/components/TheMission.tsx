import title from '../assets/TheMissionTitle.png'
import imageGirl from '../assets/MockupGirl.png'
import ProductCard from './ProductCard'
import imageTshirt from '../assets/MockupTshirt.png'
import image from '../assets/image1.png'
import image1 from '../assets/image2.png'
import image2 from '../assets/image.3.png'

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
      <div className='flex justify-center items-center mt-10'>
        <a href="https://fnd.us/houseofher?ref=sh_3ElUy4" target='blank'
        className='flex items-center justify-center border border-white w-30 h-10 text-center rounded-xl'>
           CONTRIBUTE
        </a>
      </div>
      <div className='m-6 grid grid-cols-1 flex-row gap-8 sm:grid-cols-2 md:m-10 lg:grid-cols-4'>
        <ProductCard  image={imageGirl}/>
        <ProductCard  image={imageTshirt}/>
        <ProductCard  image={image}/>
        <ProductCard  image={image1}/>
        <ProductCard  image={image2}/>
      </div>
      
    </div>
  )
}