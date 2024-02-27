'use client';

import { useEffect } from 'react';
import useProviderQuiosco from '@/hooks/useProviderQuiosco';
import { formatCuantity } from '@/helpers';
import 'animate.css'

const Total = () => {
    const { order, total, name, setName, confirmOrder } = useProviderQuiosco();

    useEffect(() => {
        checkOrder();
    }, [ order ]);

    const checkOrder = () => order.length === 0 || name === '' || name.length < 3;

    return (
        <div className='animate__animated animate__fadeIn'>
            <h1 className='text-4xl font-black'>Datos y total</h1>

            <p className='text-xl mt-3'>Confirma tu pedido</p>

            <form action='#' className='mt-3' onSubmit={ confirmOrder }>
                <div>
                    <label 
                        htmlFor='name'
                        className='block text-slate-800 text-lg font-bold mb-1 uppercase'>Nombre:</label>
                    <input 
                        type='text' 
                        id='name'
                        value={ name }
                        className='w-full md:w-3/4 lg:w-1/2 bg-gray-200 py-2 px-3 rounded-md' 
                        onChange={ e => setName(e.target.value) }
                    />
                </div>

                <div className='mt-10'>
                    <p className='text-xl'>Total a pagar <span className='font-bold'>{ formatCuantity(total) }</span></p>
                </div>

                <input 
                    type='submit'
                    value='Confirmar pedido'
                    className='disabled:cursor-not-allowed disabled:bg-indigo-300 w-auto uppercase bg-indigo-600 hover:bg-indigo-800 duration-200 text-white font-bold px-5 py-3 rounded-md mt-3 cursor-pointer'
                    disabled={ checkOrder() }
                />
            </form>
        </div>
    )
}

export default Total;