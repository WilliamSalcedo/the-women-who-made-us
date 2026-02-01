import logo from '../../assets/TWHM.png'
import LanguageSwitcher from '../LanguageSwitcher'
import { FaInstagram, FaTiktok } from "react-icons/fa6";


export default function Header() {

  return (
    <header className="mb-8 w-full">
      <LanguageSwitcher />
      <div className="mx-auto">
        <div className="flex flex-col items-center gap-3 md:flex-row md:justify-between">
          <div className="flex justify-center md:justify-start">
            <img src={logo} alt="The Women Who Made Us" className="w-28 md:w-40 lg:w-80" />
          </div>
          <div className="flex items-center justify-center gap-4 md:justify-end">
            <div className="flex items-center justify-center rounded-full border border-white px-2 py-2">
              <a
                href="https://www.instagram.com/whomadeuslive?igsh=MW83MWVhaXBlZmxhMw=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
                aria-label="Instagram"
                title="Instagram"
              >
                 <FaInstagram className="h-4 w-4 text-white md:h-5 md:w-5 lg:h-6 lg:w-6" />
              </a>
            </div>

            <div className="flex items-center justify-center rounded-full border border-white px-2 py-2">
              <a
                href="https://www.tiktok.com/@thewomenwhomadeus?_t=ZS-903mQwFausE&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
                aria-label="TikTok"
                title="TikTok"
              >
                <FaTiktok className="h-4 w-4 text-white md:h-5 md:w-5 lg:h-6 lg:w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
    </header>
  )
}
