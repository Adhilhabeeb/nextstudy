

import { buttonVariants } from "@/components/ui/button";  
 import { ticketitempath } from "@/path";
import Link from "next/link";

import {
  Card,
 
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CheckCheck, ExternalLink, Sparkle } from "lucide-react";
import { useEffect, useState } from "react";
import {  Ticketdatatype } from "@/data";
import Getdata from "@/components/datafetching/Getdata";
let ticketicon={
  
    open:<ExternalLink color={"yellow"} />,done:<CheckCheck color="#e0ff42" />
}


let  Ticketpage =   async  ()=>{
console.log("toivvtt pgeerenferd")
let data=await Getdata()


     return <div>


{data.map(el=>{


// return (

// <div   key={el.id} >
// <Link      className={buttonVariants({variant:"outline"})}  href={ticketitempath(el.id)}>go to ticket {el.id}</Link>
//   {ticketicon[el.work]}
  
   
//     <br/> </div>
// )
return (
  <Card  key={el.id}   >
  <CardHeader>
    <CardTitle>{el.tittle}</CardTitle>
    {/* <CardDescription>Card Description</CardDescription> */}
    <CardDescription>
      status {ticketicon[el.work]}

    </CardDescription>
  </CardHeader>
  <CardContent>
    <p>{el.content}</p>
  </CardContent>
  <CardFooter>
    <div   key={el.id} > <Link      className={buttonVariants({variant:"destructive"})}  href={ticketitempath(el.id)}>view 
    </Link>
  
   
//  </div>
  </CardFooter>    <br/>
</Card>
)

})}

       </div>
}

export default  Ticketpage;