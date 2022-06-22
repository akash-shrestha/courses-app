import { useState } from "react";
import { useTranslation } from "react-i18next";
import TextField from "@mui/material/TextField";
import { useHistory } from "react-router-dom";
import axios from "axios";

interface Props {
  className?: string;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginForm = ({ className, setIsAuth }: Props) => {
  const { t } = useTranslation();

  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [loginError, setLoginError] = useState("");

  const validate = () => {
    let passwordErrorMessage: any = "";
    let emailErrorMessage: any = "";
    if (password.length < 8) {
      passwordErrorMessage = t("login.form.password.error_message");
    }
    if (!email.includes("@")) {
      emailErrorMessage = t("login.form.email.error_message");
    }
    if (passwordErrorMessage || emailErrorMessage) {
      setPasswordError(passwordErrorMessage);
      setEmailError(emailErrorMessage);
      return false;
    }
    setPasswordError("");
    setEmailError("");
    return true;
  };

  const onSubmit = (event: any): any => {
    event.preventDefault();
    const isValid = validate();
    if (isValid) {
      axios
        .post(`${process.env.REACT_APP_BASE_URL}/auth/local`, {
          identifier: email,
          password: password,
        })
        .then((res) => {
          if (res.status === 200) {
            localStorage.setItem("token", res.data.jwt);
            localStorage.setItem("username", res.data.user.username);
            setIsAuth(true);
            history.push("/home");
          }
        })
        .catch((err) => {
          setLoginError(t("login.form.error_message"));
        });
    }
  };

  return (
    <form className={className} onSubmit={onSubmit}>
      <label>
        <TextField
          id="email"
          type="email"
          placeholder={t("login.form.email.placeholder")}
          variant="standard"
          label={t("login.form.email.label")}
          onChange={(e) => setEmail(e.target.value)}
          helperText={emailError}
        />
      </label>
      <label>
        <TextField
          id="password"
          type="password"
          placeholder={t("login.form.password.placeholder")}
          variant="standard"
          label={t("login.form.password.label")}
          onChange={(e) => setPassword(e.target.value)}
          helperText={passwordError}
        />
      </label>
      <div className="error-message">{loginError}</div>
      <div className="buttons">
        <button className="button" type="submit">
          {t("login.form.button.login")}
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
