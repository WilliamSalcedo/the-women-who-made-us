import title from '../assets/TitleVisuals.png'
import subTitle from '../assets/VisualsSubtitle.png'
import paper from '../assets/Paper.jpg'
import ArchiveCards from './ArchiveCards'
import conceptPhase from '../assets/ConceptPhase.png'
import VideoCards from './VideoCards'
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
          behind-the-scenes look at "The Architecs" at work
        </p>
      </div>
      <div className="mt-12 flex justify-center">
        <img src={subTitle} alt="" className="w-2/4" />
      </div>
      <div className="m-6 grid grid-cols-1 flex-row gap-8 text-[#fda963] sm:grid-cols-2 md:m-10 lg:grid-cols-3">
        <ArchiveCards image={paper} title="The Evolution" description='The "Paper" Phase' iframeClassName='sm:w-[250px] sm:h-[250px]' />
        <ArchiveCards 
          image={conceptPhase} 
          title='The World-Building' 
          description='The Concept Phase' 
          iframeClassName='sm:w-[250px] sm:h-[250px]' />
        <VideoCards 
          URL='https://www.youtube.com/embed/eMQSYuCJjww' 
          title='The Energy' 
          description='The "Motion" Phase'
          iframeClassName="w-full sm:w-[250px] sm:h-[250px]"
        />

      </div>
    </div>
  )
}
