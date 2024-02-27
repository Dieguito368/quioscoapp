import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export const GET = async () => {
    const orders = await prisma.order.findMany({
        where: {
            status: true
        }
    });

    return NextResponse.json(orders);
}