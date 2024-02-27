'use client';

import Product from '@/components/Product';
import useProviderQuiosco from '@/hooks/useProviderQuiosco';
import 'animate.css';

const Home = () => {
    const { activeCategory } = useProviderQuiosco();

    return (
        <>
            <h1 className='text-4xl font-black'>{ activeCategory?.name }</h1>

            <p className='text-xl mt-3'>Elige y personaliza tu pedido</p>
            
            <section className='mt-5 grid gap-8 sm:grid-cols-2 xl:grid-cols-3 animate__animated animate__fadeIn'>
                { 
                    activeCategory?.products?.map(product => (
                        <Product key={ product.id } product={ product }/>
                    ))
                }

            </section>
        </>
    );
}

export default Home;