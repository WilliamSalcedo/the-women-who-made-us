import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import PrivacyModal from '../PrivacyModal'
import TermsModal from '../TermsModal'

export default function Footer() {
  const [isActivePolicy, setIsActivePolicy] = useState(false)
  const [isactiveterms, setIsActiveTerms] = useState(false)
  const { t } = useTranslation()
  const onHandlePrivacy = () => {
    setIsActivePolicy(true)
  }
  const onHandleTerms = ()=>{
    setIsActiveTerms(true)
  }

  const onClose = () => {
    setIsActivePolicy(false)
    setIsActiveTerms(false)
  }
  

  return (
    <div>
      <div className="font-futura mt-20 flex justify-center divide-x divide-white text-[9px] text-white md:text-sm lg:text-base">
        <button onClick={onHandlePrivacy} className="px-3 transition hover:opacity-75">
          {t('text.privacy')}
        </button>
        <button onClick={onHandleTerms} className="px-3 transition hover:opacity-75">{t('text.terms')}</button>
      </div>
      <div className="font-futura m-3 text-center text-[10px] font-semibold text-white italic md:text-sm lg:text-base">
        <p>{t('text.legalText')}</p>
      </div>
      <PrivacyModal isActive={isActivePolicy} onClose={onClose} />
      <TermsModal isActive={isactiveterms} onClose={onClose} />
    </div>
  )
}
