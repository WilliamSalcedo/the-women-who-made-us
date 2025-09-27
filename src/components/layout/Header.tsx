import logo from '../../assets/The Women Logo.png'
import instagram from '../../assets/Instagram_Glyph_White.svg'
import tiktok from '../../assets/tiktok-1.svg'

export default function Header() {
  console.log('aca estoy')
  return (
    <header className="w-full mb-8">
      <div className="mx-auto">
        <div className="flex flex-col items-center gap-3 md:flex-row md:justify-between">
          <div className="flex justify-center md:justify-start">
            <img src={logo} alt="The Women Who Made Us" className="w-28 md:w-20 lg:w-45" />
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
                className="h-3 w-3 transition hover:opacity-75 md:h-4 md:w-4 lg:h-6 lg:w-6"
              />
            </a>

            <a
              href="https://www.tiktok.com/@thewomenwhomadeus?_t=ZS-903mQwFausE&_r=1" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
              aria-label="TikTok"
              title="TikTok"
            >
              <img
                src={tiktok}
                alt="TikTok"
                className="h-3 w-3 transition hover:opacity-75 md:h-4 md:w-4 lg:h-6 lg:w-6"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
