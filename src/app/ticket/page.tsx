import { data } from "@/data";
import { ticketitempath } from "@/path";
import Link from "next/link";

let  Ticketpage =  ()=>{
    
     return <div>


{data.map(el=>{


return (<div   key={el.id} >
<Link  href={ticketitempath(el.id)}>go to ticket {el.id}</Link>

  
   
    <br/> </div>
)

})}

       </div>
}

export default  Ticketpage;