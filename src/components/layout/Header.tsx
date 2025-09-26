import logo from '../../assets/The Women Logo.png'
import instagram from '../../assets/Instagram_Glyph_White.svg'
import tiktok from '../../assets/tiktok-1.svg'

export default function Header() {
  console.log('aca estoy')
  return (
    <header className="bg-red w-full">
      <div className="mx-auto max-w-6xl px-4 py-3">
        <div className="flex flex-col items-center gap-3 md:flex-row md:justify-between">
          <div className="flex justify-center md:justify-start">
            <img src={logo} alt="The Women Who Made Us" className="w-28 md:w-40 lg:w-80" />
          </div>
          <div className="flex items-center justify-center gap-4 md:justify-end">
            <a
              href="https://www.instagram.com/whomadeuslive?igsh=MW83MWVhaXBlZmxhMw=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
              aria-label="Instagram"
              title="Instagram"
            >
              <img
                src={instagram}
                alt="Instagram"
                className="h-6 w-6 transition hover:opacity-75 md:h-8 md:w-8 lg:h-10 lg:w-10"
              />
            </a>

            <a
              href="https://www.tiktok.com/@thewomenwhomadeus?_t=ZS-903mQwFausE&_r=1" /* ← pon tu URL real */
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
              aria-label="TikTok"
              title="TikTok"
            >
              <img
                src={tiktok}
                alt="TikTok"
                className="h-6 w-6 transition hover:opacity-75 md:h-8 md:w-8 lg:h-10 lg:w-10"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
