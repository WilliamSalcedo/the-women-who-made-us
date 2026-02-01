import { useTranslation } from 'react-i18next'

type ModalProps = {
  isActive: boolean
  onClose: () => void
}

export default function PrivacyModal({ isActive, onClose }: ModalProps) {
  const { t } = useTranslation()

  if (!isActive) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="relative w-[90%] max-w-2xl rounded-lg border border-[#fda963] bg-black p-6 shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white opacity-70 hover:opacity-100"
        >
          ✕
        </button>

        <h1 className="font-futura mb-2 text-center text-white italic  md:text-sm lg:text-base">
          {t('text.privacy')}
        </h1>

        <p className="font-futura text-center text-[10px] text-white italic md:text-sm lg:text-base">{t('text.privacyText')}</p>
      </div>
    </div>
  )
}
