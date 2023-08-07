import ThemeButton from "@/components/ThemeButton";
import { AppBar, Toolbar } from "@mui/material";
import React from "react";

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <ThemeButton />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
