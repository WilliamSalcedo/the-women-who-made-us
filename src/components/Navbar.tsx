import { useState } from 'react'
import logo from '../assets/Heart.png'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)

  return (
    <nav className="relative mt-8 w-full md:z-50">
      <div className="flex items-center justify-between px-2">
        <ul className="hidden w-[90%] items-center justify-around gap-10 px-2 text-xs tracking-widest text-white/80 uppercase md:flex">
          <Link to="/">
            <img src={logo} alt="Heart" className="w-15 md:w-25 lg:w-30" />
          </Link>

          <li>
            <a href="/" className="transition hover:text-white">
              Home
            </a>
          </li>
          <li className="group relative">
            <span className="cursor-pointer transition hover:text-white">About</span>

            <ul className="invisible absolute top-full left-0 mt-3 w-48 rounded-lg border border-white/10 bg-black/95 opacity-0 shadow-xl backdrop-blur-md transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <li>
                <a
                  href="TheProduction"
                  className="block px-4 py-2 text-[10px] tracking-widest text-white/70 hover:bg-white/5 hover:text-white"
                >
                  The Production
                </a>
              </li>
              {/* <li>
                <a
                  href="TheVoices"
                  className="block px-4 py-2 text-[10px] tracking-widest text-white/70 hover:bg-white/5 hover:text-white"
                >
                  The Voices
                </a>
              </li> */}
              {/* <li>
                <a
                  href="TheCollective"
                  className="block px-4 py-2 text-[10px] tracking-widest text-white/70 hover:bg-white/5 hover:text-white"
                >
                  The Collective
                </a>
              </li> */}
              <li>
                <a
                  href="/History"
                  className="block px-4 py-2 text-[10px] tracking-widest text-white/70 hover:bg-white/5 hover:text-white"
                >
                  The Manifiesto
                </a>
              </li>
              <li>
                <a
                  href="Legal"
                  className="block px-4 py-2 text-[10px] tracking-widest text-white/70 hover:bg-white/5 hover:text-white"
                >
                  Legal
                </a>
              </li>
            </ul>
          </li>

          <li>
            <a href="TheAnthems" className="transition hover:text-white">
              The Anthems
            </a>
          </li>
          <li>
            <a href="TheArchive" className="transition hover:text-white">
              The Archive
            </a>
          </li>
          <li>
            <a href="TheMission" className="transition hover:text-white">
              The Misssion
            </a>
          </li>
          <li>
            <a href="TheVisuals" className="transition hover:text-white">
              The Visuals
            </a>
          </li>
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="text-xl text-white md:hidden"
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 px-6 py-6 md:hidden">
          <ul className="flex flex-col gap-4 text-xs tracking-widest text-white/80">
            <li>
              <a href="/">Home</a>
            </li>

            <li>
              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                className="flex w-full items-center justify-between"
              >
                About
                <span className="text-sm">{aboutOpen ? '−' : '+'}</span>
              </button>

              {aboutOpen && (
                <ul className="mt-3 ml-4 flex flex-col gap-3 text-[10px] text-white/60">
                  <li>
                    <a href="TheProduction">The Production</a>
                  </li>
                  {/* <li>
                    <a href="Thevoices">The Voices</a>
                  </li> */}
                  {/* <li>
                    <a href="TheCollective">The Collective</a>
                  </li> */}
                  <li>
                    <a href="History">The Manifiesto</a>
                  </li>
                  <li>
                    <a href="Legal">Legal</a>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <a href="TheAnthems">The Anthems</a>
            </li>
            <li>
              <a href="TheArchive">The Archive</a>
            </li>
            <li>
              <a href="TheMission">The Mission</a>
            </li>
            <li>
              <a href="TheVisuals">The Visuals</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
