


"use client"
import { ThemeProvider } from "next-themes"



type themepropvitypes={
    children: React.ReactNode;

}


function Themesetting({children}:themepropvitypes) {

  console.log("the  themedisplayingb")
  return (
    <ThemeProvider   attribute={"class"}  enableSystem  defaultTheme="system">{children}</ThemeProvider>
  )
}

export default Themesetting