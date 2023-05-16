//Aqui estamos llamando las funciones de calculadora.js, si colocamos un console.log(calculadora), nos indicara las funciones que tenemos
const process = require('process');
const calculadora = require('./calculadora');

const operaciones = ['sumar', 'restar', 'multiplicar', 'dividir']
const operacion = process.argv[2];
const numeroA = +process.argv[3];
const numeroB = +process.argv[4];
let resultado = 0;

// si la operacion que queremos hacer esta dentro del array de operaciones nos va a permitir entrar al bloque de sumar, restar, multiplicar y dividir, en caso que la operacion que querramos hacer, por ejemplo potencia, nos va a indicar lo del else "error"
if(operaciones.includes(operacion)){
    //Condicional exportando una funcion de un modulo
if(operacion === "sumar"){
    resultado = calculadora.sumar(numeroA,numeroB)
} else if(operacion === "restar"){
    resultado = calculadora.restar(numeroA,numeroB)
} else if(operacion === "multiplicar"){
    resultado = calculadora.multiplicar(numeroA,numeroB)
} else if(operacion === "dividir"){ //aqui no se le coloca else, ya que si colocamos por ejemplo potencia nos va a dividir
    resultado = calculadora.dividir(numeroA,numeroB)
} 
console.log(resultado);
}else{
    console.log("ERROR: La operacion no es valida")
}





// esta propiedad length nos devuelve la longitud de la array, osea la cantidad de elementos que contiene el array
//console.log(operaciones.length);




