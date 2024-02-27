
export const formatCuantity = cuantity => {

    return Number(cuantity).toLocaleString('es-MX', {
        style: 'currency',
        currency: 'MXN'
    });
}