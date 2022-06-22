import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface Props {
  className?: string;
}

const User = ({ className }: Props) => {
  const userName = localStorage.getItem("username");

  const history = useHistory();

  const { t } = useTranslation();

  const logout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    history.push("/login");
  };

  return (
    <div className={className}>
      <p>
        {t("user.greeting")} {userName}
      </p>
      <button onClick={logout}>({t("user.logout")})</button>
    </div>
  );
};

export default User;
