


"use client"
import { ThemeProvider } from "next-themes"
import { useState } from "react";



type themepropvitypes={
    children: React.ReactNode;

}

type actionst={
  tittle?:string,
  show?:boolean
}

function Themesetting({children}:themepropvitypes) {
const [action, setaction] = useState<actionst>({tittle:"created",show:true})
let {tittle}=action
  console.log("the  themedisplayingb")
  return (
    <ThemeProvider   attribute={"class"}  enableSystem  defaultTheme="system">
       {/* <div className="showup">
<button>{tittle}</button>
    </div> */}
      {children}
   
    </ThemeProvider>
  )
}

export default Themesetting