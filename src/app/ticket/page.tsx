


import { Ticketshowpagec } from "@/components/datafetching/Tickketshowpage";
import { Suspense } from "react";


let  Ticketpage =     ()=>{



     return <div>

<p>it is the ticketpo</p>

<Suspense>
 <Ticketshowpagec/>

</Suspense>
       </div>
}


let Ticketp=()=>{
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