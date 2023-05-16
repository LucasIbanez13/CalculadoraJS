//esta funcion expresada, esta no tiene nombre, el nombre se le brinda la variable
const sumar = function(a,b){
    return a + b
}

const restar = function(a,b){
    return a- b
}

const multiplicar = function(a,b){
    return a * b
}

const dividir = function(a,b){
    return a / b
}

//Este es un modulo para exportar
//Aqui estamos armando un objeto literal, estamos llamando el nombre de la variable y el valor, ejemplo sumar : sumar o sino "sumar", o podes colocar sumar y colocas toda la funcion
module.exports = {
    sumar,
    restar,
    multiplicar,
    dividir
}