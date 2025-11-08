import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        category: true,
        orderItems: true,
      },
    });

    const totalPrice: number = products.reduce(
      (sum, product) => sum + product.price, 0
    );

    return NextResponse.json({
      message: 'Data Produk berhasil di fetch!',
      totalPrice
    });
  } catch (err) {
    return NextResponse.json({ message: String(err) }, { status: 500 });
  }
}
