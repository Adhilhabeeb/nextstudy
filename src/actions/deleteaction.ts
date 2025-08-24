    "use server"


import { prisma } from "@/lib/prisma";
import { ticketitempath, ticketpath } from "@/path";
import { revalidatePath } from "next/cache";





   export  async function  deletefunct(id:string ){

     await prisma.ticket.delete({
        where:{
            id,
        }
    })
    revalidatePath(ticketpath())



 }
    export  async function createTicket(id :string) {
 
    await prisma.ticket.create({
      data: {
        title: "Introductionannnnnnnnnnn " + id,
        content: "This is the introduction content.annnnn"+id,
        status: "Open",
      },
    })
    revalidatePath(ticketpath())
  }
