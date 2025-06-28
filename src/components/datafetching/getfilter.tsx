import { data, Ticketdatatype } from "@/data"



function getfilkterdata(id:string|number): Ticketdatatype| null |undefined {
 
let datafilter=data.find(el=>el.id==id)

return datafilter
}

export {getfilkterdata}