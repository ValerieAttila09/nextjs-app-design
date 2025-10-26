// prisma/seed.ts
import { PrismaClient, Role, OrderStatus } from '../lib/generated/prisma';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  // Buat beberapa kategori
  const categories = await Promise.all(
    Array.from({ length: 5 }).map(() =>
      prisma.category.create({
        data: {
          name: faker.commerce.department(),
        },
      })
    )
  );

  // Buat beberapa user
  const users = await Promise.all(
    Array.from({ length: 10 }).map(() =>
      prisma.user.create({
        data: {
          name: faker.person.fullName(),
          email: faker.internet.email(),
          password: faker.internet.password(),
          role: faker.helpers.arrayElement([Role.ADMIN, Role.USER]),
        },
      })
    )
  );

  // Buat beberapa produk
  const products = await Promise.all(
    Array.from({ length: 20 }).map(() =>
      prisma.product.create({
        data: {
          name: faker.commerce.productName(),
          description: faker.commerce.productDescription(),
          price: parseFloat(faker.commerce.price({ min: 10, max: 500 })),
          stock: faker.number.int({ min: 0, max: 100 }),
          categoryId: faker.helpers.arrayElement(categories).id,
        },
      })
    )
  );

  // Buat beberapa order dengan item
  for (let i = 0; i < 15; i++) {
    const user = faker.helpers.arrayElement(users);
    const order = await prisma.order.create({
      data: {
        userId: user.id,
        status: faker.helpers.arrayElement([
          OrderStatus.PENDING,
          OrderStatus.PAID,
          OrderStatus.SHIPPED,
          OrderStatus.COMPLETED,
          OrderStatus.CANCELED,
        ]),
      },
    });

    // Tambahkan item ke order
    const orderItems = Array.from({ length: faker.number.int({ min: 1, max: 5 }) }).map(() => {
      const product = faker.helpers.arrayElement(products);
      const quantity = faker.number.int({ min: 1, max: 5 });
      return prisma.orderItem.create({
        data: {
          orderId: order.id,
          productId: product.id,
          quantity,
          price: product.price * quantity,
        },
      });
    });

    await Promise.all(orderItems);
  }

  console.log('✅ Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });