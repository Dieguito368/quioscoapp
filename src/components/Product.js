import Image from 'next/image';
import useProviderQuiosco from '@/hooks/useProviderQuiosco';
import { formatCuantity } from '@/helpers';

const Product = ({ product }) => {
    const { name, price, image } = product;

    const { handleClickProduct, handleChangeModal } = useProviderQuiosco();

    return (
        <div className='border p-8 flex flex-col items-center'>
            <div className='w-4/5'>
                <Image 
                    src={ `/assets/img/${image}.jpg` } 
                    alt={ `Imagen Platillo ${name}` } 
                    width={ 150 } 
                    height={ 0 } 
                    className='w-full auto'
                />
            </div>

            <div className='mt-5 h-full w-full flex flex-col justify-between gap-5'>
                <h3 className='text-lg font-bold'>{ name }</h3>
                <p className='font-black text-3xl text-amber-400'>{ formatCuantity(price) }</p>

                <button
                    type='button'
                    className='bg-indigo-600 hover:bg-indigo-800 uppercase w-full p-2 rounded text-white font-bold duration-200'
                    onClick={
                        () => { 
                            handleChangeModal()
                            handleClickProduct(product);
                        } 
                    }
                >Agregar</button>
            </div>
        </div>
    )
}

export default Product;