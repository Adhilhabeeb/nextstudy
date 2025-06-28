import { data, Ticketdatatype } from "@/data";


  async function Getdata():Promise<Ticketdatatype[]> {

    return new Promise((resolve,reject)=>{
// throw  new Error("faild to fetchjh")
             setTimeout(() => {
            return resolve(data)          }, 4000);
    })

}

export default Getdata