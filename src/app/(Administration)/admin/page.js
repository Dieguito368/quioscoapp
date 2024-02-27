'use client';

import Order from '@/components/Order';
import { formatCuantity } from '@/helpers';
import useSWR from 'swr';
import axios from 'axios';
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
    }
});

const Home = () => {
    const fetcher = () => axios('/api/orders').then( data => data.data);

    const { data: orders, error, isLoading } = useSWR('/api/orders', fetcher, { refreshInterval: 100 });

    const completeOrder = id => {
        try {
            Swal.fire({
                title: "¿Estás seguro?",
                text: "¡No podrás revertir esto!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "!Si, completar!",
                cancelButtonText: "Cancelar"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    const { data } = await axios.post(`/api/orders/${id}`);

                    console.log(data);

                    Toast.fire({
                        icon: "success",
                        title: "Orden completada"
                    });
                }
            });
        } catch (error) {
            Toast.fire({
                icon: "error",
                title: "Hubo algun error"
            });
        }
    }

    return (
        <>
            <h1 className='text-4xl font-black'>Panel de Administración</h1>
            <p className='text-xl mt-3'>Administra las ordenes pendientes en este apartado</p>

            <section className='mt-5 flex flex-col gap-8'>
                { 
                    orders?.length ?  
                        orders?.map(order => (
                            <div key={ order.id } className='border p-8'>
                                <Order order={ order } />

                                <div className='flex items-center justify-between mt-5 gap-5 flex-wrap'>
                                    <p className='text-amber-400 font-black text-2xl'>Total a pagar: <span>{ formatCuantity(order.total) }</span></p>
                                    
                                    <button
                                        type='button'
                                        onClick={ () => completeOrder(order.id) } 
                                        className='bg-indigo-600 hover:bg-indigo-800 p-3 text-white uppercase font-bold cursor-pointer duration-200 rounded-md'
                                    >Completar orden</button>
                                </div>
                            </div>
                        )) 
                    : (
                        <p className='text-2xl font-bold text-center mt-10'>No hay ordenes pendientes</p>
                    ) 
                }
            </section>
        </>
    );
}

export default Home;