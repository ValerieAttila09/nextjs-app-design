import prisma from "../prisma";

export const getAllUser = async () => {
  return await prisma.user.findMany()
}