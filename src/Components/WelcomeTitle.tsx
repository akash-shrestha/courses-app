import { useLocation } from "react-router";
import { useTranslation } from "react-i18next";
import React from "react";

interface Props {
  className: string;
}

const PageTitle: React.FC<Props> = ({ className }) => {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery();
  let lang = query.get("lang");

  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: string): void => {
    i18n.changeLanguage(lang);
  };

  if (lang !== null) {
    changeLanguage(lang);
  }

  return (
    <header className={className}>
      <p>{t("home.greeting")}</p>
    </header>
  );
};

export default PageTitle;
