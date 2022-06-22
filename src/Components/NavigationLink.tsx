import React from "react";
import { NavLink } from "react-router-dom";

interface Props {
  linkName: string;
  link: string;
  className?: string;
}

const NavigationLink: React.FC<Props> = ({ className, linkName, link }) => {
  return (
    <NavLink className={className} to={link} activeClassName="active">
      {linkName}
    </NavLink>
  );
};

export default NavigationLink;
