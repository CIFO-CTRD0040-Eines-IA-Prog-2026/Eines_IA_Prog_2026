function calcularTotal(cantidad, precioUnitario) {
    const totalOriginal = cantidad * precioUnitario;
    let descuento = 0;
    if (cantidad > 10) {
        descuento = totalOriginal * 0.10;
    }
    const totalPagar = totalOriginal - descuento;

    console.log("Total original: " + totalOriginal.toFixed(2) + "€");
    console.log("Descuento aplicado: " + descuento.toFixed(2) + "€");
    console.log("Total a pagar: " + totalPagar.toFixed(2) + "€");

    return totalPagar;
}
