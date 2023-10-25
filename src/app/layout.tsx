import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { myTheme } from "./lib/theme";
import FluidCursor from "@/app/components/cursor/cursor";
import ReduxProvider from "./redux/provider";
import { ThemeProvider } from "@mui/material";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Test task",
  description: "Test task for ICAP GROUP",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <ThemeProvider theme={myTheme}>
          <ReduxProvider>
            <FluidCursor />
            <main>{children}</main>
          </ReduxProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
