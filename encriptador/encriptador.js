/* Declaracion de Variables  */
const mensaje__Ingresado= document.querySelector(".campo__mensaje__ingresado");
const mensaje__Salida= document.querySelector(".campo__mensaje__salida");

/*   llaves de encriptacion
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

// Asignacion del arreglo Matriz

// let llaveEncriptacion=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
console.log

function btnEncriptar(){

    const mensaje__Salida=encriptar(mensaje__Ingresado.value);
    mensaje__Salida.value= mensaje__Salida;
    mensaje__Salida.style.backgroundImage="none"



}



function encriptar(mensaje__Ingresado){

    mensaje__Ingresado= mensaje__Ingresado.tolowerCase;

    let llaveEncriptacion=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

    for (let i=0; i <= llaveEncriptacion.length; i++){

        if(mensaje__Ingresado.includes(llaveEncriptacion[i][0])){

            mensaje__Ingresado= mensaje__Ingresado.replaceAll(llaveEncriptacion[i][0], llaveEncriptacion[i][1]);

        }
    }
    return mensaje__Ingresado;

}
