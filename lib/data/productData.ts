import prisma from "../prisma";

export const getAllProducts = async () => {
  return await prisma.product.findMany();
}