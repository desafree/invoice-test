import { ThemeProvider as ThemeProviderStyledComponents } from "styled-components";
import { FC, ReactNode } from "react";

const themeObj = {
  color: {
    purple: {
      primary: "#7c5dfa",
      secondary: "#9277f",
    },

    blue: {
      primary: "#1e2139",
      secondary: "#252945",
    },

    white: {
      primary: "#dfe3fa",
      secondary: "#f8f8f8",
    },

    grey: {
      primary: "#888eb0",
      secondary: "#7e88c3",
    },

    red: {
      primary: "#ec5757",
      secondary: "#9277ff",
    },

    black: "0c0e16",
  },
};

interface Props {
  children: ReactNode;
}

export const ThemeProvider: FC<Props> = ({ children }) => {
  return (
    <ThemeProviderStyledComponents theme={themeObj}>
      {children}
    </ThemeProviderStyledComponents>
  );
};
