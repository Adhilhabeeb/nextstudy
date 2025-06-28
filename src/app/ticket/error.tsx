 
 
 "use client"
 function Errorfunction({error}:{error:Error}){

    return (
        <div>
            {error.message || " something happen"}
        </div>
    )
  }

  export default Errorfunction


  