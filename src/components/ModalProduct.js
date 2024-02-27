'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import useProviderQuiosco from '@/hooks/useProviderQuiosco';
import { formatCuantity } from '@/helpers';
import Modal from 'react-modal';
import 'animate.css';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('body');

const ModalProduct = () => {
    const { modal, activeProduct, handleClickProduct, handleChangeModal, order, addOrder } = useProviderQuiosco();
    const [ cuantity, setCuantity ] = useState(1);
    const [ edition, setEdition ] = useState(false);
    const [ animation, setAnimation ] = useState(false);

    useEffect(() => {
        const productOrder = order.find(productOrder => productOrder.id === activeProduct.id);
        
        if(productOrder) {
            setEdition(true);
            setCuantity(productOrder.cuantity);
            
            return;
        }
        
        setEdition(false);
        setCuantity(1);
    }, [ activeProduct, order ]);
    
    return (
        <Modal
            isOpen={ modal }
            style={ customStyles }
        >
            <div className={ `md:flex gap-10 animate__animated ${animation ? 'animate__fadeOut' : 'animate__fadeIn'}` }>
                <div className='md:w-1/3'>
                    <Image 
                        width={ 180 }
                        height={ 100 }
                        alt={ `Imagen Platillo ${activeProduct?.name}` }
                        src={ `/assets/img/${activeProduct?.image}.jpg` }
                        className='w-auto h-auto'
                    />
                </div>

                <div className='md:w-2/3'>
                    <div className='flex justify-end mb-2'>
                        <button 
                            type='button' 
                            onClick={ 
                                () => {
                                    setAnimation(true);

                                    setTimeout(() => {
                                        handleChangeModal();
                                        setAnimation(false);
                                    }, 800);
                                }
                            }
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
                                    d="M6 18 18 6M6 6l12 12" 
                                />
                            </svg>
                        </button>
                    </div>

                    <h3 className='text-2xl font-bold '>{ activeProduct?.name }</h3>

                    <p className='font-black text-3xl text-amber-400 mt-2'>{ formatCuantity(activeProduct.price) }</p>

                    <div className='flex gap-3 mt-2'>
                        <button 
                            type='button' 
                            onClick={ 
                                () => {
                                    if(cuantity <= 1) return
                                    setCuantity(cuantity - 1) 
                                } 
                            }
                        >
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                strokeWidth={ 1.5 } 
                                stroke="currentColor" 
                                className="w-7 h-7"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" 
                                />
                            </svg>
                        </button>

                        <p className='text-2xl'>{ cuantity }</p>
                        
                        <button type='button' onClick={ () => setCuantity(cuantity + 1) }>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                strokeWidth={ 1.5 } 
                                stroke="currentColor" 
                                className="w-7 h-7"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" 
                                />
                            </svg>

                        </button>
                    </div>

                    <button 
                        type='button' 
                        className='bg-indigo-600 hover:bg-indigo-800 text-white font-bold uppercase rounded duration-200 px-5 py-2 mt-3'
                        onClick={ 
                            () => {
                                addOrder({ ...activeProduct, cuantity });
                               
                                setAnimation(true);

                                setTimeout(() => {
                                    handleChangeModal();
                                    setAnimation(false);
                                }, 700);                            
                            }
                        }
                    >{  edition ? 'Actualizar cantidad' : 'Añadir al pedido' }</button>
                </div>
            </div>
        </Modal>
    )
}

export default ModalProduct;