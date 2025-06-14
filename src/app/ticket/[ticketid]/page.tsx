import { data } from "@/data";

  type paratype= {
params:{
    ticketid:string| number;
}
  }



let  Ticketitempage =  ({params}:paratype)=>{
    let ticketdata=data.find(el=>el.id==params.ticketid)

    console.log(ticketdata,"ticktdatac")

     return <h1>
        tittlke si the {ticketdata?.tittle}<br/>
        id  is the {ticketdata?.id}<br/>
        content is the {ticketdata?.id}
     </h1>
}

export default  Ticketitempage;