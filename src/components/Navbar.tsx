import { useState } from 'react'
import logo from '../assets/Heart.png'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)

  return (
    <nav className="relative w-full md:z-50">
      <div className="flex items-center justify-between px-2">
        <ul className="hidden w-[90%] items-center justify-around gap-10 px-2 text-xs tracking-widest text-white/80 uppercase md:flex">
          <span>
            <img src={logo} alt="Heart" className="w-15 md:w-25 lg:w-30" />
          </span>
          <li>
            <a href="#" className="transition hover:text-white">
              Home
            </a>
          </li>
          <li className="group relative">
            <span className="cursor-pointer transition hover:text-white">About</span>

            <ul className="invisible absolute top-full left-0 mt-3 w-40 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-[10px] tracking-widest text-white/70 hover:bg-white/5 hover:text-white"
                >
                  The Show
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-[10px] tracking-widest text-white/70 hover:bg-white/5 hover:text-white"
                >
                  Cast
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-[10px] tracking-widest text-white/70 hover:bg-white/5 hover:text-white"
                >
                  Creative
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-[10px] tracking-widest text-white/70 hover:bg-white/5 hover:text-white"
                >
                  History
                </a>
              </li>
              <li>
                <a
                  href="/TermsModal"
                  className="block px-4 py-2 text-[10px] tracking-widest text-white/70 hover:bg-white/5 hover:text-white"
                >
                  Credits and legal notice
                </a>
              </li>
            </ul>
          </li>

          <li>
            <a href="/MusicDrawer" className="transition hover:text-white">
              Music
            </a>
          </li>
          <li>
            <a href="/about" className="transition hover:text-white">
              Support
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
              <a href="#">Home</a>
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
                    <a href="#">The Show</a>
                  </li>
                  <li>
                    <a href="#">Cast</a>
                  </li>
                  <li>
                    <a href="#">Creative</a>
                  </li>
                  <li>
                    <a href="#">History</a>
                  </li>
                  <li>
                    <a href="/TermsModal">Credits And Legal Notice</a>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <a href="MusicDrawer">Music</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
