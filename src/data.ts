  
    type worktype="open"|"done"
    export type Ticketdatatype={
    id:number;
tittle:string;
content:string;
work:worktype;
   }


   export   const data: Ticketdatatype[] = [
  {
    id: 1,
    tittle: "Introduction",
    content: "This is the introduction content.",
  work:"open"
  },
  {
    id: 2,
    tittle: "Chapter 1",
    content: "This is the content of chapter 1.",work:"done"
  },
  {
    id: 3,
    tittle: "Conclusion",
    content: "This is the conclusion content.",work:"open"
  }
];
