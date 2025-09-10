"useclient"

import { useState } from "react"

function CreateTicketForm({acytion,id}:{
    acytion: (formData: FormData) => void
  ,id:number| string
}) {
    const [tittle, settittle] = useState("")
    const [content, setcontent] = useState("")
  return (
  
      <form action={ acytion}>
          <input style={{background:"red"}} hidden name="id" value={id} /><br/>
          <input  style={{background:"red"}}  name="tittle"  value={tittle}  onChange={(e)=>settittle(e.target.value)}/><br/>
          <input  style={{background:"red"}} value={content}   onChange={(e)=>setcontent(e.target.value)} name="content" /><br/>

        <button type="submit" > create   </button>
       </form>
  )
}

export default CreateTicketForm