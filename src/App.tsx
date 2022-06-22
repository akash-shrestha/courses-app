import { FC, useState, useEffect } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import "./i18n.ts";

import ProtectedRoutes from "./Components/ProtectedRoute";

import { StyledMenu } from "./Components/Styled/Menu";
import { StyledWelcomeTitle } from "./Components/Styled/WelcomeTitle";
import { AppContainer } from "./Components/Styled/AppContainer";
import { GlobalStyle } from "./Components/Styled/GlobalStyle";
import { AsideContainer } from "./Components/Styled/AsideContainer";
import { ContentContainer } from "./Components/Styled/ContentContainer";
import { IdentityContainer } from "./Components/Styled/IdentityContainer";
import { StyledLogo } from "./Components/Styled/Logo";
import { StyledLogoTitle } from "./Components/Styled/LogoTitle";
import { StyledUser } from "./Components/Styled/User";

import { StyledCourses } from "./Screens/Styled/Courses";
import { StyledAddCourses } from "./Screens/Styled/AddCourses";
import { StyledLogin } from "./Screens/Styled/Login";

const App: FC = () => {
  const [isAuth, setIsAuth] = useState(true);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("username");
    if (loggedInUser) {
      return setIsAuth(true);
    }
    setIsAuth(false);
  }, []);

  return (
    <Router>
      <GlobalStyle></GlobalStyle>
      <Switch>
        <Route
          path="/login"
          exact
          component={() => <StyledLogin setIsAuth={setIsAuth} />}
        />
        <Route path="/">
          <AppContainer>
            <AsideContainer>
              <IdentityContainer>
                <StyledLogo></StyledLogo>
                <StyledLogoTitle></StyledLogoTitle>
              </IdentityContainer>
              <StyledUser />
              <StyledMenu />
            </AsideContainer>
            <ContentContainer>
              <ProtectedRoutes
                isAuth={isAuth}
                path={["/", "/home"]}
                exact
                component={StyledWelcomeTitle}
              />
              <ProtectedRoutes
                isAuth={isAuth}
                path="/courses"
                exact
                component={StyledCourses}
              />
              <ProtectedRoutes
                isAuth={isAuth}
                path="/courses/add"
                component={StyledAddCourses}
              />
            </ContentContainer>
          </AppContainer>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
