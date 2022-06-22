import React from "react";
import { useTranslation } from "react-i18next";

interface Props {
  className?: string;
}

const LocaleSwitcher: React.FC<Props> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: string): void => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className={className}>
      <div className="line1"></div>
      <p>{t("language")}</p>
      <section>
        <button
          className={i18n.language === "en" ? "active" : ""}
          onClick={() => changeLanguage("en")}
        >
          {t("english")}
        </button>
        <figure></figure>
        <button
          className={i18n.language === "fr" ? "active" : ""}
          onClick={() => changeLanguage("fr")}
        >
          {t("french")}
        </button>
      </section>
      <div className="line2"></div>
    </div>
  );
};

export default LocaleSwitcher;
