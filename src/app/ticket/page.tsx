
import { Ticketshowpagec } from "@/components/datafetching/Tickketshowpage";
import { Suspense } from "react";


// export  const  dynamic= "force-dynamic"

const  Ticketpage =     ()=>{



     return <div>

<p>it is the ticket</p>

<Suspense>
 <Ticketshowpagec/>

</Suspense>
       </div>
}


const Ticketp=()=>{
  
  return(

    <div>



      helllllllll



    
            <Suspense>
    <Ticketpage/>

    </Suspense>

    
    </div>
  
  )
}

export default Ticketp