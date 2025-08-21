    "use server"


import { prisma } from "@/lib/prisma";





   export  async function  deletefunct(id:string ){

     await prisma.ticket.delete({
        where:{
            id,
        }
    })



 }