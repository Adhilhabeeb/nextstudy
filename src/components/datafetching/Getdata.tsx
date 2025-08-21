
import { prisma } from "@/lib/prisma";


  async function Getdata(){

   return  await prisma.ticket.findMany({
    orderBy:{
      createdAt:"desc"
    }
   })

}

export default Getdata