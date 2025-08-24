
"use client"

import { createTicket, deletefunct } from "@/actions/deleteaction"
import { prisma } from "@/lib/prisma"
import { ticketpath } from "@/path"
import { revalidatePath } from "next/cache"
import {  useTransition } from "react"



function Deletebutton({id}:{id:string}) {
 let [pending,starttransition]=  useTransition()

//   async function createTicket() {
//     "use server"
//     await prisma.ticket.create({
//       data: {
//         title: "Introductionannnnnnnnnnn " + id,
//         content: "This is the introduction content.annnnn"+id,
//         status: "Open",
//       },
//     })
//     revalidatePath(ticketpath())
//   }

    /////////////////////////////////////using while use client  
// let handledelete=()=>{
//  alert(id)
//  deletefunct(id)
// // router.refresh()
//  //  we cant  call  serverside code in clientb so we create a a action in action foilder
// }

//   return (
//     <div>

//         <button  onClick={()=>handledelete()} style={{ color:"black",background:"white"}}>Delete</button>
//     </div>
//   )
    /////////////////////////////////////using while use clientwe can use the onclick  othewise  we can use  like  binding the delete function in a a form 

return (
   <>
   
   

             <button 
 onClick={()=>{
    starttransition(async ()=>{
   
 await  deletefunct(id)
    })
 }}
  style={{ color:"black",background:"white"}}>Delete {pending&& "is pending delete"}</button>
 
       

       <form action={ async ()=>{
        starttransition(async ()=>{
   
    await  createTicket(id)
    })
  
       }}>
        <button  disabled={pending} > create </button>
       </form>
   
   </>


)

}

export default Deletebutton