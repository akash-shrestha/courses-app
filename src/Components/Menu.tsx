import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { StyledVersion } from "./Styled/Version";
import { StyledLocaleSwitcher } from "./Styled/LocaleSwitcher";
import { StyledNavigationLink } from "./Styled/NavigationLink";
import { NavContainer } from "./Styled/NavContainer";
import { StyledBurgerButton } from "./Styled/BurgerButton";

interface Props {
  className?: string;
}

const Menu = ({ className }: Props) => {
  const { t } = useTranslation();

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={className}>
      <StyledBurgerButton
        className={
          showMenu ? "styled-burger-button-active" : "styled-burger-button"
        }
        onClick={toggleMenu}
      />
      <div className="menu-items" id={showMenu ? "active" : ""}>
        <NavContainer className="nav-container">
          <StyledNavigationLink
            linkName={t("navigation.home")}
            link="/home"
          ></StyledNavigationLink>
          <StyledNavigationLink
            linkName={t("navigation.courses")}
            link="/courses"
          ></StyledNavigationLink>
          <StyledNavigationLink
            linkName={t("navigation.methodology")}
            link="/methodology"
          ></StyledNavigationLink>
        </NavContainer>
        <StyledLocaleSwitcher />
        <StyledVersion />
      </div>
    </div>
  );
};

export default Menu;
