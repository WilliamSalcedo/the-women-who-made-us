export default function Form() {
  return (
    <div className="flex justify-center">
      <form className="m-4 flex w-full max-w-3xl flex-col items-center md:flex-col md:gap-6">
        <div className="flex flex-col gap-4 md:flex-row md:gap-6">
          <input
            type="text"
            placeholder="First Name"
            autoComplete="given-name"
            className="w-32 rounded-xl border border-white bg-transparent px-2 py-0.5 text-center text-sm text-white placeholder:text-xs focus:ring-2 focus:ring-white/60 focus:outline-none sm:text-base sm:placeholder:text-sm md:w-56 md:px-3 md:py-2 md:text-lg md:placeholder:text-base lg:text-xl lg:placeholder:text-lg"
          />

          <input
            type="text"
            placeholder="Last Name"
            autoComplete="family-name"
            className="w-32 rounded-xl border border-white bg-transparent px-2 py-0.5 text-center text-sm text-white placeholder:text-xs focus:ring-2 focus:ring-white/60 focus:outline-none sm:text-base sm:placeholder:text-sm md:w-56 md:px-3 md:py-2 md:text-lg md:placeholder:text-base lg:text-xl lg:placeholder:text-lg"
          />

          <input
            type="email"
            placeholder="Email"
            autoComplete="email"
            className="w-32 rounded-xl border border-white bg-transparent px-2 py-0.5 text-center text-sm text-white placeholder:text-xs focus:ring-2 focus:ring-white/60 focus:outline-none sm:text-base sm:placeholder:text-sm md:w-56 md:px-3 md:py-2 md:text-lg md:placeholder:text-base lg:text-xl lg:placeholder:text-lg"
          />
        </div>
        <button className="bg-gold mt-4 w-20 text-xs md:py-2 md:w-40 md:mt-0.5 md:text-base  rounded-md border border-white text-center font-semibold text-black ">
          SIGN UP
        </button>
      </form>
    </div>
  )
}
