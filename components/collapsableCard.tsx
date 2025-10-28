import prisma from "@/lib/prisma";
import CollapsableCardWrapper from "./collapsableCard.wrapper.client";

export default async function CollapsableCard() {
  const products = await prisma.product.findMany({
    take: 9,
    orderBy: { createdAt: "desc" },
    include: {
      category: true,
      orderItems: true,
    },
  });

  const categories = await prisma.category.findMany();

  return <CollapsableCardWrapper products={products} categories={categories} />;
}