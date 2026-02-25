import title from '../assets/TitleVisuals.png'
import subTitle from '../assets/VisualsSubtitle.png'
export default function TheVisuals() {
  return (
    <div className="m-8 flex flex-col justify-center text-[#fda963]">
      <div className="flex justify-center">
        <img src={title} alt="" className="w-95" />
      </div>
      <div className="flex justify-center">
        <p className="mt-10 w-[80%] text-justify">
          Seeing is believing. In this space, we share the visual journey of bringing this project
          to life. Here, you’ll fi nd our production concepts, design inspirations, and a
          behind-the-scenes look at the "Army of Believers" at work
        </p>
      </div>
      <div className="flex justify-center mt-12">
        <img src={subTitle} alt="" className="w-2/4" />
      </div>
    </div>
  )
}
