import { getfilkterdata } from "@/components/datafetching/getfilter";
import { Ticket } from "@/generated/prisma";
import { notFound } from "next/navigation";
import { Suspense } from "react";

async function Ticketitempage({params}:{
  params:{
    ticketid:string
  }
}) {
  const ticketdata: Ticket | null = await getfilkterdata(params.ticketid);

  if (!ticketdata) {
    return notFound();
  }

  return (
    <h1 className="text-3xl font-bold underline">
      title is the {ticketdata.status} <br />
      id is the {ticketdata.id} <br />
      content is the {ticketdata.title}
    </h1>
  );
}

type Params = Promise<{ ticketid: string }>;
export default async function Itempage({params}: {
 params:Params
}){
  const { ticketid } = await params;
  console.log(ticketid,"ithannmown ticketid")
  return(
    <div>
      <Suspense>
        <Ticketitempage params={{ticketid}}/>
      </Suspense>
    </div>
  )
}