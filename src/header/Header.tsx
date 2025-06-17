import Themeswitcher from "@/components/features/Themeswitcher"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Link from "next/link"




function Header() {
  return (

    <div  style={{width:"100%",background:"yellow"}}>
  <NavigationMenu   style={{}}  >
  <NavigationMenuList   style={{background:"red",width:"100vw",display:"flex",justifyContent:"space-around"
  }}>
    <NavigationMenuItem >
   
   <Link href={"/"}>
      <NavigationMenuTrigger>Home</NavigationMenuTrigger></Link>
      {/* <NavigationMenuContent>
        <NavigationMenuLink>Link</NavigationMenuLink>
      </NavigationMenuContent> */}
    </NavigationMenuItem>

        <NavigationMenuItem>

<Link  href={"/ticket"}>
      <NavigationMenuTrigger>Ticket</NavigationMenuTrigger>
</Link>
      {/* <NavigationMenuContent>
        <NavigationMenuLink>Link</NavigationMenuLink>
      </NavigationMenuContent> */}
    </NavigationMenuItem>
<Themeswitcher/> 
  </NavigationMenuList> 
</NavigationMenu>  </div>
  )
}

export default Header