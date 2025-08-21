
import { Ticket } from "@/generated/prisma";
import { prisma } from "@/lib/prisma"



   async function getfilkterdata(idd:string |any): Promise<Ticket|null>{
 


return await prisma.ticket.findUnique({
    where:{
        id:idd
    }
});

}

export {getfilkterdata}