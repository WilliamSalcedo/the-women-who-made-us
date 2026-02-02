import { useTranslation } from 'react-i18next'

export default function TermsModal() {
  const { t } = useTranslation()

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="relative w-[90%] max-w-2xl rounded-lg border border-[#fda963] bg-black p-6 shadow-xl">
        <h1 className="font-futura mb-2 text-center text-white italic md:text-sm lg:text-base">
          {t('text.terms')}
        </h1>
        <p className="font-futura text-center text-[10px] text-white md:text-sm lg:text-base">
          This website and the live production The Women Who Made Us contain excerpts of copyrighted
          materials including audio, video, and still images used for purposes of education,
          commentary, criticism, and tribute. Such use is believed to constitute fair use under 17
          U.S.C. § 107 of the United States Copyright Act. Some materials are used in a de minimis
          manner. All rights remain with their respective copyright holders.
        </p>
      </div>
    </div>
  )
}
