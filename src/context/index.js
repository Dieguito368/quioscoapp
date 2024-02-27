'use client';

import { useRouter } from 'next/navigation';
import { createContext, useState, useEffect } from 'react';
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

export const ContextQuiosco = createContext();

const ProviderQuiosco = ({ children }) => {
    const [categories, setCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState({});
    const [activeProduct, setActiveProduct] = useState({});
    const [modal, setModal] = useState(false);
    const [order, setOrder] = useState([]);
    const [name, setName] = useState('');
    const [total, setTotal] = useState(0);

    useEffect(() => {
        getCategories();
    }, []);

    useEffect(() => {
        setActiveCategory(categories[0]);
    }, [categories]);

    useEffect(() => {
        const newTotal = order.reduce((total, productOrder) => (productOrder.price * productOrder.cuantity) + total, 0);

        setTotal(newTotal);
    }, [order]);

    const router = useRouter();

    const getCategories = async () => {
        try {
            const { data: categories } = await axios('/api/categories');

            setCategories(categories);
        } catch (error) {
            console.log(error);
        }
    }

    const handleClickCategorie = id => {
        const category = categories.filter(categoryState => categoryState.id === id);

        setActiveCategory(category[0]);

        router.push('/');
    }

    const handleClickProduct = product => setActiveProduct(product);

    const handleChangeModal = () => setModal(!modal);

    const addOrder = ({ categoryId, ...product }) => {
        const exists = order.some(productOrder => productOrder.id === product.id);

        if (exists) {
            const updatedOrder = order.map(productOrder => {
                if (productOrder.id === product.id) {
                    productOrder.cuantity = product.cuantity;
                }

                return productOrder;
            });

            setOrder(updatedOrder);

            Toast.fire({
                icon: "success",
                title: "Se actualizó tu pedido"
            });
        } else {
            setOrder([...order, product]);

            Toast.fire({
                icon: "success",
                title: "Se agregó a tu pedido"
            });
        }
    }

    const handleEditCuantity = id => {
        const productEdit = order.find(productOrder => productOrder.id === id);

        setActiveProduct(productEdit);

        handleChangeModal();
    }

    const handleDeleteProduct = id => {
        Swal.fire({
            title: "¿Estás seguro?",
            text: "¡No podrás revertir esto!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "!Si, eliminar!",
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                const updateOrder = order.filter(productOrder => productOrder.id !== id);

                Toast.fire({
                    icon: "success",
                    title: "Se eliminó del pedido correctamente"
                });

                setOrder(updateOrder);
            }
        });
    }

    const confirmOrder = async e => {
        e.preventDefault();

        try {
            const { data } = await axios.post('/api/orders', { order, name, date: Date.now().toString(), total });

            setActiveCategory(categories[0]);
            setOrder([]);
            setName('');
            setTotal(0);

            Toast.fire({
                icon: "success",
                title: "Pedido realizado correctamente"
            });

            router.push('/');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <ContextQuiosco.Provider value={{
            categories,
            activeCategory,
            handleClickCategorie,
            activeProduct,
            handleClickProduct,
            modal,
            handleChangeModal,
            order,
            addOrder,
            handleEditCuantity,
            handleDeleteProduct,
            total,
            name,
            setName,
            confirmOrder
        }}>
            {children}
        </ContextQuiosco.Provider>
    )
}

export default ProviderQuiosco;