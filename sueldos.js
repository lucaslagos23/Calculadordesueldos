let usuario = true;
while (usuario) {
    let nombredeusuario = prompt("Ingrese su nombre de usuario para iniciar sesión");
    if (nombredeusuario != "") {
        alert("Bienvenid@ " + nombredeusuario + "!");
        alert("En SueldoClaro, conocemos el valor de tu esfuerzo");
        usuario = false;
    } else {
        alert("El usuario ingresado es incorrecto");
    }
}
function calcularsueldo(sueldobruto, obrasocial = 0.03, jubilacion = 0.11, ley19032 = 0.03) {
    let descuentos = sueldobruto * (obrasocial + jubilacion + ley19032);
    alert("El descuento total es: $" + descuentos);
    return sueldobruto - descuentos;
}
let ingresodatos = true;
while (ingresodatos) {
    let ingresosueldo = parseFloat(prompt("Por favor, introduzca su ingreso mensual en pesos $"));
    let obrasocial = parseFloat(prompt("Ingrese la tasa de Obra social (por ejemplo, 0.03 para 3%):"));
    let jubilacion = parseFloat(prompt("Ingrese la tasa de Jubilación (por ejemplo, 0.11 para 11%):"));
    let ley19032 = parseFloat(prompt("Ingrese la tasa de la Ley 19032 (por ejemplo, 0.03 para 3%):"));
    
    let sueldoneto = calcularsueldo(ingresosueldo, obrasocial, jubilacion, ley19032);
    alert("Su sueldo neto a cobrar es de: $" + sueldoneto);
    
    let accionconfirmar = prompt("¿Desea calcular otro sueldo?  Ingrese SI o N0");
    if (accionconfirmar == "NO") {
        ingresodatos = false;
    }
}
alert("¡Gracias por usar nuestra aplicación! Esperamos que hayas encontrado la información que necesitabas. Si tienes más preguntas en el futuro, no dudes en volver. ¡Ten un día maravilloso!");