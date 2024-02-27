'use client';

import ProductSummary from '@/components/ProductSummary';
import useProviderQuiosco from '@/hooks/useProviderQuiosco';
import 'animate.css'

const Summary = () => {
    const { order } = useProviderQuiosco();
    
    return (
        <section className='animate__animated animate__fadeIn'>
            <h1 className='text-4xl font-black'>Resumen</h1>
            <p className='text-xl mt-3'>Revisa tu pedido</p>

            {
                order.length === 0 ? (
                    <p className='text-2xl font-bold text-center mt-20'>No hay productos añadidos</p>
                ) : (
                    <div className='mt-5'>
                        { 
                            order.map(productOrder => (
                                <ProductSummary product={ productOrder } key={ productOrder.id }/>
                            ))
                        }
                    </div>
                )
            }
        </section>
    )
}

export default Summary;