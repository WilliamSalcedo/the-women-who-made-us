import SpotifyBox from './SpotifyBox'
import title from '../assets/TheArchiveTitle.png'
import image1 from '../assets/IMG1.png'
import image2 from '../assets/IMG2.png'
import image3 from '../assets/IMG3.png'
import image4 from '../assets/IMG4.png'
import ArchiveCards from './ArchiveCards'
import VideoCards from './VideoCards'

export default function TheArchive() {
  return (
    <>
      <div className="flex justify-center">
        <img src={title} alt="" className="w-110" />
      </div>
      <div>
        <p className="mt-8 text-center text-3xl text-[#fda963]">The Syllabus: Foundational Texts</p>
      </div>

      <div className="m-6 grid grid-cols-1 flex-row gap-8 text-[#fda963] sm:grid-cols-2 md:m-10 lg:grid-cols-4">
        <ArchiveCards
          image={image1}
          title="The Woman in Me by Britney Spears"
          description='A hauntingly honest account of autonomy lost and found. We study this to remind
              ourselves why building our own "Main House" is a matter of survival, not just a
              creative choice.'
        />
        <ArchiveCards
          image={image2}
          title="Simply More by Cynthia Erivo"
          description='Erivo is the blueprint for the multidisciplinary artist. This memoir explores the
              courage it takes to be "more" in an industry that constantly tries to make women
              "less."'
        />
        <ArchiveCards
          image={image3}
          title="Over the In fl uence by Joanna 'JoJo' Levesque"
          description="A masterclass in industry resilience. JoJo’s journey through contract battles and
              reclaiming her voice is the heartbeat of our technical previews."
        />
        <ArchiveCards
          image={image4}
          title="Mind Body Pride (Semi Well-Adjusted) by Alyson Stone"
          description='An essential look at the cost of the spotlight. Stoner’s perspective on the physical
              and mental toll of the industry informs our "Artist-First" production model.'
        />
      </div>

      <div>
        <h1 className="mt-8 text-center text-3xl text-[#fda963]">
          The Watch List: A Visual Manifesto
        </h1>
      </div>
      <div className="mt-8 grid grid-cols-1 flex-row gap-2 sm:grid-cols-2 lg:grid-cols-3">
        <VideoCards
          URL="https://www.youtube.com/embed/XBT0bYYsXxA"
          title="Janis Joplin: The Industry Interview"
          description={`
            “For a woman to sing, she really needs to or wants to” A rare clip of Janis Joplin reveals how women in music are treated differently than men, both professionally and personally. 
            It shows the emotional toll of that inequality and how the gender gap in the industry still exists today.
            `}
        />

        <VideoCards
          URL="https://www.youtube.com/embed/IIc7dp63wo0"
          title="VH1 Divas Live (The Concert Clip)"
          description={`"When the titans collide."
            This isn't just a concert; it's a study in collective power. We
            look to the Divas era to understand how individual excellence creates an unstoppable force when
            women share the stage.`}
        />
        <VideoCards
          URL="https://www.youtube.com/embed/rI3UH7kO6cw"
          title='The Spice Girls: The "Girl Power" Interview'
          description={`"Don't just take the seat; change the table."
            Beyond the fashion and the hits, the
            Spice Girls were a masterclass in branding a revolution. This interview highlights the
            unapologetic demand for space that fuels
            HER
            `}
        />
      </div>
      <div>
        <p className="mt-8 text-center text-3xl text-[#fda963]">The Sound That Made Us</p>
      </div>

      <div className="mt-10 flex w-full justify-center">
        <SpotifyBox linkSpotify="https://open.spotify.com/embed/playlist/78k4OEhvJ1mzGo9fv8yAsI?theme=0" />
      </div>
    </>
  )
}
