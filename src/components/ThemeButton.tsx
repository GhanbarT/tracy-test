"use client";

import { ThemeContext } from "@/app/theme-provider";
import { Switch } from "@mui/material";
import React from "react";

const ThemeButton = () => {
  // Use context hook to access the current theme and the toggle function
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  // Return a switch button that changes the theme on click
  return (
    <Switch
      checked={theme.palette.mode === "dark"}
      onChange={toggleTheme}
      color="secondary"
    />
  );
};

export default ThemeButton;
