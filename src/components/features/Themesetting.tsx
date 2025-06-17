import { ThemeProvider } from "next-themes"
import React from "react"


type themepropvitypes={
    children: React.ReactNode;

}


function Themesetting({children}:themepropvitypes) {
  return (
    <ThemeProvider   attribute={"class"}  enableSystem  defaultTheme="system">{children}</ThemeProvider>
  )
}

export default Themesetting