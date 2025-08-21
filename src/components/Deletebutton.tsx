
//nam
"use client"
import { deletefunct } from "@/actions/deleteaction"
import { ticketpath } from "@/path"
import { redirect } from "next/navigation"
import { useRouter } from "next/navigation"


function Deletebutton({id}:{id:string}) {
    let router=useRouter()


    /////////////////////////////////////using while use client  
// let handledelete=()=>{
//  alert(id)
//  deletefunct(id)
// // router.refresh()
//  //  we cant  call  serverside code in clientb so we create a a action in action foilder
// }

//   return (
//     <div>

//         <button  onClick={()=>handledelete()} style={{ color:"black",background:"white"}}>Delete</button>
//     </div>
//   )
    /////////////////////////////////////using while use clientwe can use the onclick  othewise  we can use  like  binding the delete function in a a form 

return (
   <form  action={async () => { deletefunct(id)
router
    redirect(ticketpath())

router.refresh()

   }}>
//         <button   style={{ color:"black",background:"white"}}>Delete</button>
    // redirect(ticketpath())

   </form>
)

}

export default Deletebutton