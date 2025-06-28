


import { Ticketshowpagec } from "@/components/datafetching/Tickketshowpage";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";


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

      <ErrorBoundary   fallback="failed to fetch the data soemthing wenty wrog">
            <Suspense>
    <Ticketpage/>

    </Suspense>
      </ErrorBoundary>
    
    </div>
  
  )
}

export default Ticketp