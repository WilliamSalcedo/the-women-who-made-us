export default function TermsModal() {
  return (
    <div className="w-[100%]">
      <div className="p-6 shadow-xl">
        <button
          onClick={() => window.history.back()}
          className="top-4 left-4 z-50 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur hover:bg-black md:hidden"
          aria-label="Go back"
        >
          ←
        </button>
        <h1 className="font-futura mb-2 text-center text-white italic md:text-[25px] lg:text-[30px]">
          Credits And Legal Notice
        </h1>
        <div className="m-2 flex justify-center text-white">
          <p className="mt-10 w-[80%] text-justify">
            The Women Who Made Us and HER are original theatrical productions created by Sandra
            Salcedo. <br /> This production includes audiovisual materials, images, video excerpts,
            and references to artists and cultural works for purposes of commentary, education,
            tribute, and artistic expression. Certain materials are used in accordance with the Fair
            Use doctrine under 17 U.S.C. § 107 of the United States Copyright Act. <br /> The
            materials are used for nonprofit educational and transformative purposes, including
            criticism, commentary, historical documentation, and tribute. No ownership of third
            party content is claimed. <br /> All trademarks, copyrighted works, and images are the
            property of their respective owners. <br /> This production is an independent tribute
            and is not affiliated with, endorsed by, sponsored by, or connected to any of the
            artists, estates, record labels, publishers, or rights holders referenced. <br /> For
            inquiries regarding rights, credits, or concerns, please contact: <br />
            📩<a href="mailto:hello@whomadeus.live">hello@whomadeus.live</a>
          </p>
        </div>
      </div>
    </div>
  )
}
