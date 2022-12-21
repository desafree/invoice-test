import React, { FC } from "react";
import BackIcon from "./icon-arrow-left.svg";
import useTheme from "../../../_shared/hooks/useTheme";
import useGoHome from "../../../_shared/hooks/useGoHome";

interface Props {
  className?: string;
  dark?: string;
}

const Back: FC<Props> = ({ className }) => {
  const goHome = useGoHome();
  const theme = useTheme();

  return (
    <button className={className} onClick={goHome}>
      <span>
        <img src={BackIcon} alt="arrow left" />
      </span>
      Go back
    </button>
  );
};

export default Back;
