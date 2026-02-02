import { useTranslation, Trans } from "react-i18next";
import subTitle from '../assets/LandingSubTitle.png'

export default function Text() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="flex justify-center">
        <p className="text-center text-xs text-[#fda963] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-OldAlmanac">
          <Trans i18nKey="text.intro" />
        </p>
      </div>

      <div className="m-8 flex justify-center">
        <img src={subTitle} alt="" className="w-60 md:w-130 lg:w-140" />
      </div>

      <div className="m-4 flex justify-center">
        <p className="m-4 text-center text-xs text-[#fda963] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-futura">
          {t("text.ctaDescription")}
        </p>
      </div>
    </div>
  );
}
