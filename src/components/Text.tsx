import { useTranslation, Trans } from "react-i18next";

export default function Text() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="flex justify-center">
        <p className="text-center text-xs text-white sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-futura">
          <Trans i18nKey="text.intro" />
        </p>
      </div>

      <div className="m-4 flex justify-center">
        <p className="text-gold font-baskervville max-w-xs text-center text-lg sm:max-w-md sm:text-xl md:max-w-2xl md:text-2xl lg:max-w-4xl lg:text-3xl xl:max-w-5xl xl:text-4xl 2xl:max-w-6xl 2xl:text-5xl">
          {t("text.ctaTitle")}
        </p>
      </div>

      <div className="m-4 flex justify-center">
        <p className="m-4 text-center text-xs text-white sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-futura">
          {t("text.ctaDescription")}
        </p>
      </div>
    </div>
  );
}
