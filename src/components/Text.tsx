import { useTranslation } from 'react-i18next'
import subTitle from '../assets/LandingSubTitle1.png'

export default function Text() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-[80%]">
        <p className="font-OldAlmanac text-center text-xs text-[#fda963] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
          A live music and storytelling platform built around the songs, voices, and stories that
          shaped a generation. <br /> It brings together live performances, narrative moments, and visual
          storytelling to create immersive shows that feel like a concert and a cultural experience
          at the same time. Each production explores different themes, eras, and icons, connecting
          nostalgia with a modern live audience experience. <br /> The platform is designed to expand into
          multiple productions, collaborations, and live formats, with each chapter adding a new
          layer to the story.
        </p>
      </div>

      <div className="m-8 flex justify-center">
        <img src={subTitle} alt="" className="w-60 md:w-130 lg:w-140" />
      </div>

      <div className="m-4 flex justify-center">
        <p className="font-futura m-4 text-center text-xs text-[#fda963] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
          {t('text.ctaDescription')}
        </p>
      </div>
    </div>
  )
}
