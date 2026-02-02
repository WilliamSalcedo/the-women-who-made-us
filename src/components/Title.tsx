import title from '../assets/LandingTitle.png'

export default function Title() {
  return (
    <div>
      <div className="mb-8 flex justify-center px-4 pt-10">
        <img src={title} alt="" className="w-70 md:w-150 lg:w-180" />
      </div>
    </div>
  )
}
