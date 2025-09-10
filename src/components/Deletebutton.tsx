
"use client"

import { createTicket, deletefunct } from "@/actions/deleteaction"
import { prisma } from "@/lib/prisma"
import { ticketpath } from "@/path"
import { revalidatePath } from "next/cache"
import {  useActionState, useTransition } from "react"
import CreateTicketForm from "./createForm"



function Deletebutton({id}:{id:string}) {
  let [actionstate,acytion]= useActionState(createTicket.bind("",id),{message:""}
  )
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
   
   {actionstate.message?`
 the messga eis the mm ${actionstate.message}`:""}

             <button 
 onClick={()=>{
    starttransition(async ()=>{
   
 await  deletefunct(id)
    })
 }}
  style={{ color:"black",background:"white"}}>Delete {pending&& "is pending delete"}</button>
 
     

     <CreateTicketForm acytion={acytion} id={id} />
   
   </>


)

}

export default Deletebutton