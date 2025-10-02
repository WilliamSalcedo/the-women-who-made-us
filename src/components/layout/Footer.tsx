import { useTranslation } from "react-i18next"



export default function Footer() {
const { t }=useTranslation();

  return (
    <div>
      <div className="text-white flex justify-center font-futura divide-x divide-white mt-20 text-[9px] md:text-sm lg:text-base">
        <a href="" className="transition hover:opacity-75 px-3">{t("text.privacy")}</a>
        <a href="" className="transition hover:opacity-75 pl-3">{t("text.terms")}</a>
      </div>
      <div className="text-white text-center font-futura m-3 italic text-[10px] md:text-sm lg:text-base">
        <p>
            {t("text.legalText")}
        </p>
      </div>
    </div>
  )
}
