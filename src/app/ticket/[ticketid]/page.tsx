
  type paratype= {
params:{
    ticketid:string| number;
}
  }



let  Ticketitempage =  ({params}:paratype)=>{
console.log(params)
     return <h1>
          ticketitempage {params.ticketid}
     </h1>
}

export default  Ticketitempage;