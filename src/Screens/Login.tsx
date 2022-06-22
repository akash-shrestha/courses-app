import React from "react";
import { StyledLoginForm } from "../Components/Styled/LoginForm";
import { useTranslation } from "react-i18next";
import { StyledLoginLocaleSwitcher } from "../Components/Styled/LoginLocaleSwitcher";

interface Props {
  className?: string;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login = ({ className, setIsAuth }: Props) => {
  const { t } = useTranslation();

  return (
    <div className={className}>
      <div>
        <h1>{t("login.title.app")}</h1>
        <h2>{t("login.title.page")}</h2>
        <StyledLoginForm setIsAuth={setIsAuth} />
      </div>
      <StyledLoginLocaleSwitcher />
    </div>
  );
};

export default Login;
