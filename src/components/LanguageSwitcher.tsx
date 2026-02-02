import { useTranslation } from 'react-i18next'

type Lng = 'es' | 'en'

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const current = (i18n.resolvedLanguage || i18n.language || 'es').slice(0, 2) as Lng
  const setLang = (lng: Lng) => i18n.changeLanguage(lng)

  const btn =
    'rounded-xl border px-1 py-1 text-sm md:text-base leading-none transition focus:outline-none focus:ring-1 focus:ring-white/60 text-white'

  return (
    <div className="m-2 flex items-center justify-end gap-2">
      <button
        type="button"
        onClick={() => setLang('es')}
        aria-pressed={current === 'es'}
        aria-label="Cambiar a Español"
        className={`${btn} ${current === 'es' ? 'ring-0.5 ring-white/60' : 'opacity-80 hover:opacity-100'}`}
      >
        <span className="sr-only">Español</span>
        <span role="img" aria-hidden>
          🇪🇸
        </span>
      </button>

      <button
        type="button"
        onClick={() => setLang('en')}
        aria-pressed={current === 'en'}
        aria-label="Switch to English"
        className={`${btn} ${current === 'en' ? 'ring-0.5 ring-white/60' : 'opacity-80 hover:opacity-100'}`}
      >
        <span className="sr-only">English</span>
        <span role="img" aria-hidden>
          🇺🇸
        </span>
      </button>
    </div>
  )
}
