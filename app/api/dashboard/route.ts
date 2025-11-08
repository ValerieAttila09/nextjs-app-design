import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      take: 9,
      orderBy: { createdAt: "desc" },
      include: {
        category: true,
        orderItems: true,
      },
    });
    return NextResponse.json({
      message: 'Data Produk berhasil di fetch!',
      products
    });
  } catch (err) {
    return NextResponse.json({ message: String(err) }, { status: 500 });
  }
}