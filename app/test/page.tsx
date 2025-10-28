import prisma from "@/lib/prisma"

export default async function Test() {

  const users = await prisma.user.findMany();

  console.table(users);

  return (
    <div>
      {users.map((user) => {
        <p key={user.id}>{user.name}</p>
      })}
    </div>
  )
}