import prisma from "../prisma";

interface User {
  id: number;
  email: string;
  name?: string | null;
}

export const users: User[] = await prisma.user.findMany();