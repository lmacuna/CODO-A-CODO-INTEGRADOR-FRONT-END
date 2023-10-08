const calcular = () => {
    const ticket = 1000;
    let total = 0;
    let cantidad = document.querySelector("#cantidad").value
    let desc = document.querySelector("#descuento").value
    let subtotal = cantidad * ticket

    total = subtotal - [(subtotal * desc) / 100]


    return (
        document.querySelector("#subTotal").innerText = subtotal > 1 ? subtotal : '0',
        document.querySelector("#total").innerText = total > 1 ? total : '0'
    )
}