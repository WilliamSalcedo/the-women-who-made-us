import { FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa6'


export default function SocialMedia() {
  return (
    <div className="flex items-center justify-center gap-4 m-5">
      <div className="flex items-center justify-center px-2 py-2">
        <a
          href="https://www.instagram.com/HerOnStage"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex text-[#fda963] hover:opacity-80 transition"
          aria-label="Instagram"
          title="Instagram"
        >
          <FaInstagram className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
        </a>
      </div>

      <div className="flex items-center justify-center px-2 py-2">
        <a
          href="https://www.tiktok.com/@thewomenwhomadeus?_t=ZS-903mQwFausE&_r=1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex text-[#fda963] hover:opacity-80 transition"
          aria-label="TikTok"
          title="TikTok"
        >
          <FaTiktok className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
        </a>
      </div>
       <div className="flex items-center justify-center px-2 py-2">
        <a
          href="https://www.youtube.com/channel/UCGPSoc-NxO5LnHnIiaQrpKw"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex text-[#fda963] hover:opacity-80 transition"
          aria-label="Youtube"
          title="Youtube"
        >
          <FaYoutube className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
        </a>
      </div>
    </div>
  )
}
