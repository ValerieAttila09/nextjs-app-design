import { faker } from '@faker-js/faker';
import { PrismaClient } from '@/lib/generated/prisma';

const prisma = new PrismaClient();

const main = async () => {
  console.log("Starting seeding...");

  const users = [];

  for (let i = 0; i < 20; i++){
    const user = await prisma.user.create({
      data: {
        email: faker.internet.email().toLowerCase(),
        name: faker.person.fullName(),
      }
    })
    users.push(user);
    console.log(`Created user: ${user.name}`);
  }

  for (const user of users) {
    const postCount = faker.number.int({ min: 1, max: 3});

    for (let i = 0; i < postCount; i++) {
      await prisma.post.create({
        data: {
          title: faker.lorem.sentence(),
          content: faker.lorem.paragraphs(3),
          published: faker.datatype.boolean(),
          authorId: user.id,
        }
      });

      console.log(`Created post for user: ${user.name}`);
    }
  }
  console.log("Seed Completed!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect();
  });