import { data } from "@/data";

  type paratype= {
params:{
    ticketid:string| number;
}
  }



let  Ticketitempage =  ({params}:paratype)=>{
    let ticketdata=data.find(el=>el.id==params.ticketid)
  console.log("is displayingkjhkjbkjbkjbkj")
    console.log(ticketdata,"ticktdatac")

     return <h1 className="text-3xl font-bold underline">
        tittlke si the {ticketdata?.tittle}<br/>
        id  is the {ticketdata?.id}<br/>
        content is the {ticketdata?.id}
     </h1>
}

export default  Ticketitempage;