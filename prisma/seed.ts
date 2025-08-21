import { PrismaClient } from "@/generated/prisma";


const prisma = new PrismaClient();

const dataticket = [
  {
    id: 1,
    tittle: "Introduction",
    content: "This is the introduction content.",
    work: "open",
  },
  {
    id: 2,
    tittle: "Chapter 1",
    content: "This is the content of chapter 1.",
    work: "done",
  },
  {
    id: 3,
    tittle: "Conclusion",
    content: "This is the conclusion content.",
    work: "open",
  },
];

async function seed() {
  try {
  
    await prisma.ticket.createMany({
  data:
   [
        {
          title: "Introduction",
          content: "This is the introduction content.",
          status: "Open",
        },
        {
          title: "Chapter 1",
          content: "This is the content of chapter 1.",
          status: "Done",
        },
        {
          title: "Conclusion",
          content: "This is the conclusion content.",
          status: "Open",
        },
      ],
})

    console.log("✅ Seeding completed successfully!");
  } catch (error) {
    console.error("❌ Seeding failed:", error);
  } finally {
    // await prisma.$disconnect();
  }
}

seed();
