import { useState } from 'react'

export default function MusicDrawer() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className={`fixed top-1/2 z-[60] -translate-y-1/2 rotate-90 border border-[#E6C77A]/40 bg-black bg-gradient-to-r from-[#E6C77A] via-[#F5E6B3] to-[#C9A24D] bg-clip-text px-6 py-3 text-xs font-medium tracking-[0.35em] text-transparent uppercase shadow-[0_0_15px_rgba(230,199,122,0.2)] transition-all duration-300 ${open ? 'right-[20rem]' : 'right-[-2.5rem]'} `}
      >
        {open ? 'CLOSE' : 'LISTEN'}
      </button>

      {open && (
  <div
    onClick={() => setOpen(false)}
    className="fixed inset-0 z-40 bg-black/60"
  />
)}


      <aside
  className={`
    fixed z-50
    bg-gradient-to-b from-neutral-900 via-neutral-900 to-black
    shadow-2xl
    transition-transform duration-300

    /* ===== DESKTOP ===== */
    hidden md:block
    md:top-0 md:left-0 md:h-full md:w-[22rem]
    ${open ? 'md:translate-x-0' : 'md:-translate-x-full'}

    /* ===== MOBILE ===== */
    md:hidden
    bottom-0 left-0 w-full h-[65vh]
    ${open ? 'translate-y-0' : 'translate-y-full'}
  `}
>

        <div className="flex h-full flex-col gap-6 overflow-y-auto p-6">
          <div className="space-y-2">
            <p className="text-[10px] tracking-[0.35em] uppercase opacity-60">Listening now</p>

            <p className="text-sm text-white/70 italic">Music curated for</p>

            <h3 className="text-lg font-semibold tracking-tight text-white">Women Who Made Us</h3>
          </div>

          {/* SPOTIFY */}
          {open && (
            <div className="rounded-lg border border-white/10 bg-black/40 p-3">
              <iframe
                src="https://open.spotify.com/embed/playlist/78k4OEhvJ1mzGo9fv8yAsI"
                width="100%"
                height="152"
                loading="lazy"
                allow="clipboard-write; encrypted-media"
                className="rounded-md"
              />
            </div>
          )}
        </div>
      </aside>
    </>
  )
}
