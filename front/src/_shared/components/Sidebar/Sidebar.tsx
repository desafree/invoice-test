import React, { useContext } from "react";
import ThemeContext from "../../styles/theme/context/themeContext";
import moonIcon from "./icon-moon.svg";
import logo from "./logo.svg";
import { SidebarStyled } from "./Sidebar.styled";

const Sidebar = () => {
  const { changeTheme } = useContext(ThemeContext);

  const handleClick = () => {
    changeTheme();
  };

  return (
    <SidebarStyled>
      <span>
        <img src={logo} alt="logo" />
      </span>
      <button onClick={handleClick}>
        <img src={moonIcon} alt="moon" />
      </button>
    </SidebarStyled>
  );
};

export default Sidebar;
