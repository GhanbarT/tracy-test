"use client";

import { ThemeProvider, createTheme } from "@mui/material";
import { Direction } from "@mui/system/createTheme/createTheme";
import React, { FC } from "react";

const baseTheme = {
  direction: "rtl" as Direction,
  typography: {
    fontFamily: "vazirmatn",
  },
};

const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: "light",
    primary: {
      main: "#6cd219",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: "dark",
    primary: {
      main: "#c6f990",
    },
    secondary: {
      main: "#f48fb1",
    },
  },
});

// Create a context object that will hold the current theme and the toggle function
export const ThemeContext = React.createContext({
  theme: lightTheme,
  toggleTheme: () => {},
});

const MyThemeProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  // Use state hook to store the current theme
  const [theme, setTheme] = React.useState(lightTheme);

  // Define a function to toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default MyThemeProvider;
