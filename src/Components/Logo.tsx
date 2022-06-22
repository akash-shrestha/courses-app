import React from "react";
import logo from "../logo.png";

interface Props {
  className?: string;
}

const Logo: React.FC<Props> = ({ className }) => {
  return <img className={className} src={logo} alt="logo" />;
};

export default Logo;
