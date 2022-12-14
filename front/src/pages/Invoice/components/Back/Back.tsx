import React from "react";
import classes from "./Back.module.scss";
import BackIcon from "./icon-arrow-left.svg";
import useTheme from "../../../../hooks/useTheme";
import useGoHome from "../../../../hooks/useGoHome";

const Back = () => {
  const goHome = useGoHome();
  const theme = useTheme();

  return (
    <button
      className={`${classes.container} ${classes[theme]}`}
      onClick={goHome}
    >
      <span>
        <img src={BackIcon} alt="arrow left" />
      </span>
      Go back
    </button>
  );
};

export default Back;
