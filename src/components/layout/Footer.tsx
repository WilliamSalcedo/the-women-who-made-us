import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

export default function Footer() {
  const navigate = useNavigate()
  const { t } = useTranslation()

  const onHandlePrivacy = () => navigate('/PrivacyModal')
  const onHandleTerms = () => navigate('/TermsModal')

  return (
    <div>
      <div className="font-futura mt-20 flex justify-center divide-x divide-white text-[9px] text-white md:text-sm lg:text-base">
        <button onClick={onHandlePrivacy} className="px-3 transition hover:opacity-75">
          {t('text.privacy')}
        </button>
        <button onClick={onHandleTerms} className="px-3 transition hover:opacity-75">
          {t('text.terms')}
        </button>
      </div>
      <div className="font-futura m-3 text-center text-[10px] text-[#9b9999] italic md:text-sm lg:text-md">
        <p>{t('text.legalText')}</p>
      </div>
    </div>
  )
}
