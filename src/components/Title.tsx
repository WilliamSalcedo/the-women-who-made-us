import { useTranslation } from "react-i18next"

export default function Title() {
const { t }= useTranslation();

  return (
    <div>
      <div className="flex justify-center px-4 pt-10">
        <h1 className="text-[#fc8624] font-futura max-w-xs text-center text-xl sm:max-w-md sm:text-2xl md:max-w-2xl md:text-4xl lg:max-w-4xl lg:text-5xl xl:max-w-5xl xl:text-5xl 2xl:max-w-6xl 2xl:text-7xl">
          {t("text.title")}
        </h1>
      </div>
      <div className="m-4">
        <p className="bg-gradient-to-r from-[#397269] via-[#5fa89a] to-[#397269] bg-clip-text text-transparent font-montserrat text-center text-sm font-semibold tracking-[0.25em] uppercase sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
          {t("text.sub-title")}
        </p>
      </div>
    </div>
  )
}
