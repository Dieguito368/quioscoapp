import Image from 'next/image';
import useProviderQuiosco from '@/hooks/useProviderQuiosco';
import { formatCuantity } from '@/helpers';

const ProductSummary = ({ product }) => {
    const { handleEditCuantity, handleDeleteProduct } = useProviderQuiosco();
    return (
        <div className='shadow p-5 mb-8 flex gap-5'>
            <div className='md:w-1/6'>
                <Image 
                    width={ 200 }
                    height={ 100 }
                    src={ `/assets/img/${product.image}.jpg` } 
                    alt={ `Imagen Producto ${product.name}` } 
                />
            </div>
            
            <div className='md:w-5/6 [&>p]:mb-1 flex flex-col justify-center' >
                <p className='text-2xl font-bold'>{ product.name }</p>
                <p className='text-3xl font-bold text-amber-400'>{ formatCuantity(product.price) }</p>
                <p className='text-lg font-bold'>Cantidad: <span>{ product.cuantity }</span></p>
                <p>Subtotal: <span>{ formatCuantity(product.price * product.cuantity) }</span></p>
            </div>

            <div className='flex flex-col justify-center gap-3'>
                <button
                    type='button'
                    className='flex  gap-1 bg-sky-700 hover:bg-sky-900 duration-200 px-5 py-2 text-white uppercase rounded-md font-bold shadow-md w-full'
                    onClick={ () => handleEditCuantity(product.id) }
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={ 1.5 } 
                        stroke="currentColor" 
                        className="w-6 h-6"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" 
                        />
                    </svg>
                    
                    Editar
                </button>
                
                <button
                    type='button'
                    className='flex gap-1 bg-red-700 hover:bg-red-900 duration-200 px-5 py-2 text-white uppercase rounded-md font-bold shadow-md w-full'
                    onClick={ () => handleDeleteProduct(product.id) }
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={ 1.5 } 
                        stroke="currentColor" 
                        className="w-6 h-6"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" 
                        />
                    </svg>

                    Eliminar
                </button>
            </div>
        </div>
    )
}

export default ProductSummary;