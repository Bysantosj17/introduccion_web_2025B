//condicional 

var edad = Number(prompt("ingresa tu edad"));

if (edad > 20) {
    console.log("eres mayor de 20 años")
} else if (edad === 20) {
    console.log("Tienes 20 años")
} else {
    console.log("Eres menor de 20 años")
}

//condicional compuesta

if (edad >= 0 && edad < 2) {
    console.log("Eres menor de 20 años")
} else if (edad >= 20 && edad <= 40) {
    console.log("Tienes entre 20 y 40 años")
} else {
    console.log("Eres mayor de 40 años")
}

//switch

switch (new Date().getDay()) {
    case 6:
        text = "hoy es sabado"
        break;
    case 0:
        text = "hoy es domingo"
        break;
    default:
        text = "Hoy es un dia entre semana"
        break;
}

document.write(text)