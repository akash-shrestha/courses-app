import { useTranslation } from "react-i18next";
import React from "react";

interface Props {
  className?: string;
}

const PageTitle: React.FC<Props> = ({ className }) => {
  const { t } = useTranslation();

  return <p className={className}>{t("logo_title")}</p>;
};

export default PageTitle;
