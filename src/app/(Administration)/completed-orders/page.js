'use client';

import Order from '@/components/Order';
import axios from 'axios';
import useSWR from 'swr';
import { formatCuantity } from '@/helpers';

const CompletedOrders = () => {
    const fetcher = () => axios('/api/completed-orders').then( data => data.data);

    const { data: orders, error, isLoading } = useSWR('/api/completed-orders', fetcher, { refreshInterval: 100 });

    return (
        <>
            <h1 className='text-4xl font-black'>Panel de Administración</h1>
            <p className='text-xl mt-3'>Administra las ordenes completadas en este apartado</p>

            <section className='mt-5 flex flex-col gap-8'>
                { 
                    orders?.length ?  
                        orders?.map(order => (
                            <div className='border p-8' key={ order.id }>
                                <Order order={ order } />

                                <div className='flex items-center justify-between mt-5 gap-5'>
                                    <p className='text-amber-400 font-black text-2xl'>Total pagado: <span>{ formatCuantity(order.total) }</span></p>
                                </div>
                            </div>
                        )) 
                    : (
                        <p className='text-2xl font-bold text-center mt-10'>No hay ordenes completadas</p>
                    ) 
                }
            </section>
        </>
    )
}

export default CompletedOrders;