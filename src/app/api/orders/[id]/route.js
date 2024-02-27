import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const POST = async (req, { params }) => {
    const { id } = params;

    const updatedOrder = await prisma.order.update({
        where: {
            id: parseInt(id)
        },
        data: {
            status: true
        }
    });

    return NextResponse.json(updatedOrder);
} 