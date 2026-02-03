import title from '../assets/LandingTitle1.png'

export default function Title() {
  return (
    <div>
      <div className="mb-8 flex justify-center px-4 pt-10">
        <img src={title} alt="" className="w-90 md:w-180 lg:w-210" />
      </div>
    </div>
  )
}
