    "use server"


import { prisma } from "@/lib/prisma";
import { ticketitempath, ticketpath } from "@/path";
import { revalidatePath } from "next/cache";


import * as z from "zod";


   export  async function  deletefunct(id:string ){

     await prisma.ticket.delete({
        where:{
            id,
        }
    })
    revalidatePath(ticketpath())



 }


 let  formcreatpa=z.object({
   tittle: z.string(),
   content:z.string()

 }
 )
    export  async function createTicket(id :string,state:any,formdata:FormData) :Promise<{message:string}> {

let tittle=formdata.get('tittle')
let content =formdata.get('content')


 try{
  
const data = formcreatpa.parse({
tittle,content
});
      console.log("tittle ",tittle,"content ",content,"and the data from zod is :",data)
      await prisma.ticket.create({
      data: {
        title:data.tittle ,
        content: data.content,
        status: "Open",
      },
    })
    revalidatePath(ticketpath())

    return {message:"created  "}

 }catch{
  return {message:"not created "}
 }

  }
