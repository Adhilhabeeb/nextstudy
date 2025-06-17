"use client"
import { useTheme } from "next-themes"
import { Button } from "../ui/button"
import { Moon, Sun } from "lucide-react"


const Themeswitcher = () => {
    let {theme,setTheme}=useTheme()
  return (
    <div>
      <Button  variant={"secondary"} size={"icon"}   onClick={()=>{
        setTheme(theme=="light"?"dark":"light")
      }}>
{theme=="light"?<Moon/> :<Sun/>}
      </Button>
    </div>
  )
}

export default Themeswitcher
