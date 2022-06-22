import packageJson from "../../package.json";
import { useTranslation } from "react-i18next";

interface Props {
  className?: string;
}

const Version = ({ className }: Props) => {
  const { t } = useTranslation();

  return (
    <p className={className}>
      {t("version")} {packageJson.version}
    </p>
  );
};

export default Version;
