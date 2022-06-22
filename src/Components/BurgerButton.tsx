import React from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

interface Props {
  className?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const BurgerButton = ({ className, onClick }: Props) => {
  return (
    <button className={className} onClick={onClick}>
      <MenuRoundedIcon />
    </button>
  );
};

export default BurgerButton;
