import { data, Ticketdatatype } from "@/data";


  async function Getdata():Promise<Ticketdatatype[]> {

    return new Promise((resolve,reject)=>{

         return    setTimeout(() => {
            return resolve(data)          }, 2000);
    })

}

export default Getdata