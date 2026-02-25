import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

export default function Footer() {
  const navigate = useNavigate()
  const { t } = useTranslation()

  const onHandlePrivacy = () => navigate('/PrivacyModal')
  const onHandleTerms = () => navigate('/Legal')

  return (
    <div>
      <div className="font-futura mt-20 flex justify-center text-[9px] text-[#fda963] md:text-sm lg:text-base">
        <button onClick={onHandlePrivacy} className="px-3 transition hover:opacity-75">
          {t('text.privacy')}
        </button>
        <span className="h-6 w-px bg-white opacity-30" />
        <button onClick={onHandleTerms} className="px-3 transition hover:opacity-75">
          {t('text.terms')}
        </button>
      </div>
      <div className="font-futura m-3 text-center text-[10px] text-[#fda963] italic md:text-sm lg:text-md">
        <p>{t('text.legalText')}</p>
      </div>
    </div>
  )
}
