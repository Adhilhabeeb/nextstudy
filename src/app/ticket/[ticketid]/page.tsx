

import { getfilkterdata } from "@/components/datafetching/getfilter";
import { data, Ticketdatatype } from "@/data";
import { notFound } from "next/navigation";

  type paratype= {
params:{
    ticketid:string| number;
}
  }



let  Ticketitempage = async (   {params}:paratype)=>{
    // let ticketdata=data.find(el=>el.id==params.ticketid)
   
  console.log(" hello ing the tlet icketitemonespage", getfilkterdata(params.ticketid))

let ticketdata=getfilkterdata(params.ticketid)

if (!ticketdata) {
  return   notFound()
}
     return <h1 className="text-3xl font-bold underline">
        tittlke si the {ticketdata?.tittle}<br/>
        id  is the {ticketdata?.id}<br/>
        content is the {ticketdata?.id}
     </h1>
}

export default  Ticketitempage;