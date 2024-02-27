import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export const GET = async (req) => {
    const orders = await prisma.order.findMany({
        where: {
            status: false
        }
    });

    return NextResponse.json(orders);
}

export const POST = async (req) => {
    const data = await req.json();

    const { name, total, date, order: pedido } = data;

    const order = await prisma.order.create({ 
        data: {
            name,
            total,
            date,
            pedido
        }
    });
    
    return NextResponse.json(order);
}