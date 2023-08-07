import MyThemeProvider from "@/app/theme-provider";
import Navbar from "@/components/Navbar";
import { Paper } from "@mui/material";
import type { Metadata } from "next";
import localFont from "next/font/local";
import React, { FC } from "react";

import "./globals.css";

const vazirmatn = localFont({
  src: "../../public/Vazirmatn.ttf",
  display: "swap",
});
export const metadata: Metadata = {
  title: "Tracy Test",
};

const RootLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html dir="rtl" lang="pe">
      <MyThemeProvider>
        <Paper component="body" className={vazirmatn.className} elevation={0}>
          <Navbar />
          {children}
        </Paper>
      </MyThemeProvider>
    </html>
  );
};
export default RootLayout;
