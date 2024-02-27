import Image from 'next/image';
import { formatCuantity } from '@/helpers';

const Order = ({ order }) => {
    const { id, name, total, pedido } = order;
    
    return (
        <>
            <h2 className='text-xl font-bold'>Orden: <span>{ id }</span></h2>
            <p className='text-lg mt-3'>Cliente: <span>{ name }</span></p>

            <div className='flex felx-col lg:flex-row gap-5 flex-wrap mt-5'>
                { pedido.map(productOrder => (
                    <div key={ productOrder.id } className='flex items-center flex-wrap'>
                        <div className='w-32 mx-auto'>
                            <Image 
                                width={ 100 }
                                height={ 100 }
                                src={ `/assets/img/${productOrder.image}.jpg` } 
                                alt={ `Imagen Producto ${productOrder.name}` }
                                className='w-full'
                            />
                        </div>

                        <div className='p-5 space-y-2'>
                            <h3 className='font-bold text-xl'>{ productOrder.name }</h3>
                            <p className=''>Cantidad: <span>{ productOrder.cuantity }</span></p>
                        </div>
                    </div>
                )) }
            </div>
        </>
    )
}

export default Order;